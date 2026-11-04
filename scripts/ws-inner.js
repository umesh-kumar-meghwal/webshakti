/* Web Shakti – shared behaviour for inner pages */
(function () {
  function ready(f){ document.readyState !== 'loading' ? f() : document.addEventListener('DOMContentLoaded', f); }
  ready(function () {
    var nav = document.getElementById('wsn');
    var bar = document.createElement('div'); bar.id = 'ws-progress'; document.body.appendChild(bar);
    var wa = document.createElement('a');
    wa.className = 'ws-wa'; wa.href = 'https://wa.me/918000509635'; wa.target = '_blank'; wa.rel = 'noopener noreferrer';
    wa.setAttribute('aria-label', 'Chat on WhatsApp'); wa.innerHTML = '<i class="fa-brands fa-whatsapp"></i>';
    document.body.appendChild(wa);
    var up = document.createElement('button');
    up.className = 'ws-top'; up.setAttribute('aria-label', 'Back to top'); up.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
    up.onclick = function () { window.scrollTo({ top: 0, behavior: 'smooth' }); };
    document.body.appendChild(up);

    function onScroll() {
      var y = window.scrollY, h = document.documentElement.scrollHeight - window.innerHeight;
      if (nav) nav.classList.toggle('sc', y > 30);
      bar.style.width = (h > 0 ? y / h * 100 : 0) + '%';
      up.classList.toggle('show', y > 600);
    }
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

    /* active link */
    var page = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    var map = { 'web-development.html': 'services.html', 'app-development.html': 'services.html', 'seo-services.html': 'services.html',
      'ecommerce-development.html': 'services.html', 'ui-ux-design.html': 'services.html', 'amc-support.html': 'services.html', 'software.html': 'services.html' };
    var cur = map[page] || page;
    document.querySelectorAll('.wsn-links a, .wsm a').forEach(function (a) {
      if (a.classList.contains('wsn-cta')) return;
      if ((a.getAttribute('href') || '').toLowerCase() === cur) a.classList.add('act');
    });

    /* mobile menu (safe even if the page's own script also binds it) */
    var mm = document.getElementById('mobile-menu'), b = document.getElementById('menu-btn'), x = document.getElementById('close-menu');
    function open() { mm.classList.remove('hidden'); mm.classList.add('flex'); document.body.style.overflow = 'hidden'; }
    function close() { mm.classList.add('hidden'); mm.classList.remove('flex'); document.body.style.overflow = ''; }
    if (mm && b) { b.addEventListener('click', open); }
    if (mm && x) { x.addEventListener('click', close); }
    if (mm) { mm.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', close); }); }
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && mm) close(); });
    window.addEventListener('resize', function () { if (window.innerWidth >= 1024 && mm) close(); });
  });
})();
