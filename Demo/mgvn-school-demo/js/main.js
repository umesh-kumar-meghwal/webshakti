(function () {
  if (document.getElementById('ws-tag')) return;

  // ====== YAHAN APNA LOGO / LINK DALO ======
  var LOGO = '../../../images/webshakti-logo.png';   // apna logo path
  var LINK = 'https://webshakti.net.in/';       // apni website / WhatsApp link
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
/* ===== EASY SETTINGS: change school details here ===== */
const SCHOOL = {
  name: "Mahatma Ghani Vidya Niketan",
  short: "School, Sangod",
  phone: "+91 00000 00000",
  whatsapp: "910000000000",          // country code + number, no + or spaces
  email: "info@mgvnschool.in",
  address: "Sangod"
};

const PAGES = [
  ["index.html","Home","home"],["about.html","About","about"],["academics.html","Academics","academics"],
  ["admissions.html","Admissions","admissions"],["gallery.html","Gallery","gallery"],
  ["events.html","Events","events"],["contact.html","Contact","contact"]
];
const cur = document.body.dataset.page;

document.getElementById("site-header").innerHTML = `
<div class="topbar"><div class="container d-flex justify-content-between flex-wrap">
  <div><a href="tel:${SCHOOL.phone.replace(/\s/g,'')}"><i class="bi bi-telephone-fill"></i>${SCHOOL.phone}</a><a href="mailto:${SCHOOL.email}" class="d-none d-md-inline"><i class="bi bi-envelope-fill"></i>${SCHOOL.email}</a></div>
  <div class="d-none d-sm-block"><i class="bi bi-geo-alt-fill" style="color:#F4A21D"></i> ${SCHOOL.address}</div>
</div></div>
<nav class="navbar navbar-expand-lg sticky-top"><div class="container">
  <a class="navbar-brand brand" href="index.html"><span class="brand-logo">M</span><span><b>${SCHOOL.name}</b><small>${SCHOOL.short}</small></span></a>
  <button class="navbar-toggler border-0" data-bs-toggle="collapse" data-bs-target="#nav" aria-label="Menu"><i class="bi bi-list fs-1" style="color:#16224D"></i></button>
  <div class="collapse navbar-collapse" id="nav">
    <ul class="navbar-nav ms-auto align-items-lg-center">
      ${PAGES.map(p=>`<li class="nav-item"><a class="nav-link ${p[2]===cur?'active':''}" href="${p[0]}">${p[1]}</a></li>`).join("")}
      <li class="nav-item ms-lg-2"><a class="btn btn-saffron" href="admissions.html">Apply Now</a></li>
    </ul>
  </div>
</div></nav>`;

document.getElementById("site-footer").innerHTML = `
<footer class="footer"><div class="container"><div class="row g-4">
  <div class="col-lg-4"><a class="brand mb-3" href="index.html"><span class="brand-logo">M</span><span><b>${SCHOOL.name}</b><small>${SCHOOL.short}</small></span></a>
    <p>Quality education with strong values for every child of Sangod and nearby villages.</p>
    <div class="socials"><a href="#" aria-label="Facebook"><i class="bi bi-facebook"></i></a><a href="#" aria-label="Instagram"><i class="bi bi-instagram"></i></a><a href="#" aria-label="YouTube"><i class="bi bi-youtube"></i></a></div></div>
  <div class="col-6 col-lg-2"><h5>Quick links</h5>${PAGES.map(p=>`<a href="${p[0]}">${p[1]}</a>`).join("")}</div>
  <div class="col-6 col-lg-3"><h5>Classes</h5><a href="academics.html">Pre-Primary</a><a href="academics.html">Primary</a><a href="academics.html">Middle School</a><a href="academics.html">Secondary</a></div>
  <div class="col-lg-3"><h5>Contact</h5><p class="mb-1"><i class="bi bi-geo-alt text-warning"></i> ${SCHOOL.address}</p><p class="mb-1"><i class="bi bi-telephone text-warning"></i> ${SCHOOL.phone}</p><p><i class="bi bi-envelope text-warning"></i> ${SCHOOL.email}</p></div>
</div>
<div class="copy">&copy; ${new Date().getFullYear()} ${SCHOOL.name} ${SCHOOL.short}. All rights reserved. <a href="webshakti.net.in" style="color:red;"> Demo By Web Shakti Kota</a></div></div></footer>
<a class="wa-float" href="https://wa.me/${SCHOOL.whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp"><i class="bi bi-whatsapp"></i></a>`;

/* sticky nav shadow + progress + back to top */
const nav = document.querySelector(".navbar"), bar = document.getElementById("progress"), toTop = document.getElementById("toTop");
addEventListener("scroll", () => {
  const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
  bar.style.width = (h > 0 ? y / h * 100 : 0) + "%";
  nav.classList.toggle("scrolled", y > 60);
  toTop.classList.toggle("show", y > 500);
}, { passive: true });
toTop.addEventListener("click", e => { e.preventDefault(); scrollTo({ top: 0 }); });

/* reveal on scroll */
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 });
document.querySelectorAll(".reveal,.reveal-l,.reveal-r").forEach((el, i) => { el.style.transitionDelay = (i % 4) * 90 + "ms"; io.observe(el); });

/* counters */
const cio = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  const el = e.target, to = +el.dataset.to; let n = 0; const step = Math.max(1, Math.ceil(to / 70));
  const t = setInterval(() => { n += step; if (n >= to) { n = to; clearInterval(t); } el.textContent = n.toLocaleString("en-IN"); }, 22);
  cio.unobserve(el);
}), { threshold: .5 });
document.querySelectorAll(".counter").forEach(c => cio.observe(c));

/* image fallback if a remote photo fails */
addEventListener("error", e => {
  const t = e.target;
  if (t.tagName === "IMG" && !t.dataset.fb) {
    t.dataset.fb = 1;
    t.src = "https://picsum.photos/seed/" + encodeURIComponent((t.alt || "school") + Math.floor(Math.random() * 90)) + "/1200/800";
  }
}, true);

/* lightbox */
const lb = document.getElementById("lightbox");
document.querySelectorAll("a[data-lb]").forEach(a => a.addEventListener("click", e => {
  e.preventDefault();
  lb.querySelector("img").src = a.getAttribute("href");
  lb.querySelector("p").textContent = a.dataset.lb;
  lb.classList.add("open");
}));
lb.addEventListener("click", e => { if (e.target === lb || e.target.closest("#lbClose")) lb.classList.remove("open"); });
addEventListener("keydown", e => { if (e.key === "Escape") lb.classList.remove("open"); });

/* gallery filter */
document.querySelectorAll(".filters button").forEach(b => b.addEventListener("click", () => {
  document.querySelectorAll(".filters button").forEach(x => x.classList.remove("active"));
  b.classList.add("active");
  document.querySelectorAll(".gal-grid .gal-item").forEach(g => g.style.display = (b.dataset.f === "all" || g.dataset.cat === b.dataset.f) ? "" : "none");
}));

/* forms -> WhatsApp */
function wireForm(id, build) {
  const f = document.getElementById(id); if (!f) return;
  f.addEventListener("submit", e => {
    e.preventDefault();
    const msg = document.getElementById("formMsg");
    if (!f.checkValidity()) { f.classList.add("was-validated"); msg.textContent = "Please fill all required fields correctly."; msg.style.color = "#C8334B"; return; }
    const d = Object.fromEntries(new FormData(f).entries());
    msg.textContent = "Opening WhatsApp..."; msg.style.color = "#2E7D5B";
    window.open("https://wa.me/" + SCHOOL.whatsapp + "?text=" + encodeURIComponent(build(d)), "_blank");
    f.reset();
  });
}
wireForm("admForm", d => `Admission enquiry\nStudent: ${d.student}\nClass: ${d.cls}\nParent: ${d.parent}\nMobile: ${d.phone}\nMessage: ${d.msg || "-"}`);
wireForm("contactForm", d => `Message from website\nName: ${d.name}\nMobile: ${d.phone}\nMessage: ${d.msg}`);
