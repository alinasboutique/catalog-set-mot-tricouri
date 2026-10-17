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
      --cream:#fbfaf5;
      --pink:#6f7650;
      --coral:#87905f;
      --turquoise:#7b8961;
      --purple:#66704a;
      --yellow:#b39a5a;
      --blue:#71805a;
      --ink:#283022;
      --muted:#6d7165;
      --line:#dfe2d4;
      --white:#fff;
    }
    body{
      color:var(--ink)!important;
      background:linear-gradient(180deg,#fff 0%,#fbfaf5 42%,#f3f5ec 100%)!important;
    }
    header{
      background:linear-gradient(135deg,#f3f5eb 0%,#fff 48%,#eef1e5 100%)!important;
    }
    header:before{
      background:radial-gradient(circle,#dfe5cf 0%,#edf1e4 45%,transparent 70%)!important;
    }
    header:after{
      height:5px!important;
      background:linear-gradient(90deg,#66704a,#87905f,#b39a5a,#7b8961,#66704a)!important;
    }
    .eyebrow{
      background:#fff!important;
      border-color:#dfe2d4!important;
      color:#66704a!important;
      box-shadow:0 6px 18px rgba(73,82,52,.08)!important;
    }
    h1{color:#2e3527!important}
    header p{color:#596049!important}
    .header-note span{
      border-color:#dfe2d4!important;
      color:#596049!important;
      box-shadow:0 5px 14px rgba(73,82,52,.06)!important;
    }
    .brand-photo{
      box-shadow:0 20px 45px rgba(73,82,52,.18),0 0 0 3px #dfe5cf!important;
      background:#eef1e5!important;
    }
    .hero-box,.card,.category-card,.feature,.step,.panel,.model-toolbar,.model-card,.shirt-design-card,.badge-card{
      border-color:#dfe2d4!important;
      box-shadow:0 10px 28px rgba(73,82,52,.08)!important;
    }
    .hero-pills .p1,.hero-pills .p2,.hero-pills .p3,.hero-pills .p4{
      background:#eef1e5!important;
      color:#596049!important;
    }
    .category-card:before,
    .category-card.boy:before,
    .feature.f-pink,.feature.f-blue,.feature.f-yellow,.feature.f-purple{
      border-top-color:#7b8961!important;
    }
    .category-card:before,
    .category-card.boy:before{
      background:linear-gradient(90deg,#66704a,#87905f,#b39a5a)!important;
    }
    .category-collage,.photo{
      background:linear-gradient(135deg,#f0f3e8,#fbfaf5)!important;
    }
    .category-collage .empty-slot{
      background:linear-gradient(135deg,#f0f3e8,#fbfaf5)!important;
    }
    .btn{
      background:linear-gradient(135deg,#66704a,#87905f)!important;
      box-shadow:0 5px 14px rgba(73,82,52,.18)!important;
    }
    .btn.alt{
      background:#fff!important;
      color:#4f593d!important;
      border-color:#cfd5bf!important;
      box-shadow:none!important;
    }
    .choice{
      border-color:#dfe2d4!important;
      color:#3f4734!important;
    }
    .choice.active{
      border-color:#7b8961!important;
      box-shadow:0 0 0 3px rgba(123,137,97,.16)!important;
      background:#f0f3e8!important;
    }
    .order-mode{
      background:linear-gradient(135deg,#f5f7ef,#eef1e5)!important;
      border-color:#dfe2d4!important;
    }
    .order-mode b{color:#596342!important}
    .order-mode.active{
      border-color:#7b8961!important;
      box-shadow:0 0 0 3px rgba(123,137,97,.16)!important;
      background:#edf1e4!important;
    }
    .panel,.badge-form,.quick-shirt-panel,.quick-added,.summary,.choice-banner>div{
      background:linear-gradient(135deg,#fff,#f2f4eb)!important;
      border-color:#dfe2d4!important;
    }
    .summary .total{color:#66704a!important}
    .model-count{background:#eef1e5!important;color:#596049!important}
    .model-card .model-open{color:#596342!important;border-color:#cfd5bf!important}
    .shirt-selected{border-color:#cbd4bc!important;background:#f0f3e8!important}
    .shirt-design-card.selected{border-color:#7b8961!important;box-shadow:0 0 0 3px rgba(123,137,97,.16)!important}
    .quick-shirt-product .q-price,.badge-price{color:#66704a!important}
    .quick-shirt-theme-card,.custom-shirt-theme-card{
      border-color:#cfd5bf!important;
      background:linear-gradient(135deg,#f7f8f2,#fff)!important;
    }
    .custom-theme-visual{
      background:linear-gradient(135deg,#f0f3e8,#fff)!important;
      border-color:#cfd5bf!important;
    }
    .custom-theme-visual small{color:#596342!important}
    .model-modal-box{border-color:#dfe2d4!important;background:#fbfaf5!important}
    .model-modal-head{border-color:#dfe2d4!important;color:#596342!important}
    .modal-close{background:#66704a!important}
    .modal-title{color:#3e4732!important}
    .modal-price{color:#66704a!important}
    .modal-choice-box{border-color:#dfe2d4!important;background:#fff!important}
    .modal-choice-box label{color:#596342!important}
    .modal-choice-box input:focus{outline:2px solid rgba(179,154,90,.35)!important;border-color:#b39a5a!important}
    .gallery-thumb.active{border-color:#b39a5a!important;box-shadow:0 0 0 2px rgba(179,154,90,.28)!important}
    .gallery-arrow{color:#596342!important}
    .notice{background:linear-gradient(135deg,#f0f3e8,#f8f7ef,#eef1e5)!important;border-color:#dfe2d4!important}
    .reviews-section{background:#f7f6ef!important;border-color:#dfe2d4!important}
    .reviews-heading h2{color:#7a805e!important}
    .review-card{border-color:#dfe2d4!important;box-shadow:0 4px 16px rgba(73,82,52,.06)!important}
    .review-quote{color:#b39a5a!important}
    .review-avatar{background:#66704a!important}
    .reviews-cta strong{color:#596342!important}
    .admin{border-color:#cfd5bf!important}
    a[href="photo-manager.html"]{display:none!important}
    .whatsapp{background:linear-gradient(135deg,#19b968,#0b9f68)!important}
  `;
  document.head.appendChild(style);
})();
