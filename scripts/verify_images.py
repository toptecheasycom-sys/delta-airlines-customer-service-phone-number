import os
import glob
import re

article_files = glob.glob('src/data/articles/*.ts')
missing = []
total_found = 0
all_imgs = set()

for f in article_files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    imgs = re.findall(r'/images/articles/([a-zA-Z0-9_\-\.]+)', content)
    for img in imgs:
        all_imgs.add(img)
        path = os.path.join('public', 'images', 'articles', img)
        if not os.path.exists(path) or os.path.getsize(path) == 0:
            missing.append((f, img))
        else:
            total_found += 1

print(f"Total unique referenced images: {len(all_imgs)}")
print(f"Total reference occurrences verified on disk: {total_found}")
print(f"Missing images: {len(missing)}")
if missing:
    for f, img in missing[:15]:
        print(f"  Missing in {f}: {img}")
else:
    print("ALL ARTICLE IMAGES EXIST ON DISK AND HAVE VALID FILE SIZES!")
