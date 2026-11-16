
/* ===== EASY SETTINGS ===== */
const SITE = { name: "Royal Venue", tagline: "Celebrate Life's Special Moments", phone: "+91 98765 43210", whatsapp: "919876543210", email: "info@royalvenue.in", address: "Jaipur, Rajasthan" };
const PAGES = [["index.html","Home","home"],["banquet-halls.html","Banquet Halls","halls"],["marriage-gardens.html","Marriage Gardens","gardens"],["gallery.html","Gallery","gallery"],["facilities.html","Facilities","facilities"],["testimonials.html","Testimonials","testimonials"],["contact.html","Contact","contact"]];
const cur = document.body.dataset.page;
const crown = `<svg class="crown" viewBox="0 0 64 48" aria-hidden="true"><path d="M4 40 L8 12 L22 27 L32 6 L42 27 L56 12 L60 40 Z" fill="currentColor"/><rect x="6" y="42" width="52" height="5" rx="2" fill="currentColor"/><circle cx="8" cy="10" r="3" fill="currentColor"/><circle cx="32" cy="4" r="3" fill="currentColor"/><circle cx="56" cy="10" r="3" fill="currentColor"/></svg>`;
const links = PAGES.map(p => `<li class="nav-item"><a class="nav-link ${p[2]===cur?'active':''}" href="${p[0]}">${p[1]}</a></li>`).join("");
const logo = `<a class="brand" href="index.html">${crown}<span><b>${SITE.name}</b><small>${SITE.tagline}</small></span></a>`;

document.getElementById("site-header").innerHTML = `
<div class="topbar d-none d-md-block"><div class="container d-flex justify-content-between align-items-center">
  <div><a href="contact.html"><i class="bi bi-geo-alt-fill"></i>${SITE.address}</a><a href="tel:${SITE.phone.replace(/\s/g,'')}"><i class="bi bi-telephone-fill"></i>${SITE.phone}</a><a href="mailto:${SITE.email}"><i class="bi bi-envelope-fill"></i>${SITE.email}</a></div>
  <div class="soc"><a href="#" aria-label="Facebook"><i class="bi bi-facebook"></i></a><a href="#" aria-label="Instagram"><i class="bi bi-instagram"></i></a><a href="#" aria-label="YouTube"><i class="bi bi-youtube"></i></a><a href="#" aria-label="Pinterest"><i class="bi bi-pinterest"></i></a><a href="#" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a></div>
</div></div>
<nav class="navbar sticky-top"><div class="container">
  ${logo}
  <ul class="navbar-nav flex-row ms-auto me-xl-3 d-none d-lg-flex">${links}</ul>
  <a href="contact.html" class="btn btn-gold d-none d-lg-inline-block"><i class="bi bi-calendar-check me-1"></i> Book Your Venue <i class="bi bi-arrow-right"></i></a>
  <button class="navbar-toggler d-lg-none" data-bs-toggle="offcanvas" data-bs-target="#menu" aria-label="Open menu"><i class="bi bi-list"></i></button>
</div></nav>
<div class="offcanvas offcanvas-end text-white" id="menu" tabindex="-1">
  <div class="offcanvas-header">${logo}<button class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button></div>
  <div class="offcanvas-body"><ul class="navbar-nav">${links}</ul><a href="contact.html" class="btn btn-gold w-100 mt-4">Book Your Venue <i class="bi bi-arrow-right"></i></a>
  <p class="mt-4 small opacity-75"><i class="bi bi-telephone-fill" style="color:#d9a93e"></i> ${SITE.phone}</p></div>
</div>`;

document.getElementById("site-footer").innerHTML = `
<footer class="footer"><div class="container"><div class="row g-4">
  <div class="col-lg-4">${logo}<p class="mt-3">Luxurious banquet halls and beautiful marriage gardens for weddings, receptions and every special moment.</p>
    <div class="socials"><a href="#" aria-label="Facebook"><i class="bi bi-facebook"></i></a><a href="#" aria-label="Instagram"><i class="bi bi-instagram"></i></a><a href="#" aria-label="YouTube"><i class="bi bi-youtube"></i></a><a href="#" aria-label="Pinterest"><i class="bi bi-pinterest"></i></a></div></div>
  <div class="col-6 col-lg-2"><h5>Menu</h5>${PAGES.map(p=>`<a href="${p[0]}">${p[1]}</a>`).join("")}</div>
  <div class="col-6 col-lg-3"><h5>Events</h5><a href="contact.html">Weddings</a><a href="contact.html">Engagement</a><a href="contact.html">Reception</a><a href="contact.html">Sangeet &amp; Mehndi</a><a href="contact.html">Corporate</a></div>
  <div class="col-lg-3"><h5>Contact</h5><p class="mb-1"><i class="bi bi-geo-alt-fill" style="color:#d9a93e"></i> ${SITE.address}</p><p class="mb-1"><i class="bi bi-telephone-fill" style="color:#d9a93e"></i> ${SITE.phone}</p><p><i class="bi bi-envelope-fill" style="color:#d9a93e"></i> ${SITE.email}</p></div>
</div><div class="copy">&copy; ${new Date().getFullYear()} ${SITE.name}. All rights reserved. <a href="webshakti.net.in" style="color:red;"> Demo By Web Shakti Kota</a></div></div></footer>
<a class="wa-float" href="https://wa.me/${SITE.whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp"><i class="bi bi-whatsapp"></i></a>`;

const nav = document.querySelector(".navbar"), bar = document.getElementById("progress"), toTop = document.getElementById("toTop");
addEventListener("scroll", () => {
  const h = document.documentElement.scrollHeight - innerHeight;
  bar.style.width = (h > 0 ? scrollY / h * 100 : 0) + "%";
  nav.classList.toggle("scrolled", scrollY > 60); toTop.classList.toggle("show", scrollY > 500);
}, { passive: true });
toTop.addEventListener("click", e => { e.preventDefault(); scrollTo({ top: 0 }); });
document.querySelectorAll("#menu a").forEach(a => a.addEventListener("click", () => { const o = bootstrap.Offcanvas.getInstance(document.getElementById("menu")); if (o) o.hide(); }));

const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 });
document.querySelectorAll(".reveal,.reveal-l,.reveal-r").forEach((el, i) => { el.style.transitionDelay = (i % 3) * 100 + "ms"; io.observe(el); });

const cio = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  const el = e.target, to = +el.dataset.to; let n = 0; const step = Math.max(1, Math.ceil(to / 70));
  const t = setInterval(() => { n += step; if (n >= to) { n = to; clearInterval(t); } el.textContent = n.toLocaleString("en-IN"); }, 22);
  cio.unobserve(el);
}), { threshold: .5 });
document.querySelectorAll(".counter").forEach(c => cio.observe(c));

addEventListener("error", e => {
  const t = e.target;
  if (t.tagName === "IMG" && !t.dataset.fb) { t.dataset.fb = 1; t.src = "https://picsum.photos/seed/" + encodeURIComponent((t.alt || "venue") + Math.floor(Math.random() * 90)) + "/1200/900"; }
}, true);

const lb = document.getElementById("lightbox");
document.querySelectorAll("a[data-lb]").forEach(a => a.addEventListener("click", e => {
  e.preventDefault(); lb.querySelector("img").src = a.getAttribute("href"); lb.querySelector("p").textContent = a.dataset.lb; lb.classList.add("open");
}));
lb.addEventListener("click", e => { if (e.target === lb || e.target.closest("#lbClose")) lb.classList.remove("open"); });
addEventListener("keydown", e => { if (e.key === "Escape") lb.classList.remove("open"); });

document.querySelectorAll(".filters button").forEach(b => b.addEventListener("click", () => {
  document.querySelectorAll(".filters button").forEach(x => x.classList.remove("active")); b.classList.add("active");
  document.querySelectorAll(".gal-grid .gal-item").forEach(g => g.style.display = (b.dataset.f === "all" || g.dataset.cat === b.dataset.f) ? "" : "none");
}));

const vm = document.getElementById("videoModal");
if (vm) { const fr = document.getElementById("vidFrame");
  vm.addEventListener("show.bs.modal", () => {
    if (fr.dataset.src.includes("VIDEO_ID")) fr.srcdoc = "<body style='margin:0;display:grid;place-items:center;height:100vh;background:#2b0a16;color:#fff;font-family:sans-serif;text-align:center'><p>Add your YouTube video id in index.html<br>(replace VIDEO_ID)</p></body>";
    else fr.src = fr.dataset.src + "?autoplay=1"; });
  vm.addEventListener("hidden.bs.modal", () => { fr.removeAttribute("srcdoc"); fr.src = ""; }); }

document.querySelectorAll(".quote-form").forEach(f => {
  const dt = f.querySelector('input[type=date]'); if (dt) dt.min = new Date().toISOString().split("T")[0];
  f.addEventListener("submit", e => {
    e.preventDefault(); const m = f.querySelector(".formMsg");
    if (!f.checkValidity()) { f.classList.add("was-validated"); m.textContent = "Please fill all required fields correctly."; m.style.color = "#c0392b"; return; }
    const d = Object.fromEntries(new FormData(f).entries());
    m.textContent = "Opening WhatsApp..."; m.style.color = "#1b9e5a";
    open("https://wa.me/" + SITE.whatsapp + "?text=" + encodeURIComponent(`Venue enquiry\nName: ${d.name}\nMobile: ${d.phone}\nEvent: ${d.event}\nVenue: ${d.venue}\nDate: ${d.date}\nGuests: ${d.guests}\nMessage: ${d.msg || "-"}`), "_blank");
    f.reset();
  });
});


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