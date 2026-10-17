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
    :root{
      --cream:#fbfaf5;--pink:#6f7650;--coral:#87905f;--turquoise:#7b8961;--purple:#66704a;
      --yellow:#b39a5a;--blue:#71805a;--ink:#283022;--muted:#6d7165;--line:#dfe2d4;--white:#fff;
    }
    body{color:var(--ink)!important;background:linear-gradient(180deg,#fff 0%,#fbfaf5 42%,#f3f5ec 100%)!important}
    header{background:linear-gradient(135deg,#f3f5eb 0%,#fff 48%,#eef1e5 100%)!important}
    header:before{background:radial-gradient(circle,#dfe5cf 0%,#edf1e4 45%,transparent 70%)!important}
    header:after{height:5px!important;background:linear-gradient(90deg,#66704a,#87905f,#b39a5a,#7b8961,#66704a)!important}
    .eyebrow{background:#fff!important;border-color:#dfe2d4!important;color:#66704a!important;box-shadow:0 6px 18px rgba(73,82,52,.08)!important}
    h1{color:#2e3527!important} header p{color:#596049!important}
    .header-note span{border-color:#dfe2d4!important;color:#596049!important;box-shadow:0 5px 14px rgba(73,82,52,.06)!important}
    .brand-photo{box-shadow:0 20px 45px rgba(73,82,52,.18),0 0 0 3px #dfe5cf!important;background:#eef1e5!important}
    .hero-box,.card,.category-card,.feature,.step,.panel,.model-toolbar,.model-card,.shirt-design-card,.badge-card{border-color:#dfe2d4!important;box-shadow:0 10px 28px rgba(73,82,52,.08)!important}
    .hero-pills .p1,.hero-pills .p2,.hero-pills .p3,.hero-pills .p4{background:#eef1e5!important;color:#596049!important}
    .category-card:before,.category-card.boy:before,.feature.f-pink,.feature.f-blue,.feature.f-yellow,.feature.f-purple{border-top-color:#7b8961!important}
    .category-card:before,.category-card.boy:before{background:linear-gradient(90deg,#66704a,#87905f,#b39a5a)!important}
    .category-collage,.photo{background:linear-gradient(135deg,#f0f3e8,#fbfaf5)!important}
    .category-collage .empty-slot{background:linear-gradient(135deg,#f0f3e8,#fbfaf5)!important}
    .btn{background:linear-gradient(135deg,#66704a,#87905f)!important;box-shadow:0 5px 14px rgba(73,82,52,.18)!important}
    .btn.alt{background:#fff!important;color:#4f593d!important;border-color:#cfd5bf!important;box-shadow:none!important}
    .choice{border-color:#dfe2d4!important;color:#3f4734!important}
    .choice.active{border-color:#7b8961!important;box-shadow:0 0 0 3px rgba(123,137,97,.16)!important;background:#f0f3e8!important}
    .order-mode{background:linear-gradient(135deg,#f5f7ef,#eef1e5)!important;border-color:#dfe2d4!important}
    .order-mode b{color:#596342!important}.order-mode.active{border-color:#7b8961!important;box-shadow:0 0 0 3px rgba(123,137,97,.16)!important;background:#edf1e4!important}
    .panel,.badge-form,.quick-shirt-panel,.quick-added,.summary,.choice-banner>div{background:linear-gradient(135deg,#fff,#f2f4eb)!important;border-color:#dfe2d4!important}
    .summary .total{color:#66704a!important}.model-count{background:#eef1e5!important;color:#596049!important}
    .model-card .model-open{color:#596342!important;border-color:#cfd5bf!important}.shirt-selected{border-color:#cbd4bc!important;background:#f0f3e8!important}
    .shirt-design-card.selected{border-color:#7b8961!important;box-shadow:0 0 0 3px rgba(123,137,97,.16)!important}
    .quick-shirt-product .q-price,.badge-price{color:#66704a!important}
    .quick-shirt-theme-card,.custom-shirt-theme-card{border-color:#cfd5bf!important;background:linear-gradient(135deg,#f7f8f2,#fff)!important}
    .custom-theme-visual{background:linear-gradient(135deg,#f0f3e8,#fff)!important;border-color:#cfd5bf!important}.custom-theme-visual small{color:#596342!important}
    .model-modal-box{border-color:#dfe2d4!important;background:#fbfaf5!important}.model-modal-head{border-color:#dfe2d4!important;color:#596342!important}
    .modal-close{background:#66704a!important}.modal-title{color:#3e4732!important}.modal-price{color:#66704a!important}
    .modal-choice-box{border-color:#dfe2d4!important;background:#fff!important}.modal-choice-box label{color:#596342!important}
    .modal-choice-box input:focus{outline:2px solid rgba(179,154,90,.35)!important;border-color:#b39a5a!important}
    .gallery-thumb.active{border-color:#b39a5a!important;box-shadow:0 0 0 2px rgba(179,154,90,.28)!important}.gallery-arrow{color:#596342!important}
    .notice{background:linear-gradient(135deg,#f0f3e8,#f8f7ef,#eef1e5)!important;border-color:#dfe2d4!important}
    .reviews-section{background:#f7f6ef!important;border-color:#dfe2d4!important}.reviews-heading h2{color:#7a805e!important}
    .review-card{border-color:#dfe2d4!important;box-shadow:0 4px 16px rgba(73,82,52,.06)!important}.review-quote{color:#b39a5a!important}
    .review-avatar{background:#66704a!important}.reviews-cta strong{color:#596342!important}.admin{border-color:#cfd5bf!important}
    a[href="photo-manager.html"]{display:none!important}.whatsapp{background:linear-gradient(135deg,#19b968,#0b9f68)!important}

    .catalog-categories{margin:30px auto 10px;max-width:1180px;padding:0 18px}
    .catalog-categories-head{display:flex;align-items:end;justify-content:space-between;gap:20px;margin-bottom:18px}
    .catalog-categories-kicker{text-transform:uppercase;letter-spacing:2px;font-size:12px;font-weight:900;color:#7a805e;margin-bottom:7px}
    .catalog-categories h2{margin:0;font-family:Georgia,serif;font-size:36px;font-weight:500;color:#303827}
    .catalog-categories-head p{margin:7px 0 0;color:#707466;font-size:14px;line-height:1.5;max-width:700px}
    .catalog-category-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}
    .catalog-category{background:#fff;border:1px solid #dfe2d4;border-radius:22px;padding:18px;box-shadow:0 8px 24px rgba(73,82,52,.07);transition:.2s;min-height:150px}
    .catalog-category:hover{transform:translateY(-3px);box-shadow:0 14px 30px rgba(73,82,52,.11)}
    .catalog-category-main{display:flex;align-items:center;gap:10px;margin-bottom:12px}
    .catalog-category-icon{width:42px;height:42px;border-radius:14px;display:flex;align-items:center;justify-content:center;background:#eef1e5;font-size:21px;flex:0 0 auto}
    .catalog-category h3{margin:0;font-family:Georgia,serif;font-size:21px;font-weight:600;color:#3d4632}
    .catalog-subcats{display:flex;flex-wrap:wrap;gap:7px}
    .catalog-subcat{border:1px solid #dfe2d4;background:#fafbf7;color:#606850;border-radius:999px;padding:7px 9px;font-size:11px;font-weight:800;line-height:1.15}
    .catalog-category-action{display:inline-block;margin-top:12px;color:#66704a;font-size:12px;font-weight:900;text-decoration:none}
    .catalog-category-action:hover{text-decoration:underline}
    .catalog-anchor{scroll-margin-top:20px}
    @media(max-width:1000px){.catalog-category-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
    @media(max-width:600px){.catalog-categories{padding:0 14px}.catalog-categories h2{font-size:29px}.catalog-category-grid{grid-template-columns:1fr}.catalog-category{min-height:0}.catalog-categories-head{display:block}}
  `;
  document.head.appendChild(style);

  function addCategoryInterface(){
    if(document.getElementById('catalogCategories')) return;
    const hero=document.querySelector('.hero');
    if(!hero) return;
    const section=document.createElement('section');
    section.id='catalogCategories';
    section.className='catalog-categories';
    const categories=[
      {icon:'🎀',name:'Seturi pentru moț',subs:['Seturi pentru fetițe','Seturi pentru băieți'],target:'motGrid'},
      {icon:'👕',name:'Tricouri personalizate',subs:['Tricouri damă','Tricouri bărbați','Tricouri copii','Body-uri','Seturi aniversare Tutu'],target:'shirtsSection'},
      {icon:'🎖️',name:'Badge-uri',subs:['Badge-uri personalizate'],target:null},
      {icon:'🎂',name:'Cake Toppers',subs:['Toppere 3D','Toppere Shaker','Nume + cifră'],target:null},
      {icon:'💍',name:'Nuntă',subs:['Invitații','Plicuri pentru dar','Set gătit mireasă','Set gătit mire','Cutie verighete','Mărturii','Pahare personalizate','Cutii dar'],target:null},
      {icon:'👶',name:'Botez',subs:['Trusou botez','Lumânare botez','Mărturii','Invitații','Plicuri pentru dar','Pahare personalizate','Cutii dar'],target:null}
    ];
    section.innerHTML=`<div class="catalog-categories-head"><div><div class="catalog-categories-kicker">ALINA'S HANDMADE BOUTIQUE</div><h2>Explorează categoriile</h2><p>Descoperă produsele personalizate și alege categoria care te interesează.</p></div></div><div class="catalog-category-grid">${categories.map(c=>`<article class="catalog-category"><div class="catalog-category-main"><div class="catalog-category-icon">${c.icon}</div><h3>${c.name}</h3></div><div class="catalog-subcats">${c.subs.map(s=>`<span class="catalog-subcat">${s}</span>`).join('')}</div>${c.target?`<a class="catalog-category-action" href="#${c.target}">Vezi produsele →</a>`:`<span class="catalog-category-action">Produse disponibile în catalog →</span>`}</article>`).join('')}</div>`;
    hero.insertAdjacentElement('afterend',section);
    ['motGrid','shirtsSection','badgeGrid'].forEach(id=>document.getElementById(id)?.classList.add('catalog-anchor'));
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',addCategoryInterface); else addCategoryInterface();
})();
