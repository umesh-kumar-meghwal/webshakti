const P={phone:'8989898989',email:'ranibeautyparlour@gmail.com',addr:'Rani Beauty Parlour, 24-B, Mahaveer Nagar Extension, Near Chambal Garden, Kota, Rajasthan - 324005'};
const FB='1487412947147-5cebf100ffc2';
const S=[['Facial & Skin Care','Glow facials, cleanups and skin treatments for every skin type.','1570172619644-dfd03ed5d881','₹499'],['Hair Spa & Styling','Deep nourishing hair spa, cuts and styling for healthy shine.','1521590832167-7bcbfaa6381f','₹799'],['Bridal Makeup','Complete bridal glow with makeup, hair and pre-bridal care.','1583001931096-959e9a1a6223','₹12,000'],['Waxing & Threading','Gentle, hygienic hair removal with smooth results.','1560066984-138dadb4c035','₹99'],['Manicure & Pedicure','Relaxing hand and foot care with perfect nail finish.','1604654894610-df63bc536371','₹599'],['Hair Colour & Smoothening','Global colour, highlights, smoothening and keratin.','1560869713-7d0a29430803','₹1,999']];
const pg=location.pathname.split('/').pop()||'index.html';
const L=[['index.html','Home'],['about.html','About'],['services.html','Services'],['gallery.html','Gallery'],['packages.html','Packages'],['contact.html','Contact']];
const nav=L.map(l=>`<a href="${l[0]}" class="navl ${pg==l[0]?'on':''}">${l[1]}</a>`).join('');
document.body.insertAdjacentHTML('afterbegin',`<div id="loader"><h1 class="serif gold-text text-4xl">Rani Beauty Parlour</h1><div class="bar"><i></i></div></div>
<header class="fixed top-0 w-full z-50 backdrop-blur bg-white/80 border-b border-pink-200"><div class="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between"><a href="index.html" class="serif text-2xl gold-text">Rani Beauty Parlour</a><nav class="hidden md:flex gap-8">${nav}</nav><a href="contact.html" class="btn-gold hidden md:block !py-2 !px-5 text-sm">Book Now</a><button id="mb" class="md:hidden text-pink-600 text-3xl">☰</button></div><nav id="mn" class="hidden md:hidden flex-col gap-4 px-5 pb-5">${nav}</nav></header>`);
document.body.insertAdjacentHTML('beforeend',`<a href="https://wa.me/91${P.phone}" target="_blank" class="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-2xl float shadow-lg">💬</a>
<footer class="border-t border-pink-300 mt-20 pt-14 pb-6"><div class="max-w-7xl mx-auto px-5 grid md:grid-cols-3 gap-10"><div><h3 class="serif text-3xl gold-text mb-3">Rani Beauty Parlour</h3><p class="text-stone-600 text-sm">Complete beauty parlour in Kota for facials, hair care, bridal makeup and more. Feel beautiful every day.</p></div><div><h4 class="text-pink-600 mb-3">Quick Links</h4><div class="flex flex-col gap-2 text-sm text-stone-600">${nav}</div></div><div class="text-sm text-stone-600 space-y-2"><h4 class="text-pink-600 mb-3">Contact</h4><p>📍 ${P.addr}</p><p>📞 <a href="tel:+91${P.phone}">+91 ${P.phone}</a></p><p>✉️ <a href="mailto:${P.email}">${P.email}</a></p><p>🕘 Mon–Sun: 9 AM – 8 PM</p></div></div><p class="text-center text-xs text-stone-500 mt-10">© 2026 Rani Beauty Parlour, Kota. All rights reserved.<a href="webshakti.net.in" style="color:red;"> Demo By Web Shakti Kota</a></p></footer>`);
document.getElementById('mb').onclick=()=>document.getElementById('mn').classList.toggle('hidden');document.getElementById('mn').classList.toggle('flex');
addEventListener('load',()=>setTimeout(()=>document.getElementById('loader').classList.add('hide'),600));
document.querySelectorAll('[data-u]').forEach(i=>{i.src='https://images.unsplash.com/photo-'+i.dataset.u+'?auto=format&fit=crop&w=900&q=70';i.loading='lazy';i.onerror=()=>{i.onerror=null;i.src='https://images.unsplash.com/photo-'+FB+'?auto=format&fit=crop&w=900&q=70'}});
const sv=(n)=>S.slice(0,n||6).map(s=>`<div class="card overflow-hidden reveal"><div class="zoom h-60 !rounded-b-none"><img data-u="${s[2]}" alt="${s[0]}"></div><div class="p-6"><h3 class="serif text-2xl text-pink-600 mb-2">${s[0]}</h3><p class="text-stone-600 text-sm mb-4">${s[1]}</p><div class="flex justify-between items-center"><span class="text-pink-500">From ${s[3]}</span><a href="contact.html" class="text-sm text-pink-600 underline">Book →</a></div></div></div>`).join('');
document.querySelectorAll('[data-services]').forEach(e=>e.innerHTML=sv(+e.dataset.services));
document.querySelectorAll('[data-u]').forEach(i=>{i.src='https://images.unsplash.com/photo-'+i.dataset.u+'?auto=format&fit=crop&w=900&q=70';i.onerror=()=>{i.onerror=null;i.src='https://images.unsplash.com/photo-'+FB+'?auto=format&fit=crop&w=900&q=70'}});
document.querySelectorAll('.sp').forEach(e=>{for(let i=0;i<25;i++){const s=document.createElement('i');s.className='spark';s.style.cssText=`left:${Math.random()*100}%;top:${Math.random()*100}%;animation-delay:${Math.random()*6}s`;e.appendChild(s)}});
const io=new IntersectionObserver(a=>a.forEach(x=>{if(x.isIntersecting){x.target.classList.add('show');io.unobserve(x.target)}}),{threshold:.12});
setTimeout(()=>document.querySelectorAll('.reveal').forEach(e=>io.observe(e)),50);
document.querySelectorAll('[data-count]').forEach(e=>{const t=+e.dataset.count;let n=0;const iv=setInterval(()=>{n+=Math.ceil(t/60);if(n>=t){n=t;clearInterval(iv)}e.textContent=n+'+'},30)});
const f=document.getElementById('bf');if(f)f.onsubmit=e=>{e.preventDefault();const d=new FormData(f);const m=`Hello Rani Beauty Parlour! Name: ${d.get('n')}, Phone: ${d.get('p')}, Service: ${d.get('s')}, Date: ${d.get('d')}, Message: ${d.get('m')}`;open('https://wa.me/91'+P.phone+'?text='+encodeURIComponent(m))};


(function () {
  if (document.getElementById('ws-tag')) return;

  // ====== YAHAN APNA LOGO / LINK DALO ======
  var LOGO = '../../../images/webshakti-logo.png';   // apna logo path
  var LINK = 'https://webshakti.com';       // apni website / WhatsApp link
  var TEXT = 'Website by';
  var NAME = 'Webshakti';
  // =========================================

  var css = `
  #ws-tag{position:fixed;top:14px;right:14px;z-index:99999;display:flex;align-items:center;gap:12px;
    padding:10px 18px 10px 10px;background:linear-gradient(135deg,#111,#2a2a2a);color:#fff;
    border-radius:60px;text-decoration:none;box-shadow:0 8px 28px rgba(0,0,0,.35);
    border:2px solid #ffc107;font-family:'Jost',Arial,sans-serif;transition:transform .25s,box-shadow .25s;
    animation:wsIn .7s ease both}
  #ws-tag:hover{transform:translateY(-3px) scale(1.04);box-shadow:0 12px 34px rgba(255,193,7,.45);color:#fff}
  #ws-tag img{width:52px;height:52px;border-radius:50%;object-fit:contain;background:#fff;padding:4px;flex:none}
  #ws-tag span{display:block;line-height:1.1}
  #ws-tag small{display:block;font-size:11px;letter-spacing:.8px;text-transform:uppercase;opacity:.75}
  #ws-tag b{display:block;font-size:20px;font-weight:600;color:#ffc107}
  @keyframes wsIn{from{opacity:0;transform:translateY(-20px)}to{opacity:1;transform:none}}
  @media(max-width:576px){
    #ws-tag{top:8px;right:8px;gap:8px;padding:6px 12px 6px 6px}
    #ws-tag img{width:38px;height:38px}
    #ws-tag b{font-size:15px}
    #ws-tag small{font-size:9px}
  }`;

  var st = document.createElement('style');
  st.textContent = css;
  document.head.appendChild(st);

  var a = document.createElement('a');
  a.id = 'ws-tag';
  a.href = LINK;
  a.target = '_blank';
  a.rel = 'noopener';
  a.setAttribute('aria-label', NAME);
  a.innerHTML = '<img src="' + LOGO + '" alt="' + NAME + ' logo"><span><small>' + TEXT + '</small><b>' + NAME + '</b></span>';
  document.body.appendChild(a);
})();