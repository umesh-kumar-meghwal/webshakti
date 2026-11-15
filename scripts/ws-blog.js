/* Web Shakti – blog behaviour (listing filter/search + article helpers) */
(function () {
  function ready(f){ document.readyState !== 'loading' ? f() : document.addEventListener('DOMContentLoaded', f); }
  ready(function () {

    /* ---------- LISTING: category chips + search ---------- */
    var chips = document.querySelectorAll('.bl-chip');
    var cards = document.querySelectorAll('[data-post]');
    var search = document.getElementById('bl-search');
    var empty = document.getElementById('bl-empty');
    var feature = document.querySelector('.bl-feature');
    var cat = 'All';

    function apply() {
      var q = search ? search.value.trim().toLowerCase() : '';
      var shown = 0;
      cards.forEach(function (c) {
        var okCat = cat === 'All' || c.getAttribute('data-cat') === cat;
        var okQ = !q || (c.getAttribute('data-search') || '').indexOf(q) !== -1;
        var ok = okCat && okQ;
        c.hidden = !ok;
        if (ok) shown++;
      });
      if (empty) empty.classList.toggle('show', shown === 0);
    }

    chips.forEach(function (b) {
      b.addEventListener('click', function () {
        cat = b.getAttribute('data-filter');
        chips.forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
        apply();
      });
    });
    if (search) search.addEventListener('input', apply);

    /* ---------- ARTICLE: table of contents highlight ---------- */
    var toc = document.querySelectorAll('.ar-toc a');
    if (toc.length && 'IntersectionObserver' in window) {
      var map = {};
      toc.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            toc.forEach(function (a) { a.classList.remove('on'); });
            var a = map[e.target.id]; if (a) a.classList.add('on');
          }
        });
      }, { rootMargin: '-20% 0px -70% 0px' });
      document.querySelectorAll('.ar-body h2[id]').forEach(function (h) { io.observe(h); });
    }

    /* ---------- ARTICLE: copy link ---------- */
    var copy = document.getElementById('ar-copy');
    if (copy) {
      copy.addEventListener('click', function () {
        var url = location.href.split('#')[0];
        function done() {
          copy.innerHTML = '<i class="fa-solid fa-check"></i>';
          setTimeout(function () { copy.innerHTML = '<i class="fa-solid fa-link"></i>'; }, 1800);
        }
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(url).then(done, function () { window.prompt('Copy this link:', url); });
        } else { window.prompt('Copy this link:', url); }
      });
    }
  });
})();
