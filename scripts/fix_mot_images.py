from pathlib import Path

path = Path('index.html')
text = path.read_text(encoding='utf-8')
old = "photoUrl(p.image_url,'mot-models')"
new = "photoUrl(p.image_url,'catalog')"
if old not in text:
    raise SystemExit('Nu am găsit referința de bucket mot-models în index.html.')
path.write_text(text.replace(old, new), encoding='utf-8')
print('Patched index.html: mot photos now use catalog storage.')
