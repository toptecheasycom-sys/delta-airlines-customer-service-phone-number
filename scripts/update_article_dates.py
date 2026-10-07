import glob
import re
import random

# Fixed seed for clean deterministic distribution
random.seed(202610)

files = sorted(glob.glob('src/data/articles/*.ts'))
print(f"Total articles to update: {len(files)}")

dates = [
    "2026-10-01",
    "2026-10-02",
    "2026-10-03",
    "2026-10-04",
    "2026-10-05",
    "2026-10-06"
]

updated_count = 0
stats = {d: 0 for d in dates}

for f in files:
    with open(f, 'r', encoding='utf-8') as fl:
        content = fl.read()

    pub_idx = random.randint(0, 5)  # 2026-10-01 to 2026-10-06
    upd_idx = random.randint(pub_idx, 5)  # pub_idx to 2026-10-06
    
    pub_date = dates[pub_idx]
    upd_date = dates[upd_idx]
    
    stats[pub_date] += 1

    # Replace publishedAt and updatedAt
    new_content = re.sub(
        r'publishedAt:\s*"[^"]+"',
        f'publishedAt: "{pub_date}"',
        content
    )
    new_content = re.sub(
        r'updatedAt:\s*"[^"]+"',
        f'updatedAt: "{upd_date}"',
        new_content
    )

    if new_content != content:
        with open(f, 'w', encoding='utf-8') as fl:
            fl.write(new_content)
        updated_count += 1

print(f"Successfully updated {updated_count} articles!")
print("Published date distribution:")
for d, count in stats.items():
    print(f"  {d}: {count} articles")
