(function(){
var $=function(s,c){return(c||document).querySelector(s)},$$=function(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s))};
window.addEventListener('load',function(){setTimeout(function(){$('#loader').classList.add('hide')},350)});
setTimeout(function(){var l=$('#loader');l&&l.classList.add('hide')},3000);
var h=$('#hdr'),t=$('#top');
window.addEventListener('scroll',function(){h.classList.toggle('sc',scrollY>40);t.classList.toggle('show',scrollY>500)});
t.onclick=function(){scrollTo({top:0,behavior:'smooth'})};
var b=$('#burger'),m=$('nav');
b.onclick=function(){m.classList.toggle('open')};
$$('.has-dd>a').forEach(function(a){a.addEventListener('click',function(e){if(innerWidth<=900&&!a.parentNode.classList.contains('open')){e.preventDefault();a.parentNode.classList.add('open')}})});
// reveal
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
$$('.reveal,.reveal-l,.reveal-r').forEach(function(e){io.observe(e)});
// counters
var co=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;var el=e.target,n=+el.dataset.count,s=0,st=Math.max(1,n/60);var i=setInterval(function(){s+=st;if(s>=n){s=n;clearInterval(i)}el.textContent=Math.floor(s).toLocaleString('en-IN')},25);co.unobserve(el)})},{threshold:.5});
$$('[data-count]').forEach(function(e){co.observe(e)});
// image fallback
$$('img').forEach(function(i){i.addEventListener('error',function(){i.style.minHeight='200px'})});
// favourites
$$('.fav').forEach(function(f){f.onclick=function(){f.classList.toggle('on');f.innerHTML=f.classList.contains('on')?'<i class="fa-solid fa-heart"></i>':'<i class="fa-regular fa-heart"></i>'}});
// property filter from URL
var q=new URLSearchParams(location.search),cards=$$('.pcard');
if(cards.length&&(q.get('type')||q.get('loc')||q.get('budget'))){
 var ty=q.get('type'),lc=q.get('loc'),bg=+q.get('budget')||0,sh=0;
 cards.forEach(function(c){var ok=true,p=+c.dataset.price;
  if(ty&&c.dataset.type!==ty)ok=false;if(lc&&c.dataset.loc!==lc)ok=false;
  if(bg&&c.dataset.purpose==='buy'){var lo=bg===50?0:bg===100?50:bg===200?100:200;if(!(p<=bg&&p>=lo))ok=false}
  c.style.display=ok?'':'none';if(ok)sh++});
 if(!sh){var n=document.createElement('p');n.className='center';n.innerHTML='No exact match. <a href="contact.html" style="color:#b88a1a;font-weight:700">Tell us your need</a> and we will find it for you.';cards[0].parentNode.after(n)}
}


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

// video modal
var vm=$('#vmodal');
function ov(e){e&&e.preventDefault();var f=$('#vframe');f.src=f.dataset.src;vm.classList.add('open')}
function cv(){vm.classList.remove('open');$('#vframe').src=''}
if(vm){$('#watch').onclick=ov;$('#playbig').onclick=ov;$('#vclose').onclick=cv;vm.onclick=function(e){if(e.target===vm)cv()}}
// gallery filter
$$('.gf button').forEach(function(bt){bt.onclick=function(){$$('.gf button').forEach(function(x){x.classList.remove('on')});bt.classList.add('on');$$('.gi.m').forEach(function(g){g.classList.toggle('hid',bt.dataset.f!=='all'&&g.dataset.cat!==bt.dataset.f)})}});
// lightbox
var lis=[],ix=0;
function lb(){var d=document.createElement('div');d.className='lb';d.innerHTML='<button class="x" aria-label="Close">×</button><button class="pv" aria-label="Previous">‹</button><img alt=""><button class="nx" aria-label="Next">›</button>';document.body.appendChild(d);
 function show(){d.querySelector('img').src=lis[ix].href}show();
 d.querySelector('.x').onclick=function(){d.remove()};d.onclick=function(e){if(e.target===d)d.remove()};
 d.querySelector('.pv').onclick=function(){ix=(ix-1+lis.length)%lis.length;show()};d.querySelector('.nx').onclick=function(){ix=(ix+1)%lis.length;show()}}
$$('[data-lb]').forEach(function(a){a.addEventListener('click',function(e){e.preventDefault();lis=$$('[data-lb]').filter(function(x){return !x.classList.contains('hid')});ix=lis.indexOf(a);lb()})});
// forms -> WhatsApp
$$('form[data-wa]').forEach(function(f){f.addEventListener('submit',function(e){e.preventDefault();var d=new FormData(f),s='*'+f.dataset.wa+' – DreamHome*%0A';d.forEach(function(v,k){if(v)s+=k+': '+encodeURIComponent(v)+'%0A'});window.open('https://wa.me/918999999999?text='+s,'_blank')})});
var pm=$('#pmsg');if(pm&&q.get('property'))pm.value='I am interested in: '+q.get('property');
// EMI
var A=$('#amt');if(A){var R=$('#rate'),T=$('#ten');var fm=function(n){return '₹'+Math.round(n).toLocaleString('en-IN')};
 function calc(){var p=+A.value,r=+R.value/1200,n=+T.value*12,e=p*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1);
  $('#la').textContent=fm(p);$('#ra').textContent=R.value+'%';$('#ta').textContent=T.value+' Years';$('#emi').textContent=fm(e);$('#ti').textContent=fm(e*n-p);$('#tp').textContent=fm(e*n)}
 [A,R,T].forEach(function(x){x.oninput=calc});calc()}
})();
