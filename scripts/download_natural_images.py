import os
import re
import urllib.request
from PIL import Image

# Directory for cached base images
CACHE_DIR = "scripts/photo_cache"
os.makedirs(CACHE_DIR, exist_ok=True)
os.makedirs("public/images/articles", exist_ok=True)

# Curated high-res authentic Unsplash photo library
CATEGORIES = {
    # Aviation & Aircraft
    "flight_wing": "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop",
    "flight_sky": "https://images.unsplash.com/photo-1542296332-2e4473faf563?q=80&w=1200&auto=format&fit=crop",
    "flight_sunset": "https://images.unsplash.com/photo-1506012787146-f92b2d7d6d96?q=80&w=1200&auto=format&fit=crop",
    "flight_tarmac": "https://images.unsplash.com/photo-1520437358207-323b43b50729?q=80&w=1200&auto=format&fit=crop",
    "flight_landing": "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=80&w=1200&auto=format&fit=crop",
    
    # Airport Terminals & Gates
    "terminal_hall": "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=1200&auto=format&fit=crop",
    "terminal_gate": "https://images.unsplash.com/photo-1587019158091-1a103c5dd17f?q=80&w=1200&auto=format&fit=crop",
    "departure_board": "https://images.unsplash.com/photo-1569629743817-70d8db6c33c4?q=80&w=1200&auto=format&fit=crop",
    "terminal_exterior": "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=1200&auto=format&fit=crop",
    "airport_security": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop",
    "airport_lounge": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",

    # Cabins & Seating
    "cabin_seats": "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1200&auto=format&fit=crop",
    "cabin_luxury": "https://images.unsplash.com/photo-1517400508447-88cca5574345?q=80&w=1200&auto=format&fit=crop",
    "cabin_screen": "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?q=80&w=1200&auto=format&fit=crop",
    "cabin_passenger": "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop",

    # Baggage & Luggage
    "luggage_carousel": "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=1200&auto=format&fit=crop",
    "luggage_roller": "https://images.unsplash.com/photo-1581553680321-4fffae59fccd?q=80&w=1200&auto=format&fit=crop",
    "luggage_duffel": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1200&auto=format&fit=crop",

    # Cockpit, Pilots & TechOps
    "cockpit_controls": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1200&auto=format&fit=crop",
    "pilot_aviator": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1200&auto=format&fit=crop",
    "hangar_maintenance": "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",

    # Travel Documents & Customer Care
    "boarding_pass": "https://images.unsplash.com/photo-1512757776214-26d36777b513?q=80&w=1200&auto=format&fit=crop",
    "customer_service": "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=1200&auto=format&fit=crop",
    "airport_kiosk": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",

    # Destinations
    "dest_bali": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200&auto=format&fit=crop",
    "dest_fiji": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    "dest_nz": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop",
    "dest_alaska": "https://images.unsplash.com/photo-1516431883659-655d41c09bf9?q=80&w=1200&auto=format&fit=crop",
    "dest_puerto_rico": "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?q=80&w=1200&auto=format&fit=crop",
    "dest_dominican_republic": "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?q=80&w=1200&auto=format&fit=crop",
    "dest_egypt": "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=1200&auto=format&fit=crop",
    "dest_israel": "https://images.unsplash.com/photo-1544871084-377ab8820224?q=80&w=1200&auto=format&fit=crop",
    "dest_philippines": "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=1200&auto=format&fit=crop",
    "dest_vietnam": "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1200&auto=format&fit=crop",
    "dest_abu_dhabi": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
    "dest_curacao": "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=1200&auto=format&fit=crop",
    "dest_antigua": "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1200&auto=format&fit=crop",
    "dest_trinidad": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    "dest_nicaragua": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop",
    "dest_el_paso": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1200&auto=format&fit=crop",
    "dest_chicago": "https://images.unsplash.com/photo-1477959858617-67f30bc75b82?q=80&w=1200&auto=format&fit=crop",
    "dest_london": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop",
    "dest_orlando": "https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?q=80&w=1200&auto=format&fit=crop",
    "dest_las_vegas": "https://images.unsplash.com/photo-1508873696983-2df5293cb32f?q=80&w=1200&auto=format&fit=crop",
    "dest_atlanta": "https://images.unsplash.com/photo-1575917649705-5b59aaa12e6b?q=80&w=1200&auto=format&fit=crop",
}

headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"}

print("Step 1: Downloading authentic photo library...")
loaded_images = {}

for cat_name, url in CATEGORIES.items():
    cache_path = os.path.join(CACHE_DIR, f"{cat_name}.jpg")
    if not os.path.exists(cache_path) or os.path.getsize(cache_path) < 1000:
        req = urllib.request.Request(url, headers=headers)
        try:
            with urllib.request.urlopen(req, timeout=15) as resp:
                data = resp.read()
                with open(cache_path, "wb") as f:
                    f.write(data)
            print(f"  [+] Downloaded {cat_name} ({len(data)//1024} KB)")
        except Exception as e:
            print(f"  [-] Failed to download {cat_name}: {e}")
    
    if os.path.exists(cache_path):
        try:
            im = Image.open(cache_path)
            loaded_images[cat_name] = im
        except Exception as e:
            print(f"  [-] Error loading {cache_path}: {e}")

print(f"Loaded {len(loaded_images)} authentic reference photographs.")

# Intelligent topic matcher based on filename
def match_category(filename):
    fn = filename.lower()
    # Specific destinations
    if "bali" in fn: return "dest_bali"
    if "fiji" in fn: return "dest_fiji"
    if "zealand" in fn or "auckland" in fn: return "dest_nz"
    if "alaska" in fn or "glacier" in fn: return "dest_alaska"
    if "puerto-rico" in fn or "san-juan" in fn: return "dest_puerto_rico"
    if "dominican" in fn or "punta-cana" in fn: return "dest_dominican_republic"
    if "egypt" in fn or "cairo" in fn or "pyramid" in fn: return "dest_egypt"
    if "israel" in fn or "tel-aviv" in fn: return "dest_israel"
    if "philippines" in fn or "manila" in fn: return "dest_philippines"
    if "vietnam" in fn or "ha-long" in fn: return "dest_vietnam"
    if "abu-dhabi" in fn or "mosque" in fn: return "dest_abu_dhabi"
    if "curacao" in fn: return "dest_curacao"
    if "antigua" in fn: return "dest_antigua"
    if "trinidad" in fn: return "dest_trinidad"
    if "nicaragua" in fn: return "dest_nicaragua"
    if "el-paso" in fn: return "dest_el_paso"
    if "chicago" in fn or "ohare" in fn or "midway" in fn: return "dest_chicago"
    if "heathrow" in fn or "london" in fn: return "dest_london"
    if "orlando" in fn: return "dest_orlando"
    if "las-vegas" in fn or "vegas" in fn: return "dest_las_vegas"
    if "atlanta" in fn: return "dest_atlanta"
    if "seattle" in fn: return "dest_alaska"
    if "detroit" in fn: return "dest_chicago"
    if "boston" in fn or "logan" in fn: return "terminal_exterior"
    if "newark" in fn: return "terminal_hall"

    # Cockpit, Pilots & TechOps
    if "cockpit" in fn or "radar" in fn: return "cockpit_controls"
    if "pilot" in fn or "captain" in fn: return "pilot_aviator"
    if "mechanic" in fn or "hangar" in fn or "turbofan" in fn or "deicing" in fn or "techops" in fn: return "hangar_maintenance"

    # Baggage, luggage & carry-on
    if "carousel" in fn or "claim" in fn or "handling" in fn: return "luggage_carousel"
    if "carry-on" in fn or "measuring" in fn or "sizer" in fn or "duffel" in fn: return "luggage_duffel"
    if "luggage" in fn or "bag" in fn or "suitcase" in fn: return "luggage_roller"

    # Cabin, seating & amenities
    if "first-class" in fn or "delta-one" in fn or "luxury" in fn or "pod" in fn or "suite" in fn: return "cabin_luxury"
    if "screen" in fn or "headphone" in fn or "usb" in fn or "entertainment" in fn or "outlet" in fn or "power" in fn: return "cabin_screen"
    if "seat" in fn or "comfort" in fn or "legroom" in fn or "aisle" in fn or "cabin" in fn: return "cabin_seats"

    # Airport terminals & procedures
    if "kiosk" in fn or "boarding-pass" in fn or "ticket" in fn or "receipt" in fn or "pass" in fn: return "boarding_pass"
    if "agent" in fn or "desk" in fn or "support" in fn or "customer" in fn or "speak" in fn or "phone" in fn: return "customer_service"
    if "security" in fn or "checkpoint" in fn or "tsa" in fn: return "airport_security"
    if "lounge" in fn or "club" in fn or "vip" in fn: return "airport_lounge"
    if "departure" in fn or "display" in fn or "board" in fn or "delayed" in fn: return "departure_board"
    if "gate" in fn or "jetway" in fn: return "terminal_gate"
    if "terminal" in fn or "airport" in fn: return "terminal_hall"

    # Flights and aircraft
    if "sunset" in fn: return "flight_sunset"
    if "landing" in fn: return "flight_landing"
    if "tarmac" in fn or "runway" in fn or "apron" in fn: return "flight_tarmac"
    if "wing" in fn or "engine" in fn: return "flight_wing"
    
    return "flight_sky"

# Collect all image references from articles
articles_dir = "src/data/articles"
image_files = set()

for fname in os.listdir(articles_dir):
    if fname.endswith(".ts"):
        fpath = os.path.join(articles_dir, fname)
        with open(fpath, "r", encoding="utf-8") as f:
            content = f.read()
            matches = re.findall(r'["\'](/images/articles/[^"\']+\.jpg)["\']', content)
            for m in matches:
                image_files.add(os.path.basename(m))

print(f"Step 2: Processing and generating {len(image_files)} realistic travel photos...")

# Aspect ratio standard: 16:9 (1200x675)
TARGET_W, TARGET_H = 1200, 675

def crop_and_fit(im, target_w, target_h):
    w, h = im.size
    target_ratio = target_w / target_h
    current_ratio = w / h

    if current_ratio > target_ratio:
        # Crop width
        new_w = int(h * target_ratio)
        offset = (w - new_w) // 2
        cropped = im.crop((offset, 0, offset + new_w, h))
    else:
        # Crop height
        new_h = int(w / target_ratio)
        offset = (h - new_h) // 2
        cropped = im.crop((0, offset, w, offset + new_h))

    return cropped.resize((target_w, target_h), Image.Resampling.LANCZOS)

generated_count = 0
for fn in sorted(image_files):
    cat = match_category(fn)
    base_img = loaded_images.get(cat) or loaded_images.get("flight_wing")
    if base_img:
        fitted = crop_and_fit(base_img, TARGET_W, TARGET_H)
        out_path = os.path.join("public", "images", "articles", fn)
        fitted.save(out_path, "JPEG", quality=85, optimize=True)
        generated_count += 1

# Also update og-default and placeholder with real photos
if "flight_wing" in loaded_images:
    crop_and_fit(loaded_images["flight_wing"], 1200, 630).save("public/images/og-default.jpg", "JPEG", quality=85)
if "flight_sky" in loaded_images:
    crop_and_fit(loaded_images["flight_sky"], 1200, 630).save("public/images/placeholder.jpg", "JPEG", quality=85)

print(f"Step 3: Finished! Generated {generated_count} authentic, topic-relevant travel photos across all blog guides!")
