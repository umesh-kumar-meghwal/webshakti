
(function(){
var $=function(s){return document.querySelectorAll(s)};
var mb=document.getElementById('mb'),mm=document.getElementById('mm');
mb.addEventListener('click',function(){var o=mm.classList.toggle('hidden');mb.setAttribute('aria-expanded',!o)});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
$('.rv,.rv-l,.rv-r').forEach(function(e){io.observe(e)});
var co=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;co.unobserve(e.target);var t=+e.target.dataset.count,s=performance.now();
(function f(n){var k=Math.min((n-s)/1800,1);k=1-Math.pow(1-k,3);e.target.textContent=Math.floor(t*k).toLocaleString('en-IN');if(k<1)requestAnimationFrame(f)})(s)})});
$('[data-count]').forEach(function(e){co.observe(e)});
var bar=document.getElementById('bar'),h=document.getElementById('hdr'),ly=0,blobs=$('.blob'),tk=false;
addEventListener('scroll',function(){if(tk)return;tk=true;requestAnimationFrame(function(){var d=document.documentElement,y=d.scrollTop;
bar.style.width=(y/(d.scrollHeight-d.clientHeight)*100)+'%';h.classList.toggle('shadow-lg',y>10);h.classList.toggle('hide',y>ly&&y>300&&mm.classList.contains('hidden'));ly=y;
blobs.forEach(function(b,i){b.style.transform='translateY('+(y*(i?-.08:.08))+'px)'});tk=false})},{passive:true});
$('.tilt').forEach(function(c){c.addEventListener('mousemove',function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform='perspective(800px) rotateX('+(-y*6)+'deg) rotateY('+(x*6)+'deg) translateY(-6px)'});
c.addEventListener('mouseleave',function(){c.style.transform=''})});
var t=$('.ts'),i=0;if(t.length)setInterval(function(){t[i].classList.remove('on');i=(i+1)%t.length;t[i].classList.add('on')},4500);
var f=document.getElementById('cf');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var d=new FormData(f);open('https://wa.me/919876543210?text='+encodeURIComponent('Hello, I am '+d.get('n')+' ('+d.get('p')+'). '+d.get('m')),'_blank')});
document.getElementById('yr').textContent=new Date().getFullYear();
/* Real photo swap: put assets/img/<name>.jpg (e.g. hero.jpg, treat-1.jpg) and it replaces the illustration automatically */
$('[data-photo]').forEach(function(el){var n=el.getAttribute('data-photo'),im=new Image();im.alt='MoveWell Physiotherapy Kota - '+n.replace('-',' ');im.loading='lazy';
im.onload=function(){var s=el.querySelector('svg');if(s)s.replaceWith(im);im.className='rounded-2xl'};im.src='assets/img/'+n+'.jpg'});
})();
