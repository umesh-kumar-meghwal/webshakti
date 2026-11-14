
/* ===== EASY SETTINGS ===== */
const SITE = { name: "Toppers", sub: "Coaching Institute", phone: "+91 00000 00000", whatsapp: "910000000000", email: "info@toppers.in", address: "Your address here" };
const PAGES = [["index.html","Home","home"],["courses.html","Courses","courses"],["about.html","About","about"],["results.html","Results","results"],["gallery.html","Gallery","gallery"],["contact.html","Contact","contact"]];
const cur = document.body.dataset.page;
const links = PAGES.map(p => `<li class="nav-item"><a class="nav-link ${p[2]===cur?'active':''}" href="${p[0]}">${p[1]}</a></li>`).join("");
const logo = `<a class="brand" href="index.html"><i class="bi bi-mortarboard-fill brand-ic"></i><span><b>${SITE.name}</b><small>${SITE.sub}</small></span></a>`;

document.getElementById("site-header").innerHTML = `
<nav class="navbar sticky-top"><div class="container">
  ${logo}
  <ul class="navbar-nav flex-row ms-auto me-lg-4 d-none d-lg-flex">${links}</ul>
  <a href="contact.html" class="btn btn-gold d-none d-lg-inline-block">Enroll Now <i class="bi bi-arrow-right"></i></a>
  <button class="navbar-toggler d-lg-none" data-bs-toggle="offcanvas" data-bs-target="#menu" aria-label="Open menu"><i class="bi bi-list"></i></button>
</div></nav>
<div class="offcanvas offcanvas-end text-white" id="menu" tabindex="-1">
  <div class="offcanvas-header">${logo}<button class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button></div>
  <div class="offcanvas-body"><ul class="navbar-nav">${links}</ul><a href="contact.html" class="btn btn-gold w-100 mt-4">Enroll Now <i class="bi bi-arrow-right"></i></a>
  <p class="mt-4 small text-light opacity-75"><i class="bi bi-telephone-fill text-warning"></i> ${SITE.phone}</p></div>
</div>`;

document.getElementById("site-footer").innerHTML = `
<footer class="footer"><div class="container"><div class="row g-4">
  <div class="col-lg-4">${logo}<p class="mt-3">Expert guidance, modern teaching and a result-oriented approach for students who dream big.</p>
    <div class="socials"><a href="#" aria-label="Facebook"><i class="bi bi-facebook"></i></a><a href="#" aria-label="Instagram"><i class="bi bi-instagram"></i></a><a href="#" aria-label="YouTube"><i class="bi bi-youtube"></i></a></div></div>
  <div class="col-6 col-lg-2"><h5>Menu</h5>${PAGES.map(p=>`<a href="${p[0]}">${p[1]}</a>`).join("")}</div>
  <div class="col-6 col-lg-3"><h5>Courses</h5><a href="courses.html">Foundation</a><a href="courses.html">Board Booster</a><a href="courses.html">JEE</a><a href="courses.html">NEET</a></div>
  <div class="col-lg-3"><h5>Contact</h5><p class="mb-1"><i class="bi bi-geo-alt-fill text-warning"></i> ${SITE.address}</p><p class="mb-1"><i class="bi bi-telephone-fill text-warning"></i> ${SITE.phone}</p><p><i class="bi bi-envelope-fill text-warning"></i> ${SITE.email}</p></div>
</div><div class="copy">&copy; ${new Date().getFullYear()} ${SITE.name} ${SITE.sub}. All rights reserved.<a href="webshakti.net.in" style="color:red;"> Demo By Web Shakti Kota</a></div></div></footer>
<a class="wa-float" href="https://wa.me/${SITE.whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp"><i class="bi bi-whatsapp"></i></a>`;

const nav = document.querySelector(".navbar"), bar = document.getElementById("progress"), toTop = document.getElementById("toTop");
addEventListener("scroll", () => {
  const h = document.documentElement.scrollHeight - innerHeight;
  bar.style.width = (h > 0 ? scrollY / h * 100 : 0) + "%";
  nav.classList.toggle("scrolled", scrollY > 60);
  toTop.classList.toggle("show", scrollY > 500);
}, { passive: true });
toTop.addEventListener("click", e => { e.preventDefault(); scrollTo({ top: 0 }); });

const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 });
document.querySelectorAll(".reveal,.reveal-l,.reveal-r").forEach((el, i) => { el.style.transitionDelay = (i % 4) * 90 + "ms"; io.observe(el); });

const cio = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  const el = e.target, to = +el.dataset.to; let n = 0; const step = Math.max(1, Math.ceil(to / 70));
  const t = setInterval(() => { n += step; if (n >= to) { n = to; clearInterval(t); } el.textContent = n.toLocaleString("en-IN"); }, 22);
  cio.unobserve(el);
}), { threshold: .5 });
document.querySelectorAll(".counter").forEach(c => cio.observe(c));

addEventListener("error", e => {
  const t = e.target;
  if (t.tagName === "IMG" && !t.dataset.fb) { t.dataset.fb = 1; t.src = "https://picsum.photos/seed/" + encodeURIComponent((t.alt || "toppers") + Math.floor(Math.random() * 90)) + "/1200/800"; }
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

/* video modal: load on open, stop on close */
const vm = document.getElementById("videoModal");
if (vm) { const fr = document.getElementById("vidFrame");
  vm.addEventListener("show.bs.modal", () => {
    if (fr.dataset.src.includes("VIDEO_ID")) { fr.srcdoc = "<body style='margin:0;display:grid;place-items:center;height:100vh;background:#0A1B4D;color:#fff;font-family:sans-serif;text-align:center'><p>Add your YouTube video id in index.html<br>(replace VIDEO_ID)</p></body>"; }
    else fr.src = fr.dataset.src + "?autoplay=1"; });
  vm.addEventListener("hidden.bs.modal", () => fr.src = ""); }

/* enrol form -> WhatsApp */
const f = document.getElementById("enrollForm");
if (f) f.addEventListener("submit", e => {
  e.preventDefault(); const m = document.getElementById("formMsg");
  if (!f.checkValidity()) { f.classList.add("was-validated"); m.textContent = "Please fill all required fields correctly."; m.style.color = "#c0392b"; return; }
  const d = Object.fromEntries(new FormData(f).entries());
  m.textContent = "Opening WhatsApp..."; m.style.color = "#1b9e5a";
  open("https://wa.me/" + SITE.whatsapp + "?text=" + encodeURIComponent(`Enrollment enquiry\nStudent: ${d.name}\nMobile: ${d.phone}\nClass: ${d.cls}\nCourse: ${d.course}\nMessage: ${d.msg || "-"}`), "_blank");
  f.reset();
});
