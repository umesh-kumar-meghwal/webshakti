
/* ===== EASY SETTINGS ===== */
const SITE = { name: "Glow", sub: "Beauty", phone: "+91 98765 43210", whatsapp: "919876543210", email: "hello@glowbeauty.in", address: "Rajasthan, India" };
const SERVICES = [["bridal","Bridal Makeup"],["party","Party Makeup"],["hair","Hair Styling"],["nail","Nail Art"],["facial","Facials & Skin Care"],["mehndi","Pre-Bridal Packages"]];
const PAGES = [["index.html","Home","home"],["about.html","About Us","about"],["services.html","Our Services","services"],["gallery.html","Gallery","gallery"],["testimonials.html","Testimonials","testimonials"],["blog.html","Blog","blog"],["contact.html","Contact","contact"]];
const cur = document.body.dataset.page;

const logo = `<a class="brand" href="index.html"><i class="bi bi-gem brand-ic"></i><span><span class="nm">${SITE.name}<em>${SITE.sub}</em></span><small>MAKEUP &bull; BRIDAL &bull; SALON</small></span></a>`;
const dLinks = PAGES.map(p => p[2] === "services"
  ? `<li class="nav-item dropdown"><a class="nav-link dropdown-toggle ${cur===p[2]?'active':''}" href="${p[0]}" role="button" data-bs-toggle="dropdown">${p[1]}</a><ul class="dropdown-menu">${SERVICES.map(s=>`<li><a class="dropdown-item" href="services.html#${s[0]}">${s[1]}</a></li>`).join("")}</ul></li>`
  : `<li class="nav-item"><a class="nav-link ${p[2]===cur?'active':''}" href="${p[0]}">${p[1]}</a></li>`).join("");
const mLinks = PAGES.map(p => `<li class="nav-item"><a class="nav-link ${p[2]===cur?'active':''}" href="${p[0]}">${p[1]}</a>${p[2]==="services"?`<div class="sub">${SERVICES.map(s=>`<a href="services.html#${s[0]}">${s[1]}</a>`).join("")}</div>`:""}</li>`).join("");

document.getElementById("site-header").innerHTML = `
<div class="topbar d-none d-md-block"><div class="container d-flex justify-content-between align-items-center">
  <div><a href="contact.html"><i class="bi bi-geo-alt-fill"></i>${SITE.address}</a><a href="tel:${SITE.phone.replace(/\s/g,'')}"><i class="bi bi-telephone-fill"></i>${SITE.phone}</a><a href="mailto:${SITE.email}"><i class="bi bi-envelope-fill"></i>${SITE.email}</a></div>
  <div class="soc"><a href="#" aria-label="Facebook"><i class="bi bi-facebook"></i></a><a href="#" aria-label="Instagram"><i class="bi bi-instagram"></i></a><a href="#" aria-label="YouTube"><i class="bi bi-youtube"></i></a><a href="#" aria-label="Pinterest"><i class="bi bi-pinterest"></i></a></div>
</div></div>
<nav class="navbar sticky-top"><div class="container">
  ${logo}
  <ul class="navbar-nav flex-row ms-auto me-xl-4 d-none d-lg-flex">${dLinks}</ul>
  <a href="contact.html" class="btn btn-rose d-none d-lg-inline-block"><i class="bi bi-calendar-check me-1"></i> Book Appointment <i class="bi bi-arrow-right"></i></a>
  <button class="navbar-toggler d-lg-none" data-bs-toggle="offcanvas" data-bs-target="#menu" aria-label="Open menu"><i class="bi bi-list"></i></button>
</div></nav>
<div class="offcanvas offcanvas-end text-white" id="menu" tabindex="-1">
  <div class="offcanvas-header">${logo}<button class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button></div>
  <div class="offcanvas-body"><ul class="navbar-nav">${mLinks}</ul><a href="contact.html" class="btn btn-rose w-100 mt-4">Book Appointment <i class="bi bi-arrow-right"></i></a>
  <p class="mt-4 small opacity-75"><i class="bi bi-telephone-fill" style="color:#ff7aa8"></i> ${SITE.phone}</p></div>
</div>`;

document.getElementById("site-footer").innerHTML = `
<footer class="footer"><div class="container"><div class="row g-4">
  <div class="col-lg-4">${logo}<p class="mt-3">From bridal glam to everyday beauty, we bring out your natural glow with expert care and premium services.</p>
    <div class="socials"><a href="#" aria-label="Facebook"><i class="bi bi-facebook"></i></a><a href="#" aria-label="Instagram"><i class="bi bi-instagram"></i></a><a href="#" aria-label="YouTube"><i class="bi bi-youtube"></i></a><a href="#" aria-label="Pinterest"><i class="bi bi-pinterest"></i></a></div></div>
  <div class="col-6 col-lg-2"><h5>Menu</h5>${PAGES.map(p=>`<a href="${p[0]}">${p[1]}</a>`).join("")}</div>
  <div class="col-6 col-lg-3"><h5>Services</h5>${SERVICES.map(s=>`<a href="services.html#${s[0]}">${s[1]}</a>`).join("")}</div>
  <div class="col-lg-3"><h5>Contact</h5><p class="mb-1"><i class="bi bi-geo-alt-fill" style="color:#ff7aa8"></i> ${SITE.address}</p><p class="mb-1"><i class="bi bi-telephone-fill" style="color:#ff7aa8"></i> ${SITE.phone}</p><p><i class="bi bi-envelope-fill" style="color:#ff7aa8"></i> ${SITE.email}</p><p class="small">Open every day, 10 am to 8 pm</p></div>
</div><div class="copy">&copy; ${new Date().getFullYear()} Glow Beauty. All rights reserved. <a href="webshakti.net.in" style="color:red;"> Demo By Web Shakti Kota</a></div></div></footer>
<a class="wa-float" href="https://wa.me/${SITE.whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp"><i class="bi bi-whatsapp"></i></a>`;

const nav = document.querySelector(".navbar"), bar = document.getElementById("progress"), toTop = document.getElementById("toTop");
addEventListener("scroll", () => {
  const h = document.documentElement.scrollHeight - innerHeight;
  bar.style.width = (h > 0 ? scrollY / h * 100 : 0) + "%";
  nav.classList.toggle("scrolled", scrollY > 60); toTop.classList.toggle("show", scrollY > 500);
}, { passive: true });
toTop.addEventListener("click", e => { e.preventDefault(); scrollTo({ top: 0 }); });

/* close mobile menu when a link is tapped */
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
  if (t.tagName === "IMG" && !t.dataset.fb) { t.dataset.fb = 1; t.src = "https://picsum.photos/seed/" + encodeURIComponent((t.alt || "glow") + Math.floor(Math.random() * 90)) + "/1200/900"; }
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

/* appointment forms -> WhatsApp */
document.querySelectorAll(".appt-form").forEach(f => {
  const dt = f.querySelector('input[type=date]'); if (dt) dt.min = new Date().toISOString().split("T")[0];
  f.addEventListener("submit", e => {
    e.preventDefault(); const m = f.querySelector(".formMsg");
    if (!f.checkValidity()) { f.classList.add("was-validated"); m.textContent = "Please fill all required fields correctly."; m.style.color = "#c0392b"; return; }
    const d = Object.fromEntries(new FormData(f).entries());
    m.textContent = "Opening WhatsApp..."; m.style.color = "#1b9e5a";
    open("https://wa.me/" + SITE.whatsapp + "?text=" + encodeURIComponent(`Appointment request\nName: ${d.name}\nMobile: ${d.phone}\nService: ${d.service}\nDate: ${d.date}\nMessage: ${d.msg || "-"}`), "_blank");
    f.reset();
  });
});
