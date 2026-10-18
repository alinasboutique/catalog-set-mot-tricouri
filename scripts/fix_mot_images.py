from pathlib import Path
import re

path = Path('index.html')
text = path.read_text(encoding='utf-8')

new_fn = '''function photoUrlCandidates(url,bucket='catalog'){if(!url)return [];if(/^https?:\\/\\//i.test(url)||/^data:/i.test(url))return [url];const p=url.replace(/^\\//,'');const base=cfg.url+'/storage/v1/object/public/';return [base+bucket+'/'+p,base+'catalog/'+p,base+'mot-models/'+p,base+'mot_models/'+p].filter((v,i,a)=>a.indexOf(v)===i)}
function fallbackImage(img){const urls=(img.dataset.fallbacks||'').split('|').filter(Boolean);const i=Number(img.dataset.fallbackIndex||0);if(i>=urls.length){img.onerror=null;return}img.dataset.fallbackIndex=String(i+1);img.src=urls[i]}
function renderModels(title,id,models,photos){if(!models.length)return;const sec=ensureSection(id,title,'Modelele disponibile, cu toate fotografiile salvate în catalog.');const g=sec.querySelector('.managed-grid');g.innerHTML=models.map(m=>{const ps=photos.filter(p=>p.model_id===m.id).sort((a,b)=>(a.display_order||0)-(b.display_order||0));const urls=ps.flatMap(p=>photoUrlCandidates(p.image_url,'mot-models'));const unique=[...new Set(urls)];const gallery=unique.slice(0,7).map(u=>'<img src="'+esc(u)+'" data-fallbacks="'+esc(unique.slice(1).join('|'))+'" data-fallback-index="0" alt="'+esc(m.name)+'" loading="lazy" onerror="fallbackImage(this)">').join('');const extra=ps.length>7?'<div style="grid-column:1/-1;font-size:11px;color:#727667;text-align:center">+'+(ps.length-7)+' fotografii</div>':'';return '<article class="model-card-new">'+(gallery?'<div class="model-gallery">'+gallery+extra+'</div>':'<div style="aspect-ratio:1;background:#f0f2e9;border-radius:13px;display:grid;place-items:center;color:#89917a">Fotografie în curând</div>')+'<h3>'+esc(m.name)+'</h3><p class="model-note-new">Personalizare: nume, fotografie copil și text personalizat.</p><p class="model-price-new">Tavă dreptunghiulară £70 · Tavă rotundă £80</p><div class="model-actions"><a href="'+wa(m.name+' – tavă dreptunghiulară £70')+'" target="_blank" rel="noopener">Tavă dreptunghiulară £70</a><a class="alt" href="'+wa(m.name+' – tavă rotundă £80')+'" target="_blank" rel="noopener">Tavă rotundă £80</a></div></article>'}).join('')}
'''

pattern = r'function renderModels\(title,id,models,photos\)\{.*?\}\nfunction renderSizeTables'
patched, n = re.subn(pattern, new_fn + 'function renderSizeTables', text, count=1, flags=re.S)
if n != 1:
    raise SystemExit('Nu am găsit funcția renderModels pentru patch.')
path.write_text(patched, encoding='utf-8')
print('Patched index.html')
