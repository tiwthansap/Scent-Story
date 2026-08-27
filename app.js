/* ---- รูปภาพทั้งหมด: แก้ path ตรงนี้ถ้าเปลี่ยนรูป ---- */
const IMG = {
  "p01": "img/p01.jpg",
  "d01": "img/d01.jpg",
  "p02": "img/p02.jpg",
  "d02": "img/d02.jpg",
  "p03": "img/p03.jpg",
  "d03": "img/d03.jpg",
  "p04": "img/p04.jpg",
  "d04": "img/d04.jpg",
  "p05": "img/p05.jpg",
  "d05": "img/d05.jpg",
  "p06": "img/p06.jpg",
  "d06": "img/d06.jpg",
  "p07": "img/p07.jpg",
  "d07": "img/d07.jpg",
  "p08": "img/p08.jpg",
  "d08": "img/d08.jpg",
  "p09": "img/p09.jpg",
  "d09": "img/d09.jpg",
  "p10": "img/p10.jpg",
  "d10": "img/d10.jpg",
  "p11": "img/p11.jpg",
  "d11": "img/d11.jpg",
  "p12": "img/p12.jpg",
  "d12": "img/d12.jpg",
  "emblem": "img/emblem.png",
  "emblemLight": "img/emblem-light.png",
  "logofull": "img/logo-full.png",
  "giftBox": "img/gift-story-box.png"
};

/* ================= data ================= */
const MOODS = [
  { id: 'all',    th: 'ทั้งหมด',  en: 'All' },
  { id: 'warm',   th: 'อบอุ่น',   en: 'Warm' },
  { id: 'fresh',  th: 'สดชื่น',   en: 'Fresh' },
  { id: 'floral', th: 'ดอกไม้',   en: 'Floral' },
  { id: 'woody',  th: 'ไม้',      en: 'Woody' },
  { id: 'clean',  th: 'สะอาด',    en: 'Clean' }
];

const P = [
  { no:'01', en:'Golden Hour', th:'ทิวสนธยาสีทอง', moods:['warm','woody'], p1:790, p2:1190, best:true,
    notes:['อำพัน','ไม้ซีดาร์','ทองก้าบีน'], en_notes:'Amber · Cedarwood · Tonka',
    pyr:['ส้มแมนดาริน, พริกไทยดำ','อำพันเรซิน, ไม้ซีดาร์','ทองก้าบีน, วานิลลาแห้ง'],
    story:'กลิ่นแรกของแบรนด์ ปรุงจากยี่สิบนาทีสุดท้ายก่อนพระอาทิตย์ตก ตอนที่แดดยังอุ่นอยู่บนพื้นไม้ อำพันให้ความหวานลึก ซีดาร์ตัดให้ไม่เลี่ยน เหมาะกับห้องนั่งเล่นที่มีคนแวะมานั่งบ่อย' },
  { no:'02', en:'Slow Sunday', th:'วันอาทิตย์เนิบช้า', moods:['clean','fresh'], p1:590, p2:990, best:false,
    notes:['ชาขาว','ดอกแพร์','มัสก์ขาว'], en_notes:'White Tea · Pear Blossom · Musk',
    pyr:['ใบชาขาว, ผิวมะกรูดอ่อน','ดอกแพร์, ฟรีเซีย','มัสก์ขาว, ไม้ไผ่'],
    story:'เช้าวันที่ไม่มีนัด ชาที่ชงทิ้งไว้จนอุ่น ๆ แล้วลืมดื่ม กลิ่นนี้เบามากโดยตั้งใจ ใส่ในห้องนอนหรือห้องทำงานได้โดยไม่รบกวนสมาธิ' },
  { no:'03', en:'After The Rain', th:'สวนมะเดื่อหลังสายฝน', moods:['fresh','woody'], p1:690, p2:1090, best:false,
    notes:['มะเดื่อ','ไม้ซีดาร์','ใบไม้เขียว'], en_notes:'Fig · Cedar · Green Leaves',
    pyr:['ใบมะเดื่อ, ลูกแพร์เขียว','เนื้อมะเดื่อ, มะพร้าวอ่อน','ไม้ซีดาร์, ดินหลังฝน'],
    story:'ฝนตกตอนบ่ายแล้วหยุดกะทันหัน ใบไม้ยังเปียก อากาศเย็นลงสิบองศา มะเดื่อให้ความเขียวและครีมมี่พร้อมกัน เป็นกลิ่นที่คนไม่ชอบกลิ่นหวานมักจบที่กลิ่นนี้' },
  { no:'04', en:'Goodnight', th:'ราตรีอันอ่อนโยน', moods:['warm'], p1:690, p2:1090, best:true,
    notes:['วานิลลา','มัสก์','ทองก้าบีน'], en_notes:'Vanilla · Musk · Tonka Bean',
    pyr:['วานิลลามาดากัสการ์','ดอกส้ม, อัลมอนด์','มัสก์นุ่ม, ทองก้าบีน'],
    story:'หวานแบบผ้าห่มไม่ใช่แบบขนม เราลดวานิลลาลงจากสูตรแรกสามครั้งกว่าจะได้ระดับที่จุดทิ้งไว้ในห้องนอนได้ทั้งคืนโดยไม่แน่นจมูก' },
  { no:'05', en:'Purple Hour', th:'ทิวสนธยาสีม่วง', moods:['floral','fresh'], p1:690, p2:1090, best:false,
    notes:['ลาเวนเดอร์','คาโมมายล์','ซีดาร์'], en_notes:'Lavender · Chamomile · Cedar',
    pyr:['ลาเวนเดอร์โพรวองซ์, เบอร์กาม็อต','คาโมมายล์, เสจ','ซีดาร์, มัสก์อ่อน'],
    story:'ลาเวนเดอร์ที่ไม่เหมือนน้ำยาปรับผ้านุ่ม เราใช้ตัวจริงจากโพรวองซ์ที่มีความเขียวและขมนิด ๆ แล้วถ่วงด้วยคาโมมายล์ให้กลมขึ้น' },
  { no:'06', en:'Night Jasmine', th:'มะลิรัตติกาล', moods:['floral'], p1:690, p2:1090, best:false,
    notes:['มะลิ','กระดังงา','มัสก์ขาว'], en_notes:'Jasmine · Ylang Ylang · White Musk',
    pyr:['มะลิซ้อน, ใบเขียว','กระดังงา, ดอกส้ม','มัสก์ขาว, ไม้จันทน์อ่อน'],
    story:'มะลิที่หอมแรงที่สุดคือตอนสี่ทุ่ม กลิ่นนี้ทำให้บ้านไทยรู้สึกเป็นบ้านไทย แต่ตัดความหวานเข้มออกด้วยมัสก์ขาวจนใส่ห้องรับแขกได้สบาย' },
  { no:'07', en:'First Light', th:'ปฐมแสงอรุณ', moods:['fresh'], p1:590, p2:990, best:false,
    notes:['เบอร์กาม็อต','เลมอน','เนโรลี'], en_notes:'Bergamot · Lemon · Neroli',
    pyr:['เลมอนซิซิลี, เบอร์กาม็อต','เนโรลี, ใบเวอร์บีน่า','ไม้ขาว, มัสก์ใส'],
    story:'กลิ่นสำหรับห้องครัวและห้องน้ำ ซิตรัสสดแบบผิวเปลือกที่เพิ่งบิด ไม่ใช่แบบน้ำยาล้างจาน เนโรลีช่วยให้ยังหอมอยู่หลังโน้ตซิตรัสจางไป' },
  { no:'08', en:'Love Letter', th:'จดหมายรักที่ไม่เคยส่ง', moods:['floral','warm'], p1:690, p2:1090, best:false,
    notes:['กุหลาบ','พีโอนี','แป้งนุ่ม'], en_notes:'Rose · Peony · Soft Powder',
    pyr:['ลิ้นจี่, พีโอนี','กุหลาบดามัสก์','แป้งไอริส, มัสก์'],
    story:'กุหลาบแบบจดหมายเก่า ไม่ใช่แบบช่อวาเลนไทน์ มีความเป็นแป้งและกระดาษปนอยู่ เป็นกลิ่นที่ลูกค้าซื้อเป็นของขวัญบ่อยที่สุด' },
  { no:'09', en:'Salt & Stone', th:'ลมเกลือบนศิลา', moods:['fresh','clean'], p1:690, p2:1090, best:false,
    notes:['เกลือทะเล','ไม้เกยตื้น','โอโซน'], en_notes:'Sea Salt · Driftwood · Ozone',
    pyr:['ลมทะเล, เกลือ','สาหร่าย, หินเปียก','ไม้เกยตื้น, มัสก์เย็น'],
    story:'ไม่ใช่กลิ่นครีมกันแดด เราตั้งใจทำให้เป็นทะเลตอนเช้าที่ยังไม่มีคน มีความเค็มและเย็นของหิน เหมาะกับห้องที่แสงเข้าเยอะ' },
  { no:'10', en:'Old Temple', th:'วัดเก่าใต้เงาไม้', moods:['woody','warm'], p1:790, p2:1190, best:false,
    notes:['ไม้จันทน์','อำพัน','เวติเวอร์'], en_notes:'Sandalwood · Amber · Vetiver',
    pyr:['พริกไทยชมพู, ลูกจันทน์','ไม้จันทน์อินเดีย, อำพัน','เวติเวอร์, ซีดาร์แห้ง'],
    story:'กลิ่นของศาลาไม้ที่โดนแดดมาสามสิบปี สงบและแห้ง ไม่มีความหวานเลย คนทำงานสมาธิหรือเล่นโยคะที่บ้านมักเลือกกลิ่นนี้' },
  { no:'11', en:'Sun-dried', th:'ผ้าฝ้ายกลางแดด', moods:['clean'], p1:590, p2:990, best:true,
    notes:['ผ้าฝ้าย','ลิลลี่','มัสก์นุ่ม'], en_notes:'Cotton · Lily · Soft Musk',
    pyr:['ผ้าฝ้ายสะอาด, อากาศเย็น','ลิลลี่ออฟเดอะแวลลีย์','มัสก์นุ่ม, ไม้ขาว'],
    story:'กลิ่นผ้าปูที่นอนที่เพิ่งเก็บลงมาจากราวตอนบ่าย เรียบที่สุดในคอลเลกชัน และเป็นกลิ่นที่คนซื้อซ้ำมากที่สุด เพราะใส่ห้องไหนก็ไม่มีทางผิด' },
  { no:'12', en:'Midnight', th:'ราตรีลึก', moods:['warm','woody'], p1:790, p2:1190, best:false,
    notes:['อำพันดำ','อู๊ด','หนัง'], en_notes:'Black Amber · Oud · Leather',
    pyr:['ลูกพลัมแห้ง, พริกไทยดำ','อำพันดำ, อู๊ด','หนังนุ่ม, ยาสูบ'],
    story:'บทสุดท้ายของคอลเลกชัน เข้มที่สุด มืดที่สุด อำพันดำกับอู๊ดทำให้ห้องรู้สึกเหมือนบาร์เล็ก ๆ ตอนดึก ใช้ก้านแค่ 3–4 ก้านก็พอสำหรับห้องปกติ'}
];
P.forEach((x, i) => { x.id = i + 1; x.img = IMG['p' + x.no]; x.det = IMG['d' + x.no]; });

let io;
const baht = n => '฿' + n.toLocaleString('en-US');
const el = (s, r) => (r || document).querySelector(s);
const els = (s, r) => Array.from((r || document).querySelectorAll(s));

/* ================= brand marks ================= */
el('#lock-mark').src = IMG.emblem;
el('#hero-mark').src = IMG.emblem;
function setStoryMark() {
  const rootTheme = document.documentElement.dataset.theme;
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  el('#story-mark').src = rootTheme === 'dark' || (rootTheme !== 'light' && systemDark)
    ? IMG.emblemLight
    : IMG.emblem;
}
setStoryMark();
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setStoryMark);
el('#band-mark').src = IMG.emblemLight;
el('#foot-mark').src = IMG.emblemLight;
el('#hero-shot').src = P[0].img;

/* ================= filters + grid ================= */
let activeMood = 'all';

el('#filters').innerHTML = MOODS.map(m =>
  `<button class="chip" data-mood="${m.id}" aria-pressed="${m.id === 'all'}"><span class="th">${m.th}</span>${m.en}</button>`
).join('');

function cardHTML(p) {
  return `<article class="card" data-id="${p.id}">
    <div class="card-media">
      <a href="#p${p.no}" data-open="${p.id}" aria-label="ดูรายละเอียด ${p.en}"><img src="${p.img}" alt="ก้านไม้หอม ${p.en} ${p.th}" loading="lazy"></a>
      <span class="card-no">${p.no}</span>
      <button class="card-add" data-quick="${p.id}">เพิ่มลงตะกร้า · 100 มล.</button>
    </div>
    <div class="card-body">
      <a href="#p${p.no}" data-open="${p.id}"><h3 class="card-name">${p.en}</h3></a>
      <span class="card-th">${p.th}</span>
      <span class="card-notes">${p.en_notes}</span>
      <div class="card-foot">
        <span class="price tnum"><small>จาก</small>${baht(p.p1)}</span>
        ${p.best ? '<span class="tag-best">Best seller</span>' : '<span class="eyebrow">100 / 200 มล.</span>'}
      </div>
    </div>
  </article>`;
}

function renderGrid() {
  const list = activeMood === 'all' ? P : P.filter(p => p.moods.includes(activeMood));
  el('#grid').innerHTML = list.map(cardHTML).join('');
  el('#grid-count').textContent = list.length + ' scents';
  observeReveals();
}
renderGrid();

el('#filters').addEventListener('click', e => {
  const b = e.target.closest('[data-mood]');
  if (!b) return;
  activeMood = b.dataset.mood;
  els('#filters .chip').forEach(c => c.setAttribute('aria-pressed', c.dataset.mood === activeMood));
  renderGrid();
});

/* gift media */
el('#gift-media').innerHTML =
  `<img src="${IMG.giftBox}" alt="The Story Box เซ็ตก้านไม้หอม" loading="lazy">`;

/* ================= cart ================= */
let cart = [];
const FREE = 1000;
const PROMPTPAY_ID = ''; // ใส่เบอร์พร้อมเพย์ร้าน เช่น '0812345678' หรือเลขนิติบุคคล 13 หลัก
const PROMPTPAY_STORE_KEY = 'scentStoryPromptPayId';
let checkoutMode = false;

const cartTotal = () => cart.reduce((s, c) => s + c.qty * c.price, 0);
const cartCount = () => cart.reduce((s, c) => s + c.qty, 0);
const cleanPromptPayId = id => String(id || '').replace(/\D/g, '');
const looksLikeTestPromptPayId = id => /^(\d)\1+$/.test(cleanPromptPayId(id));
const validPromptPayId = id => {
  const clean = cleanPromptPayId(id);
  return [10, 13, 15].includes(clean.length) && !looksLikeTestPromptPayId(clean);
};
const storedPromptPayId = localStorage.getItem(PROMPTPAY_STORE_KEY);
let promptPayId = validPromptPayId(storedPromptPayId) ? storedPromptPayId : PROMPTPAY_ID;
const promptPayUrl = (id, amount) =>
  `https://promptpay.io/${encodeURIComponent(cleanPromptPayId(id))}/${amount.toFixed(2)}.png`;
function maskPromptPayId(id) {
  const clean = cleanPromptPayId(id);
  if (clean.length === 10) return clean.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
  return clean ? 'เลขพร้อมเพย์ลงท้าย ' + clean.slice(-4) : 'ยังไม่ได้ตั้งค่าเลขพร้อมเพย์ร้าน';
}

function addItem(item) {
  const k = cart.find(c => c.key === item.key);
  if (k) k.qty += item.qty; else cart.push(item);
  renderCart();
  toast(`เพิ่ม ${item.name} ลงตะกร้าแล้ว`);
}
function renderCart() {
  const n = cartCount();
  const total = cartTotal();
  el('#cart-count').textContent = n;
  el('#cart-total').textContent = baht(total);
  el('#checkout').disabled = n === 0;

  const pct = Math.min(100, (total / FREE) * 100);
  el('#ship-fill').style.right = (100 - pct) + '%';
  el('#ship-msg').textContent = total >= FREE
    ? 'ได้รับสิทธิ์จัดส่งฟรีแล้ว'
    : `อีก ${baht(FREE - total)} ส่งฟรี`;

  el('#cart-items').innerHTML = cart.length ? cart.map((c, i) => `
    <div class="ci">
      <img src="${c.img}" alt="">
      <div class="ci-r">
        <div>
          <div class="n">${c.name}</div>
          <div class="v">${c.variant}</div>
          <div class="qty">
            <button data-q="-1" data-i="${i}" aria-label="ลดจำนวน">−</button>
            <span class="tnum">${c.qty}</span>
            <button data-q="1" data-i="${i}" aria-label="เพิ่มจำนวน">+</button>
          </div>
        </div>
        <div style="text-align:right;display:flex;flex-direction:column;gap:10px;align-items:flex-end">
          <span class="price tnum" style="font-size:15px">${baht(c.price * c.qty)}</span>
          <button class="rm" data-rm="${i}">ลบ</button>
        </div>
      </div>
    </div>`).join('') : '<div class="empty">ยังไม่มีสินค้าในตะกร้า</div>';
  if (checkoutMode) renderCheckout();
}
el('#cart-items').addEventListener('click', e => {
  const q = e.target.closest('[data-q]'), r = e.target.closest('[data-rm]');
  if (q) {
    const i = +q.dataset.i;
    cart[i].qty += +q.dataset.q;
    if (cart[i].qty < 1) cart.splice(i, 1);
    renderCart();
  } else if (r) { cart.splice(+r.dataset.rm, 1); renderCart(); }
});
renderCart();

/* ================= drawer / menu / toast ================= */
function setCheckout(on) {
  checkoutMode = on && cart.length > 0;
  el('#drawer-title').textContent = checkoutMode ? 'Checkout' : 'Cart';
  el('#ship-bar').hidden = checkoutMode;
  el('#cart-items').hidden = checkoutMode;
  el('#cart-foot').hidden = checkoutMode;
  el('#checkout-view').hidden = !checkoutMode;
  if (checkoutMode) renderCheckout();
}
function renderCheckout() {
  const total = cartTotal();
  el('#checkout-total').textContent = baht(total);
  el('#promptpay-amount').textContent = baht(total);
  el('#checkout-items').innerHTML = cart.map(c => `
    <div class="checkout-line">
      <div>
        <div class="n">${c.name}</div>
        <div class="v">${c.variant} · ${c.qty} ชิ้น</div>
      </div>
      <span class="price tnum">${baht(c.price * c.qty)}</span>
    </div>`).join('');

  const clean = cleanPromptPayId(promptPayId);
  const ready = validPromptPayId(clean);
  el('#promptpay-id-view').textContent = ready ? maskPromptPayId(clean) : 'ยังไม่ได้ตั้งค่าเลขพร้อมเพย์ร้าน';
  el('#promptpay-setup').hidden = ready;
  el('#promptpay-qr').hidden = !ready;
  if (ready) {
    el('#promptpay-qr').src = promptPayUrl(clean, total);
  }
}
function openDrawer(on) {
  el('#drawer').classList.toggle('on', on);
  el('#overlay').classList.toggle('on', on);
  document.body.style.overflow = on ? 'hidden' : '';
  if (!on) setCheckout(false);
}
el('#cart-btn').onclick = () => openDrawer(true);
el('#drawer-close').onclick = () => openDrawer(false);
el('#overlay').onclick = () => { openDrawer(false); el('#mnav').classList.remove('on'); };
el('#burger').onclick = () => { el('#mnav').classList.add('on'); document.body.style.overflow = 'hidden'; };
el('#mnav-close').onclick = closeM;
function closeM() { el('#mnav').classList.remove('on'); document.body.style.overflow = ''; }
els('[data-mclose]').forEach(a => a.addEventListener('click', closeM));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { openDrawer(false); closeM(); }
});

let tId;
function toast(msg) {
  const t = el('#toast');
  t.textContent = msg; t.classList.add('on');
  clearTimeout(tId); tId = setTimeout(() => t.classList.remove('on'), 2600);
}

el('#checkout').onclick = () => {
  if (!cart.length) return toast('ยังไม่มีสินค้าในตะกร้า');
  setCheckout(true);
};
el('#checkout-back').onclick = () => setCheckout(false);
el('#promptpay-save').onclick = () => {
  const id = cleanPromptPayId(el('#promptpay-id-input').value);
  if (!validPromptPayId(id)) return toast('กรุณาใส่เลขพร้อมเพย์ 10, 13 หรือ 15 หลัก');
  promptPayId = id;
  localStorage.setItem(PROMPTPAY_STORE_KEY, id);
  renderCheckout();
  toast('สร้าง QR พร้อมเพย์แล้ว');
};
el('#copy-payment').onclick = async () => {
  const text = `Scent Story ยอดชำระ ${baht(cartTotal())} พร้อมเพย์ ${maskPromptPayId(promptPayId)}`;
  try {
    await navigator.clipboard.writeText(text);
    toast('คัดลอกยอดชำระแล้ว');
  } catch {
    toast('คัดลอกไม่สำเร็จ กรุณาจดเลขและยอดชำระ');
  }
};
el('#paid-note').onclick = () => toast('ขอบคุณค่ะ กรุณาส่งสลิปให้ร้านเพื่อตรวจสอบ');
el('#news-form').addEventListener('submit', e => {
  e.preventDefault(); e.target.reset(); toast('ขอบคุณ! เราจะส่งจดหมายฉบับแรกให้เร็ว ๆ นี้');
});

/* ================= quick add + gift ================= */
document.addEventListener('click', e => {
  const q = e.target.closest('[data-quick]');
  if (q) {
    const p = P.find(x => x.id === +q.dataset.quick);
    addItem({ key: p.id + '-100', name: p.en, variant: '100 มล.', price: p.p1, qty: 1, img: p.img });
    openDrawer(true);
  }
  const g = e.target.closest('[data-add-gift]');
  if (g) {
    addItem({ key: 'gift', name: 'The Story Box', variant: 'เซ็ต 3 กลิ่น · 50 มล.', price: 1290, qty: 1, img: IMG.giftBox });
    openDrawer(true);
  }
});

/* ================= product page ================= */
function openProduct(id) {
  const p = P.find(x => x.id === id);
  const rel = P.filter(x => x.id !== id && x.moods.some(m => p.moods.includes(m))).slice(0, 3);
  el('#view-product').innerHTML = `
  <section class="pdp wrap">
    <div class="crumbs">
      <a href="#top" data-back>Collection</a><span>/</span><span>${p.en}</span>
    </div>
    <div class="pdp-grid">
      <div>
        <div class="gal-main"><img id="gal-img" src="${p.img}" alt="ก้านไม้หอม ${p.en}"></div>
        <div class="gal-thumbs">
          <button aria-pressed="true" data-src="${p.img}"><img src="${p.img}" alt=""></button>
        </div>
      </div>
      <div class="pdp-info">
        <span class="eyebrow">Edition ${p.no} · Reed Diffuser</span>
        <h1 class="pdp-title">${p.en}</h1>
        <p class="pdp-th">${p.th}</p>
        <p class="pdp-price tnum" id="pdp-price">${baht(p.p1)}</p>
        <div class="sizes" id="sizes">
          <button class="size" aria-pressed="true" data-price="${p.p1}" data-label="100 มล.">
            <span class="sn">100 ml</span><span class="sp tnum">${baht(p.p1)}</span><span class="sd">หอมประมาณ 8–10 สัปดาห์</span>
          </button>
          <button class="size" aria-pressed="false" data-price="${p.p2}" data-label="200 มล.">
            <span class="sn">200 ml</span><span class="sp tnum">${baht(p.p2)}</span><span class="sd">หอมประมาณ 12–16 สัปดาห์</span>
          </button>
        </div>
        <button class="btn" id="pdp-add" style="width:100%">เพิ่มลงตะกร้า</button>
        <p class="pdp-story">${p.story}</p>
        <dl class="notes-tbl">
          <div><dt>Top</dt><dd>${p.pyr[0]}</dd></div>
          <div><dt>Heart</dt><dd>${p.pyr[1]}</dd></div>
          <div><dt>Base</dt><dd>${p.pyr[2]}</dd></div>
          <div><dt>ก้าน</dt><dd>ไฟเบอร์สีดำ 8 ก้าน (100 มล.) / 10 ก้าน (200 มล.)</dd></div>
          <div><dt>ห้องที่เหมาะ</dt><dd>15–25 ตร.ม.</dd></div>
        </dl>
      </div>
    </div>

    <section class="sec" style="padding-bottom:0">
      <div class="sec-head">
        <div class="l"><span class="eyebrow">You may also like</span><h2 class="h-sec">กลิ่นใกล้เคียง</h2></div>
      </div>
      <div class="grid">${rel.map(cardHTML).join('')}</div>
    </section>
  </section>`;

  el('#view-home').hidden = true;
  el('#view-product').hidden = false;
  window.scrollTo(0, 0);

  let size = { price: p.p1, label: '100 มล.' };
  el('#sizes').addEventListener('click', e => {
    const b = e.target.closest('.size'); if (!b) return;
    els('#sizes .size').forEach(s => s.setAttribute('aria-pressed', s === b));
    size = { price: +b.dataset.price, label: b.dataset.label };
    el('#pdp-price').textContent = baht(size.price);
  });
  el('#pdp-add').onclick = () => {
    addItem({ key: p.id + '-' + size.label, name: p.en, variant: size.label, price: size.price, qty: 1, img: p.img });
    openDrawer(true);
  };
}

function closeProduct() {
  el('#view-product').hidden = true;
  el('#view-home').hidden = false;
}

document.addEventListener('click', e => {
  const o = e.target.closest('[data-open]');
  if (o) { e.preventDefault(); openProduct(+o.dataset.open); return; }
  const b = e.target.closest('[data-back]');
  if (b) { e.preventDefault(); closeProduct(); return; }
  const n = e.target.closest('[data-nav]');
  if (n) {
    e.preventDefault();
    const id = n.getAttribute('href').slice(1);
    closeProduct();
    const t = id === 'top' ? document.body : document.getElementById(id);
    if (t) window.scrollTo({ top: id === 'top' ? 0 : t.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  }
});

/* ================= scent finder ================= */
const QS = [
  { q: 'จุดที่ห้องไหนบ่อยที่สุด', opts: [
      { t: 'ห้องนอน', m: ['warm', 'clean'] }, { t: 'ห้องนั่งเล่น', m: ['warm', 'woody'] },
      { t: 'ห้องทำงาน', m: ['fresh', 'woody'] }, { t: 'ห้องน้ำ / ครัว', m: ['fresh', 'clean'] } ] },
  { q: 'ชอบเปิดตอนไหน', opts: [
      { t: 'ตอนเช้า', m: ['fresh', 'clean'] }, { t: 'ตอนบ่าย', m: ['floral', 'fresh'] },
      { t: 'ตอนค่ำ', m: ['warm', 'floral'] }, { t: 'ก่อนนอน', m: ['warm', 'woody'] } ] },
  { q: 'อยากให้บ้านรู้สึกแบบไหน', opts: [
      { t: 'ผ่อนคลาย', m: ['floral', 'clean'] }, { t: 'สดชื่น', m: ['fresh'] },
      { t: 'อบอุ่น', m: ['warm'] }, { t: 'สงบ มีสมาธิ', m: ['woody'] } ] }
];
const answers = [null, null, null];

el('#finder-box').innerHTML = QS.map((q, i) => `
  <div class="q">
    <div class="q-head"><span class="qn">0${i + 1}</span><span class="qt">${q.q}</span></div>
    <div class="opts">${q.opts.map((o, j) =>
      `<button class="opt" data-q="${i}" data-o="${j}" aria-pressed="false">${o.t}</button>`).join('')}</div>
  </div>`).join('') + `<div class="finder-out" id="finder-out"></div>`;

el('#finder-box').addEventListener('click', e => {
  const b = e.target.closest('.opt'); if (!b) return;
  const qi = +b.dataset.q;
  answers[qi] = +b.dataset.o;
  els(`.opt[data-q="${qi}"]`).forEach(x => x.setAttribute('aria-pressed', x === b));
  if (answers.every(a => a !== null)) showResult();
});

function showResult() {
  const score = {};
  answers.forEach((a, i) => QS[i].opts[a].m.forEach((m, k) => { score[m] = (score[m] || 0) + (k === 0 ? 2 : 1); }));
  let best = P[0], bestScore = -1;
  P.forEach(p => {
    const s = p.moods.reduce((t, m, k) => t + (score[m] || 0) * (k === 0 ? 1.3 : 1), 0);
    if (s > bestScore) { bestScore = s; best = p; }
  });
  const out = el('#finder-out');
  out.className = 'finder-out on';
  out.innerHTML = `
    <img src="${best.img}" alt="${best.en}">
    <div style="flex:1;min-width:230px">
      <span class="eyebrow">กลิ่นของคุณคือ</span>
      <h3 class="card-name" style="font-size:28px;margin:10px 0 4px">${best.en}</h3>
      <p class="card-th" style="margin-bottom:6px">${best.th}</p>
      <p class="card-notes">${best.en_notes}</p>
      <div style="display:flex;gap:14px;flex-wrap:wrap;align-items:center;margin-top:18px">
        <button class="btn ghost" data-open="${best.id}">ดูรายละเอียด</button>
        <button class="btn" data-quick="${best.id}">หยิบใส่ตะกร้า · ${baht(best.p1)}</button>
      </div>
    </div>`;
}

/* ================= header + reveals ================= */
const hdr = el('#hdr');
addEventListener('scroll', () => hdr.classList.toggle('stuck', scrollY > 24), { passive: true });

function observeReveals() {
  if (!('IntersectionObserver' in window)) { els('.rv').forEach(x => x.classList.add('in')); return; }
  io = io || new IntersectionObserver(en => en.forEach(x => {
    if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); }
  }), { rootMargin: '0px 0px -8% 0px' });
  els('.rv:not(.in)').forEach(x => io.observe(x));
}
observeReveals();
