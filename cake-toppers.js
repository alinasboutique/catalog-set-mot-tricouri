/* Cake Toppers — Alina's Handmade Boutique
   Public catalog UI. Personalization: Nume + Cifră.
   Add real topper photos/products later by filling TOPPER_PRODUCTS.
*/
(function () {
  const TOPPER_PRODUCTS = [
    { id: 'topper-3d', name: 'Topper 3D', price: 17 },
    { id: 'topper-shaker', name: 'Topper Shaker', price: 22 },
    { id: 'topper-tematic', name: 'Topper tematic', price: 17 },
    { id: 'topper-personalizat', name: 'Topper personalizat', price: 17 }
  ];

  function esc(value) {
    return String(value ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  }

  function render() {
    if (document.getElementById('cake-toppers-section')) return;

    const style = document.createElement('style');
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
      @media(max-width:900px){.cake-toppers-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
      @media(max-width:560px){.cake-toppers-head{display:block}.cake-toppers-grid{grid-template-columns:1fr}.cake-topper-image{height:260px}}
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
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render);
  else render();
})();
