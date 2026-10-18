// Supabase connection for Alina's Handmade Boutique catalog.
// The URL is public project metadata. The Publishable/anon key is safe to include
// in a browser app when Row Level Security policies are configured correctly.
// NEVER put a service_role or secret key here.
window.SUPABASE_CONFIG = {
  url: 'https://zbfqhmiqjcvicqlidswo.supabase.co',
  anonKey: 'sb_publishable_d81c4EtU4mkkqgBnVQi9HQ_nf7M2zFb'
};

(function(){
  const style=document.createElement('style');
  style.textContent=`
    .order-mode{display:none!important}
    .catalog-subcat.topper-name-number{display:none!important}
    .topper-personalization{margin-top:12px;padding:12px;border:1px solid #dfe2d4;border-radius:15px;background:linear-gradient(135deg,#f7f8f2,#fff)}
    .topper-personalization-title{font-size:12px;font-weight:800;color:#596342;margin-bottom:8px}
    .topper-personalization-fields{display:grid;grid-template-columns:1fr 1fr;gap:7px}
    .topper-personalization input{width:100%;padding:9px 10px;border:1px solid #cfd5bf;border-radius:10px;background:#fff;font:inherit;font-size:12px;box-sizing:border-box}
    .topper-personalization .topper-add{margin-top:8px;width:100%;border:0;border-radius:10px;padding:9px;background:#66704a;color:#fff;font-weight:800;font-size:12px;cursor:pointer}
    .topper-personalization .topper-add:hover{opacity:.9}
    .topper-personalization .topper-msg{display:none;margin-top:7px;font-size:11px;color:#66704a;font-weight:700}
    @media(max-width:520px){.topper-personalization-fields{grid-template-columns:1fr}}
  `;
  document.head.appendChild(style);

  function removeTopperNameNumberCategory(){
    document.querySelectorAll('.catalog-subcat').forEach(el=>{
      const t=(el.textContent||'').trim().toLowerCase().replace(/\s+/g,' ');
      if(t==='nume + cifră' || t==='nume + cifra'){
        el.classList.add('topper-name-number');
      }
    });
  }

  function addTopperPersonalization(){
    const candidates=[...document.querySelectorAll('.model-card,.card,.shirt-design-card')];
    candidates.forEach(card=>{
      if(card.dataset.topperPersonalization==='1') return;
      const text=(card.textContent||'').toLowerCase();
      const section=card.closest('#cake-toppers-section,.cake-toppers-section,[data-category="cake-toppers"]');
      const looksLikeTopper=!!section || /topper/.test(text);
      if(!looksLikeTopper) return;
      card.dataset.topperPersonalization='1';
      const box=document.createElement('div');
      box.className='topper-personalization';
      box.innerHTML=`<div class="topper-personalization-title">Personalizează topperul</div><div class="topper-personalization-fields"><input type="text" placeholder="Nume" aria-label="Nume pentru topper"><input type="text" placeholder="Cifră" aria-label="Cifră pentru topper"></div><button type="button" class="topper-add">Adaugă topperul</button><div class="topper-msg"></div>`;
      card.appendChild(box);
      const btn=box.querySelector('.topper-add');
      const msg=box.querySelector('.topper-msg');
      btn.addEventListener('click',()=>{
        const inputs=box.querySelectorAll('input');
        const name=inputs[0].value.trim();
        const number=inputs[1].value.trim();
        if(!name && !number){msg.textContent='Completează numele și cifra pentru personalizare.';msg.style.display='block';return;}
        msg.textContent=`Topper personalizat: ${name||'fără nume'}${number?' • '+number:''}`;
        msg.style.display='block';
      });
    });
  }

  function apply(){removeTopperNameNumberCategory();addTopperPersonalization();}
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',apply); else apply();
  new MutationObserver(apply).observe(document.documentElement,{childList:true,subtree:true});
})();