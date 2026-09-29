import os
import re
from PIL import Image, ImageDraw, ImageFont

# Ensure target directories exist
os.makedirs("public/images/articles", exist_ok=True)
os.makedirs("public/images", exist_ok=True)

# Read all image names from find-all-images.ts output
# We can extract all images by reading all article files
articles_dir = "src/data/articles"
image_paths = set()

for fname in os.listdir(articles_dir):
    if fname.endswith(".ts"):
        fpath = os.path.join(articles_dir, fname)
        with open(fpath, "r", encoding="utf-8") as f:
            content = f.read()
            # Match /images/articles/*.jpg
            matches = re.findall(r'["\'](/images/articles/[^"\']+\.jpg)["\']', content)
            for m in matches:
                image_paths.add(m)

print(f"Found {len(image_paths)} unique article image paths.")

# Add common global images
global_images = [
    "public/images/og-default.jpg",
    "public/images/placeholder.jpg",
]

# Color palettes for varied aviation imagery
PALETTES = [
    # Deep Navy to Blue Accent (Classic Delta)
    ((11, 26, 48), (30, 75, 140), (220, 235, 255), (37, 99, 235)),
    # Runway Twilight / Dark Slate
    ((15, 23, 42), (30, 58, 95), (241, 245, 249), (56, 189, 248)),
    # Caribbean Tropical / Sunny Sky
    ((7, 40, 75), (14, 116, 144), (236, 254, 255), (6, 182, 212)),
    # High Altitude Stratosphere
    ((17, 24, 39), (55, 48, 163), (238, 242, 255), (129, 140, 248)),
    # Sunset Horizon / Long Haul
    ((26, 16, 40), (88, 28, 135), (250, 245, 255), (217, 70, 239)),
]

def format_title_from_filename(filename):
    name = os.path.splitext(filename)[0]
    words = name.replace("-", " ").replace("_", " ").split()
    capitalized = [w.capitalize() for w in words]
    # Limit to reasonable length
    text = " ".join(capitalized)
    if len(text) > 48:
        text = text[:45] + "..."
    return text

def create_aviation_image(filepath, title_text, palette_idx=0, width=1200, height=675):
    p = PALETTES[palette_idx % len(PALETTES)]
    c_start, c_end, c_text, c_accent = p

    img = Image.new("RGB", (width, height))
    draw = ImageDraw.Draw(img)

    # Vertical linear gradient
    for y in range(height):
        ratio = y / height
        r = int(c_start[0] * (1 - ratio) + c_end[0] * ratio)
        g = int(c_start[1] * (1 - ratio) + c_end[1] * ratio)
        b = int(c_start[2] * (1 - ratio) + c_end[2] * ratio)
        draw.line([(0, y), (width, y)], fill=(r, g, b))

    # Decorative geometric aviation lines (subtle radar / horizon grid)
    accent_faint = (c_accent[0], c_accent[1], c_accent[2])
    draw.line([(0, height - 120), (width, height - 120)], fill=(accent_faint[0], accent_faint[1], accent_faint[2]), width=2)
    draw.line([(0, height - 110), (width, height - 110)], fill=(accent_faint[0]//2, accent_faint[1]//2, accent_faint[2]//2), width=1)

    # Diagonal flight path lines
    for offset in range(-200, width + 400, 160):
        draw.line([(offset, height), (offset + 300, 0)], fill=(255, 255, 255, 12), width=1)

    # Draw aircraft silhouette / triangle motif in top right
    tx, ty = width - 180, 120
    draw.polygon([(tx, ty - 50), (tx - 60, ty + 40), (tx, ty + 20), (tx + 60, ty + 40)], fill=(255, 255, 255))
    draw.polygon([(tx, ty - 50), (tx - 60, ty + 40), (tx, ty + 20)], fill=(c_accent[0], c_accent[1], c_accent[2]))

    # Try to load default font, or draw clean geometric text
    # Draw badge in top left
    badge_x, badge_y = 80, 80
    draw.rectangle([badge_x, badge_y, badge_x + 290, badge_y + 36], fill=(c_accent[0], c_accent[1], c_accent[2]))
    draw.text((badge_x + 14, badge_y + 10), "FLIGHT TRAVEL ASSISTANCE", fill=(255, 255, 255))

    # Draw main headline text
    # Word wrap if needed
    draw.text((80, height // 2 - 40), title_text, fill=(255, 255, 255))
    draw.text((80, height // 2 + 30), "Independent Travel Information & Guides", fill=(c_text[0], c_text[1], c_text[2]))

    # Subtle bottom branding bar
    draw.rectangle([0, height - 6, width, height], fill=(c_accent[0], c_accent[1], c_accent[2]))

    img.save(filepath, "JPEG", quality=85, optimize=True)

count = 0
for rel_path in sorted(image_paths):
    # rel_path looks like /images/articles/xyz.jpg
    clean_path = rel_path.lstrip("/")
    target_file = os.path.join("public", clean_path.replace("/", os.sep))
    title = format_title_from_filename(os.path.basename(target_file))
    create_aviation_image(target_file, title, palette_idx=count)
    count += 1

# Create global fallback images
create_aviation_image("public/images/og-default.jpg", "Flight Travel Assistance", palette_idx=0)
create_aviation_image("public/images/placeholder.jpg", "Flight Travel Guide", palette_idx=1)

print(f"Successfully generated {count} article images and fallback assets!")
