/* Cake Toppers — Alina's Handmade Boutique
   Public catalog UI. Personalization: Nume + Cifră.
   Header redesign: elegant website-style navigation, no personal photo.
*/
(function () {
  const TOPPER_PRODUCTS = [
    { id: 'topper-3d', name: 'Topper 3D', price: 17 },
    { id: 'topper-shaker', name: 'Topper Shaker', price: 22 },
    { id: 'topper-tematic', name: 'Topper tematic', price: 17 },
    { id: 'topper-personalizat', name: 'Topper personalizat', price: 17 }
  ];

  function esc(value) {
    return String(value ?? '').replace(/[&<>'\"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','\"':'&quot;'}[c]));
  }

  function renderWebsiteHeader() {
    if (document.getElementById('alinaWebsiteHeader')) return;
    const oldHeader = document.querySelector('header');
    if (!oldHeader) return;

    oldHeader.innerHTML = `
      <div id="alinaWebsiteHeader" class="alina-site-header">
        <a class="alina-brand" href="#top">
          <span class="alina-brand-name">Alina's Handmade Boutique</span>
          <span class="alina-brand-sub">HANDMADE • PERSONALIZAT • CREAT CU DRAG</span>
        </a>
        <nav class="alina-nav" aria-label="Navigare principală">
          <a href="#top">Acasă</a>
          <a href="#catalogCategories">Catalog</a>
          <a href="#catalogCategories">Modele</a>
          <a href="#catalogCategories">Personalizare</a>
          <button type="button" aria-label="Căutare">⌕</button>
          <button type="button" aria-label="Favorite">♡</button>
          <button type="button" aria-label="Coș">🛒<span class="alina-cart-count">0</span></button>
        </nav>
      </div>
    `;

    const style = document.createElement('style');
    style.id = 'alinaHeaderStyle';
    style.textContent = `
      header{padding:0!important;background:#fffdf9!important;border-bottom:1px solid #e4e4d8!important;overflow:visible!important;position:sticky!important;top:0!important;z-index:900!important;box-shadow:0 3px 18px rgba(55,63,40,.05)!important}
      header:before,header:after{display:none!important}
      .alina-site-header{max-width:1240px;margin:0 auto;min-height:86px;padding:0 28px;display:flex;align-items:center;justify-content:space-between;gap:35px}
      .alina-brand{text-decoration:none;display:flex;flex-direction:column;align-items:flex-start;line-height:1;white-space:nowrap}
      .alina-brand-name{font-family:Georgia,'Times New Roman',serif;font-size:30px;font-weight:500;letter-spacing:.2px;color:#596342}
      .alina-brand-sub{margin-top:7px;font-family:Arial,Helvetica,sans-serif;font-size:8px;letter-spacing:2.1px;font-weight:700;color:#9a9d8b}
      .alina-nav{display:flex;align-items:center;gap:27px}
      .alina-nav a{font-family:Arial,Helvetica,sans-serif;text-decoration:none;color:#5f6654;font-size:14px;font-weight:600;transition:color .2s}
      .alina-nav a:hover{color:#66704a}
      .alina-nav button{position:relative;width:44px;height:44px;border:1px solid #d8dccb;background:#fffdf9;color:#5c654d;border-radius:50%;font-size:22px;line-height:1;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:.2s}
      .alina-nav button:hover{background:#f0f2e8;border-color:#bfc7ac;transform:translateY(-1px)}
      .alina-nav button[aria-label="Căutare"]{font-size:27px;font-family:Georgia,serif;transform:rotate(-20deg)}
      .alina-nav button[aria-label="Favorite"]{font-size:25px;font-family:Georgia,serif}
      .alina-cart-count{position:absolute;right:-3px;top:-4px;min-width:18px;height:18px;padding:0 4px;border-radius:10px;background:#66704a;color:#fff;font:700 10px/18px Arial,sans-serif}
      @media(max-width:900px){.alina-site-header{min-height:76px;padding:0 18px;gap:18px}.alina-brand-name{font-size:24px}.alina-brand-sub{font-size:7px;letter-spacing:1.5px}.alina-nav{gap:10px}.alina-nav a{font-size:12px}.alina-nav button{width:38px;height:38px;font-size:19px}}
      @media(max-width:650px){header{position:relative!important}.alina-site-header{min-height:auto;padding:15px 16px;display:block}.alina-brand{align-items:center;text-align:center}.alina-brand-name{font-size:25px}.alina-nav{justify-content:center;flex-wrap:wrap;margin-top:14px;gap:9px}.alina-nav a{font-size:11px}.alina-nav button{width:36px;height:36px}.alina-brand-sub{font-size:6.5px}}
    `;
    document.head.appendChild(style);
  }

  function hideOldOrderHelper() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    const text = (hero.textContent || '').replace(/\s+/g, ' ').trim();
    const required = ['Alege cum vrei să comanzi', 'Doar set', 'Set + tricouri', 'Doar tricouri'];
    if (required.every(part => text.includes(part))) hero.style.display = 'none';
  }

  function moveTopperBeforeReviews(section) {
    const wrap = document.querySelector('main.wrap');
    const reviews = document.querySelector('.reviews-section');
    if (wrap && reviews && section.parentElement === wrap) {
      wrap.insertBefore(section, reviews);
    }
  }

  function addFooter() {
    if (document.getElementById('alinaCatalogFooter')) return;
    const reviews = document.querySelector('.reviews-section');
    if (!reviews) return;

    const footer = document.createElement('footer');
    footer.id = 'alinaCatalogFooter';
    footer.className = 'alina-catalog-footer';
    footer.innerHTML = `
      <div class="alina-footer-inner">
        <div class="alina-footer-about">
          <div class="alina-footer-brand">Alina's Handmade Boutique</div>
          <p>Produse handmade și personalizate, create cu grijă pentru momentele tale speciale. Fiecare produs este realizat cu atenție la detalii și adaptat cu drag pentru tine.</p>
        </div>
        <div class="alina-footer-contact">
          <h3>Contact</h3>
          <p>📱 <a href="https://wa.me/447742444493" target="_blank" rel="noopener">07742 444493</a></p>
          <p>✉️ <a href="mailto:alinashandmadeboutique@gmail.com">alinashandmadeboutique@gmail.com</a></p>
          <p>🇬🇧 Livrare în UK</p>
        </div>
        <div class="alina-footer-hours">
          <h3>Program de lucru</h3>
          <p><strong>Luni – Vineri:</strong> 09:00 – 17:00</p>
          <p><strong>Sâmbătă:</strong> 10:00 – 13:00</p>
          <p><strong>Duminică:</strong> Închis</p>
        </div>
      </div>
      <div class="alina-footer-bottom">© 2026 Alina's Handmade Boutique. Toate drepturile rezervate.<br>Fotografiile, modelele și materialele prezentate în acest catalog sunt proprietatea Alina's Handmade Boutique și nu pot fi reproduse sau utilizate fără acord.</div>
    `;
    reviews.insertAdjacentElement('afterend', footer);
  }

  function render() {
    renderWebsiteHeader();
    hideOldOrderHelper();

    if (document.getElementById('cake-toppers-section')) {
      const existing = document.getElementById('cake-toppers-section');
      moveTopperBeforeReviews(existing);
      addFooter();
      return;
    }

    const style = document.createElement('style');
    style.id = 'alinaCakeToppersStyle';
    style.textContent = `
      #cake-toppers-section{margin:42px 0 10px}
      .cake-toppers-head{display:flex;justify-content:space-between;align-items:end;gap:18px;margin-bottom:22px}
      .cake-toppers-kicker{font-size:12px;font-weight:900;letter-spacing:2px;text-transform:uppercase;color:#66704a;margin-bottom:7px}
      .cake-toppers-head h2{margin:0;font-size:32px;color:#303626}
      .cake-toppers-head p{margin:7px 0 0;color:#6d7165;line-height:1.5;max-width:680px}
      .cake-toppers-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px}
      .cake-topper-card{background:#fff;border:1px solid #dfe2d4;border-radius:22px;padding:12px;box-shadow:0 10px 28px rgba(73,82,52,.08);overflow:hidden}
      .cake-topper-image{height:235px;border-radius:16px;background:linear-gradient(135deg,#eef1e5,#fbfaf5);display:flex;align-items:center;justify-content:center;color:#66704a;font-size:15px;font-weight:800;text-align:center;overflow:hidden}
      .cake-topper-image img{width:100%;height:100%;object-fit:cover}
      .cake-topper-card h3{margin:13px 4px 4px;font-size:18px;color:#303626}
      .cake-topper-price{margin:0 4px 12px;font-size:18px;font-weight:900;color:#66704a}
      .cake-personalise{background:#f5f7ef;border:1px solid #dfe2d4;border-radius:16px;padding:12px}
      .cake-personalise label{font-size:13px;margin:0 0 5px;color:#596342}
      .cake-personalise input{padding:10px;border:1px solid #cfd5bf;border-radius:10px;background:#fff;margin-bottom:9px}
      .cake-add{background:linear-gradient(135deg,#66704a,#87905f)!important;color:#fff!important;border:0!important;border-radius:12px;padding:11px 12px;font-weight:900;width:100%;cursor:pointer}
      .cake-added{margin-top:9px;padding:9px 10px;border-radius:10px;background:#edf1e4;color:#596342;font-size:12px;font-weight:800;display:none}
      .alina-catalog-footer{background:#596342;color:#f7f8f2;padding:46px 24px 24px;margin-top:0;border-top:4px solid #b39a5a}
      .alina-footer-inner{max-width:1180px;margin:0 auto;display:grid;grid-template-columns:1.5fr 1fr 1fr;gap:38px}
      .alina-catalog-footer h3{font-family:Georgia,serif;font-size:21px;font-weight:500;margin:0 0 12px;color:#fffdf8}
      .alina-footer-brand{font-family:Georgia,'Times New Roman',serif;font-size:28px;font-weight:500;color:#fffdf8;margin-bottom:12px}
      .alina-catalog-footer p{margin:0 0 8px;color:#e4e8d9;line-height:1.6;font-size:14px}
      .alina-catalog-footer a{color:#fffdf8;text-decoration:none}.alina-catalog-footer a:hover{text-decoration:underline}
      .alina-footer-bottom{max-width:1180px;margin:32px auto 0;padding-top:18px;border-top:1px solid rgba(255,255,255,.18);text-align:center;color:#d5dac8;font-size:12px;line-height:1.6}
      @media(max-width:900px){.cake-toppers-grid{grid-template-columns:repeat(2,minmax(0,1fr)}}
      @media(max-width:800px){.alina-footer-inner{grid-template-columns:1fr 1fr;gap:28px}.alina-footer-about{grid-column:1/-1}}
      @media(max-width:560px){.cake-toppers-head{display:block}.cake-toppers-grid{grid-template-columns:1fr}.cake-topper-image{height:260px}.alina-catalog-footer{padding:38px 18px 20px}.alina-footer-inner{grid-template-columns:1fr;gap:25px}.alina-footer-about{grid-column:auto}.alina-footer-brand{font-size:24px}}
    `;
    document.head.appendChild(style);

    const section = document.createElement('section');
    section.id = 'cake-toppers-section';
    section.className = 'section';
    section.innerHTML = `
      <div class="cake-toppers-head">
        <div>
          <div class="cake-toppers-kicker">Personalizate pentru fiecare sărbătoare</div>
          <h2>🎂 Cake Toppers</h2>
          <p>Alege modelul preferat și completează direct în catalog <strong>numele și cifra</strong> care vor apărea pe topper.</p>
        </div>
      </div>
      <div class="cake-toppers-grid"></div>
    `;

    const grid = section.querySelector('.cake-toppers-grid');
    TOPPER_PRODUCTS.forEach(product => {
      const card = document.createElement('article');
      card.className = 'cake-topper-card';
      card.innerHTML = `
        <div class="cake-topper-image">Fotografia modelului<br>va fi adăugată aici</div>
        <h3>${esc(product.name)}</h3>
        <div class="cake-topper-price">£${Number(product.price).toFixed(2)}</div>
        <div class="cake-personalise">
          <label for="cake-name-${esc(product.id)}">Nume</label>
          <input id="cake-name-${esc(product.id)}" type="text" placeholder="Ex. Kevin" maxlength="40">
          <label for="cake-number-${esc(product.id)}">Cifră</label>
          <input id="cake-number-${esc(product.id)}" type="text" inputmode="numeric" placeholder="Ex. 5" maxlength="2">
          <button class="cake-add" type="button">Adaugă topperul</button>
          <div class="cake-added"></div>
        </div>
      `;
      const nameInput = card.querySelector('input[id^="cake-name-"]');
      const numberInput = card.querySelector('input[id^="cake-number-"]');
      const added = card.querySelector('.cake-added');
      card.querySelector('.cake-add').addEventListener('click', () => {
        const name = nameInput.value.trim();
        const number = numberInput.value.trim();
        if (!name || !number) {
          added.style.display = 'block';
          added.textContent = 'Te rugăm să completezi numele și cifra.';
          return;
        }
        added.style.display = 'block';
        added.textContent = `✓ ${name} • cifra ${number} — topperul este pregătit pentru comandă.`;
        card.dataset.customName = name;
        card.dataset.customNumber = number;
      });
      grid.appendChild(card);
    });

    const anchor = document.querySelector('.wrap');
    if (anchor) anchor.appendChild(section);
    else document.body.appendChild(section);

    moveTopperBeforeReviews(section);
    hideOldOrderHelper();
    addFooter();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }

  window.addEventListener('load', () => {
    hideOldOrderHelper();
    const section = document.getElementById('cake-toppers-section');
    if (section) moveTopperBeforeReviews(section);
    addFooter();
  });
})();
