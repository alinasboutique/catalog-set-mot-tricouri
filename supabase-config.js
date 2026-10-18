// Supabase connection for Alina's Handmade Boutique catalog.
window.SUPABASE_CONFIG={url:'https://zbfqhmiqjcvicqlidswo.supabase.co',anonKey:'sb_publishable_d81c4EtU4mkkqgBnVQi9HQ_nf7M2zFb'};
(function(){
const cfg=window.SUPABASE_CONFIG;
const API=cfg.url+'/rest/v1';
const H={apikey:cfg.anonKey,Authorization:'Bearer '+cfg.anonKey,'Content-Type':'application/json'};
const cats=['Seturi pentru Moț','Tricouri personalizate','Ecusoane personalizate','Cake Toppers','Nuntă','Botez','Cadouri personalizate'];
const css=`
body>header{display:none!important}.hero,.feature-strip,.admin,body>.footer,.order-mode{display:none!important}.catalog-subcat.topper-name-number{display:none!important}
.new-site-header{position:sticky;top:0;z-index:900;background:rgba(255,253,249,.97);backdrop-filter:blur(12px);border-bottom:1px solid #e5e4d7;box-shadow:0 3px 18px rgba(66,72,43,.06)}
.new-site-header-inner{max-width:1400px;margin:auto;min-height:86px;padding:0 34px;display:flex;align-items:center;justify-content:space-between;gap:24px}.new-brand{font-family:Georgia,serif;font-size:30px;color:#5f6945;text-decoration:none;white-space:nowrap}.new-brand small{display:block;font:9px Arial,sans-serif;letter-spacing:2.4px;color:#8a9074;margin-top:3px}.new-nav{display:flex;gap:24px;margin-left:auto}.new-nav a{font-size:14px;color:#59634a;text-decoration:none}.new-actions{display:flex;gap:8px}.new-action{width:40px;height:40px;border:1px solid #d9d8c8;border-radius:50%;display:grid;place-items:center;color:#59634a;background:#fff;text-decoration:none}.new-catalog-intro{max-width:1400px;margin:auto;padding:58px 34px 30px}.new-kicker{text-transform:uppercase;letter-spacing:2.5px;font-size:11px;font-weight:800;color:#7d885a;margin-bottom:10px}.new-catalog-intro h1{font:500 clamp(38px,4vw,58px) Georgia,serif;color:#30372a;margin:0 0 12px}.new-catalog-intro p{max-width:760px;color:#727667;font-size:16px;line-height:1.65;margin:0}.new-category-nav{max-width:1400px;margin:auto;padding:8px 34px 34px;display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.new-cat{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:16px 18px;border:1px solid #dedfce;border-radius:16px;background:#fff;box-shadow:0 5px 18px rgba(66,72,43,.05);color:#4f5a3e;text-decoration:none;font-size:14px;font-weight:800}.new-divider{height:1px;background:#e6e6dc;max-width:1400px;margin:auto}
.managed-section{max-width:1400px;margin:55px auto;padding:0 34px}.managed-section h2{font:500 34px Georgia,serif;color:#30372a;margin:0 0 8px}.managed-sub{color:#727667;margin:0 0 20px}.managed-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}.managed-card,.model-card-new{background:#fff;border:1px solid #dedfce;border-radius:18px;padding:11px;box-shadow:0 8px 24px rgba(66,72,43,.06)}.managed-card img{width:100%;aspect-ratio:1;object-fit:cover;border-radius:13px;display:block}.managed-card h3,.model-card-new h3{font:500 20px Georgia,serif;color:#3f4735;margin:12px 3px 5px}.managed-price,.model-price-new{font-weight:800;color:#5f6945;margin:0 3px 7px}.managed-desc,.model-note-new{font-size:13px;line-height:1.5;color:#727667;margin:0 3px 8px}.managed-custom{font-size:12px;line-height:1.45;color:#5f6945;background:#f2f3e9;border-radius:10px;padding:8px;margin-bottom:9px}.managed-btn{display:block;text-align:center;text-decoration:none;background:#6f7b4d;color:#fff;border-radius:10px;padding:10px;font-weight:800;font-size:13px}.model-gallery{display:grid;grid-template-columns:repeat(3,1fr);gap:5px;margin-bottom:10px}.model-gallery img{width:100%;aspect-ratio:1;object-fit:cover;border-radius:9px;display:block}.model-gallery img:first-child{grid-column:span 2;grid-row:span 2}.model-actions{display:grid;grid-template-columns:1fr 1fr;gap:7px;margin-top:10px}.model-actions a{display:block;text-align:center;text-decoration:none;border-radius:10px;padding:9px 6px;background:#6f7b4d;color:#fff;font-size:11px;font-weight:800}.model-actions a.alt{background:#f0f2e9;color:#586246}.size-tables{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.size-box{background:#fff;border:1px solid #dedfce;border-radius:16px;overflow:hidden}.size-box h4{margin:0;padding:12px 15px;background:#f0f2e9;color:#596342;font-size:14px}.size-box table{width:100%;border-collapse:collapse;font-size:12px}.size-box th,.size-box td{text-align:left;padding:9px 12px;border-bottom:1px solid #eceee5}.size-box th{font-weight:800;color:#596342}.size-box tr:last-child td{border-bottom:0}.new-contact{max-width:1400px;margin:45px auto 0;padding:42px 34px;background:#f2f3e9;border-top:1px solid #e1e2d5;display:grid;grid-template-columns:1.2fr 1fr 1fr;gap:35px;color:#626957}.new-contact h3{font:500 22px Georgia,serif;color:#3f4735;margin:0 0 10px}.new-contact p,.new-hours{font-size:13px;line-height:1.8;margin:0}.new-contact a{color:#5e6945;text-decoration:none}.reviews-btn{display:inline-block;margin-top:10px;padding:9px 12px;border-radius:10px;background:#6f7b4d;color:#fff!important;font-weight:800}.new-copyright{text-align:center;background:#e9ecdf;color:#727867;font-size:11px;padding:14px 20px}.topper-personalization{margin-top:12px;padding:12px;border:1px solid #dfe2d4;border-radius:15px;background:#f7f8f2}.topper-personalization-fields{display:grid;grid-template-columns:1fr 1fr;gap:7px}.topper-personalization input{width:100%;padding:9px 10px;border:1px solid #cfd5bf;border-radius:10px;box-sizing:border-box}.topper-add{margin-top:8px;width:100%;border:0;border-radius:10px;padding:9px;background:#66704a;color:#fff;font-weight:800}.topper-msg{display:none;margin-top:7px;font-size:11px;color:#66704a;font-weight:700}
@media(max-width:1000px){.managed-grid{grid-template-columns:repeat(3,1fr)}}@media(max-width:700px){.new-nav{display:none}.new-category-nav{grid-template-columns:repeat(2,1fr)}.managed-grid,.size-tables{grid-template-columns:1fr 1fr}.new-contact{grid-template-columns:1fr 1fr}}@media(max-width:600px){.new-site-header-inner{padding:0 17px;min-height:72px}.new-brand{font-size:24px}.new-category-nav{grid-template-columns:1fr;padding:8px 18px 26px}.new-catalog-intro{padding:38px 18px 20px}.managed-section{padding:0 18px}.managed-grid,.size-tables{grid-template-columns:1fr}.new-contact{grid-template-columns:1fr;padding:32px 18px}}
`;
const st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
function esc(s=''){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}
function cleanOld(){document.querySelectorAll('.catalog-subcat').forEach(el=>{const t=(el.textContent||'').trim().toLowerCase().replace(/\s+/g,' ');if(t==='nume + cifră'||t==='nume + cifra')el.remove()});['motGrid','shirtsSection','shirtProductSection','formPanel'].forEach(id=>{const el=document.getElementById(id);if(el)el.classList.add('hidden')});const review=document.querySelector('.reviews-section');if(review){let n=review.nextElementSibling;while(n){const next=n.nextElementSibling;const txt=(n.textContent||'').toLowerCase();if(/cake toppers|ecusoane personalizate/.test(txt))n.remove();n=next}}}
function buildChrome(){if(document.getElementById('newSiteHeader'))return;const h=document.createElement('div');h.id='newSiteHeader';h.className='new-site-header';h.innerHTML='<div class="new-site-header-inner"><a class="new-brand" href="#top">Alina\'s Handmade Boutique<small>CREAȚII PERSONALIZATE</small></a><nav class="new-nav"><a href="#top">Acasă</a><a href="#mot-fetite">Seturi Moț</a><a href="#managed-shirts">Tricouri</a><a href="#catalogCategories">Catalog</a><a href="#contact">Contact</a></nav><div class="new-actions"><a class="new-action" href="photo-manager.html" title="Photo Manager">⚙️</a><a class="new-action" href="#contact">♡</a><a class="new-action" href="https://wa.me/447742444493" target="_blank" rel="noopener">◌</a></div></div>';document.body.prepend(h);const i=document.createElement('section');i.id='catalogCategories';i.className='new-catalog-intro';i.innerHTML='<div class="new-kicker">Catalog • Alina\'s Handmade Boutique</div><h1>Descoperă colecțiile</h1><p>Produse create cu grijă și personalizate pentru cele mai frumoase momente — de la moț și botez, până la nuntă, aniversări și cadouri speciale.</p>';h.after(i);const n=document.createElement('div');n.className='new-category-nav';n.innerHTML='<a class="new-cat" href="#mot-fetite">🎀 <span>Seturi pentru moț</span><span>→</span></a><a class="new-cat" href="#managed-shirts">👕 <span>Tricouri personalizate</span><span>→</span></a><a class="new-cat" href="#managed-badges">🎖️ <span>Ecusoane personalizate</span><span>→</span></a><a class="new-cat" href="#managed-cake-toppers">🎂 <span>Cake Toppers</span><span>→</span></a><a class="new-cat" href="#managed-nunta">💍 <span>Nuntă</span><span>→</span></a><a class="new-cat" href="#managed-botez">🕊️ <span>Botez</span><span>→</span></a><a class="new-cat" href="#managed-cadouri-personalizate">🎁 <span>Cadouri personalizate</span><span>→</span></a>';i.after(n);const d=document.createElement('div');d.className='new-divider';n.after(d)}
function ensureSection(id,title,sub=''){let sec=document.getElementById(id);if(!sec){sec=document.createElement('section');sec.id=id;sec.className='managed-section';sec.innerHTML='<h2></h2><p class="managed-sub"></p><div class="managed-grid"></div>';document.querySelector('main.wrap')?.appendChild(sec)}sec.querySelector('h2').textContent=title;sec.querySelector('.managed-sub').textContent=sub;return sec}
function photoUrl(url,bucket='catalog'){if(!url)return '';if(/^https?:\/\//i.test(url)||/^data:/i.test(url))return url;return cfg.url+'/storage/v1/object/public/'+bucket+'/'+url.replace(/^\//,'')}
function wa(name){return 'https://wa.me/447742444493?text='+encodeURIComponent('Bună! Sunt interesată de produsul: '+name)}
function renderManaged(cat,items){if(!items.length)return;const id='managed-'+cat.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-');const sec=ensureSection(id,cat,'Alege modelul preferat și vezi opțiunile de personalizare.');const g=sec.querySelector('.managed-grid');g.innerHTML=items.map(x=>{const photos=(x.photos||[]).map(p=>photoUrl(p.image_url)).filter(Boolean);const first=photos[0];return '<article class="managed-card">'+(first?'<img src="'+esc(first)+'" alt="'+esc(x.name)+'" loading="lazy">':'<div style="aspect-ratio:1;background:#f0f2e9;border-radius:13px;display:grid;place-items:center;color:#89917a">Fotografie în curând</div>')+'<h3>'+esc(x.name)+'</h3><p class="managed-price">£'+Number(x.price||0).toFixed(2)+'</p>'+(x.description?'<p class="managed-desc">'+esc(x.description)+'</p>':'')+(x.personalization_options?'<div class="managed-custom"><b>Personalizare:</b> '+esc(x.personalization_options)+'</div>':'')+'<a class="managed-btn" href="'+wa(x.name)+'" target="_blank" rel="noopener">Comandă pe WhatsApp</a></article>'}).join('')}
function renderModels(title,id,models,photos){if(!models.length)return;const sec=ensureSection(id,title,'Modelele disponibile, cu toate fotografiile salvate în catalog.');const g=sec.querySelector('.managed-grid');g.innerHTML=models.map(m=>{const ps=photos.filter(p=>p.model_id===m.id).sort((a,b)=>(a.display_order||0)-(b.display_order||0));const urls=ps.map(p=>photoUrl(p.image_url,'mot-models')).filter(Boolean);const gallery=urls.slice(0,7).map(u=>'<img src="'+esc(u)+'" alt="'+esc(m.name)+'" loading="lazy">').join('');const extra=urls.length>7?'<div style="grid-column:1/-1;font-size:11px;color:#727667;text-align:center">+'+(urls.length-7)+' fotografii</div>':'';return '<article class="model-card-new">'+(gallery?'<div class="model-gallery">'+gallery+extra+'</div>':'<div style="aspect-ratio:1;background:#f0f2e9;border-radius:13px;display:grid;place-items:center;color:#89917a">Fotografie în curând</div>')+'<h3>'+esc(m.name)+'</h3><p class="model-note-new">Personalizare: nume, fotografie copil și text personalizat.</p><p class="model-price-new">Tavă dreptunghiulară £70 · Tavă rotundă £80</p><div class="model-actions"><a href="'+wa(m.name+' – tavă dreptunghiulară £70')+'" target="_blank" rel="noopener">Tavă dreptunghiulară £70</a><a class="alt" href="'+wa(m.name+' – tavă rotundă £80')+'" target="_blank" rel="noopener">Tavă rotundă £80</a></div></article>'}).join('')}
function renderSizeTables(){const sec=ensureSection('shirt-sizes','Tabele cu mărimi','Alege mărimea potrivită înainte de a plasa comanda.');sec.querySelector('.managed-grid').innerHTML='<div style="grid-column:1/-1"><div class="size-tables"><div class="size-box"><h4>👩 Tricou damă</h4><table><tr><th>Mărime</th><th>Disponibil</th></tr>'+['XS','S','M','L','XL','XXL'].map(x=>'<tr><td>'+x+'</td><td>✓</td></tr>').join('')+'</table></div><div class="size-box"><h4>👨 Tricou bărbați</h4><table><tr><th>Mărime</th><th>Disponibil</th></tr>'+['S','M','L','XL','XXL','3XL'].map(x=>'<tr><td>'+x+'</td><td>✓</td></tr>').join('')+'</table></div><div class="size-box"><h4>👧 Tricou copil</h4><table><tr><th>Vârstă</th><th>Disponibil</th></tr>'+['3 ani','4 ani','5 ani','6 ani','7 ani','8 ani','9 ani','10 ani','11 ani','12 ani','13 ani'].map(x=>'<tr><td>'+x+'</td><td>✓</td></tr>').join('')+'</table></div><div class="size-box"><h4>👶 Body / Tutu</h4><table><tr><th>Mărime</th><th>Disponibil</th></tr>'+['0-3 luni','3-6 luni','6-9 luni','9-12 luni'].map(x=>'<tr><td>'+x+'</td><td>✓</td></tr>').join('')+'</table></div></div></div>'}
function addTopperPersonalization(sec){sec.querySelectorAll('.managed-card').forEach(card=>{if(card.dataset.topper)return;card.dataset.topper='1';const b=document.createElement('div');b.className='topper-personalization';b.innerHTML='<b>Personalizează topperul</b><div class="topper-personalization-fields"><input placeholder="Nume"><input placeholder="Cifră"></div><button class="topper-add">Adaugă topperul</button><div class="topper-msg"></div>';card.appendChild(b);b.querySelector('.topper-add').onclick=()=>{const v=[...b.querySelectorAll('input')].map(x=>x.value.trim()).filter(Boolean),m=b.querySelector('.topper-msg');m.textContent=v.length?'Personalizare: '+v.join(' • '):'Completează numele și/sau cifra.';m.style.display='block'}})}
function footer(){if(document.getElementById('contact'))return;const main=document.querySelector('main.wrap');if(!main)return;const c=document.createElement('section');c.id='contact';c.className='new-contact';c.innerHTML='<div><h3>Alina\'s Handmade Boutique</h3><p>Produse handmade și creații personalizate realizate cu grijă pentru evenimentele și momentele speciale din viața ta.</p></div><div><h3>Contact</h3><p>📧 <a href="mailto:alinashandmadeboutique@gmail.com">alinashandmadeboutique@gmail.com</a></p><a class="reviews-btn" href="https://www.facebook.com/a.Bootiq/reviews/?id=100063495073456&sk=reviews" target="_blank" rel="noopener">💕 Lasă o recenzie pe Facebook</a></div><div><h3>Program de lucru</h3><div class="new-hours">Luni–Vineri: 09:00–17:00<br>Sâmbătă: 10:00–13:00<br>Duminică: Închis</div></div>';main.appendChild(c);const cp=document.createElement('div');cp.className='new-copyright';cp.textContent='© 2026 Alina\'s Handmade Boutique. Toate drepturile rezervate.';main.appendChild(cp)}
async function get(path){const r=await fetch(API+path,{headers:H});if(!r.ok)throw new Error('HTTP '+r.status);return r.json()}
async function loadCatalog(){
const results=await Promise.allSettled([
get('/mot_models?select=*&is_active=eq.true&order=display_order.asc,name.asc'),
get('/mot_model_photos?select=*&order=display_order.asc'),
get('/shirt_models?select=*&is_active=eq.true&order=display_order.asc,name.asc'),
get('/shirt_model_photos?select=*&order=display_order.asc'),
get('/catalog_products?select=*&is_active=eq.true&order=display_order.asc,created_at.desc'),
get('/catalog_product_photos?select=*&order=display_order.asc')
]);
const value=i=>results[i].status==='fulfilled'?results[i].value:[];
const mot=value(0),motPhotos=value(1),shirts=value(2),shirtPhotos=value(3),products=value(4),productPhotos=value(5);
renderModels('Seturi pentru moț – fetiță','mot-fetite',mot.filter(x=>x.category==='fetita'),motPhotos);
renderModels('Seturi pentru moț – băiat','mot-baieti',mot.filter(x=>x.category==='baiat'),motPhotos);
shirts.forEach(x=>x.photos=shirtPhotos.filter(p=>p.model_id===x.id));
renderManaged('Tricouri personalizate',shirts);
renderSizeTables();
products.forEach(x=>x.photos=productPhotos.filter(p=>p.product_id===x.id));
['Ecusoane personalizate','Cake Toppers','Nuntă','Botez','Cadouri personalizate'].forEach(cat=>renderManaged(cat,products.filter(x=>x.category===cat)));
const topper=document.getElementById('managed-cake-toppers');if(topper)addTopperPersonalization(topper);
}
function apply(){buildChrome();cleanOld();footer();loadCatalog()}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',apply);else apply();
})();

/* FINAL_CATALOG_REPAIR_V1 */
(function(){
  function moveShirtSizes(){
    const sizes=document.getElementById('shirt-sizes');
    const shirts=document.getElementById('managed-shirts');
    if(!sizes || !shirts) return;
    const grid=shirts.querySelector('.managed-grid');
    if(grid){
      const heading=sizes.querySelector('h2');
      const sub=sizes.querySelector('.managed-sub');
      const tables=sizes.querySelector('.managed-grid');
      if(!shirts.querySelector('.shirt-size-area')){
        const area=document.createElement('div');
        area.className='shirt-size-area';
        area.style.marginTop='28px';
        if(heading){
          const h=document.createElement('h3');
          h.textContent=heading.textContent;
          h.style.cssText='font:500 26px Georgia,serif;color:#3f4735;margin:0 0 7px';
          area.appendChild(h);
        }
        if(sub){
          const d=document.createElement('p');
          d.className='managed-sub';
          d.textContent=sub.textContent;
          area.appendChild(d);
        }
        if(tables) area.appendChild(tables);
        shirts.appendChild(area);
      }
      sizes.remove();
    }
  }

  function hideOldStandaloneSections(){
    document.querySelectorAll('.managed-section').forEach(function(sec){
      const h=(sec.querySelector('h2')?.textContent||'').trim().toLowerCase();
      if(h==='tabele cu mărimi' && sec.id!=='shirt-sizes') sec.remove();
    });
  }

  function run(){
    moveShirtSizes();
    hideOldStandaloneSections();
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',run);
  else run();
  new MutationObserver(run).observe(document.body,{childList:true,subtree:true});
})();
