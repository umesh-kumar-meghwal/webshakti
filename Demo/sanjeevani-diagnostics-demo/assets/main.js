
(function(){
var $=function(s,c){return(c||document).querySelectorAll(s)};
var mb=document.getElementById('mb'),mm=document.getElementById('mm');
mb.addEventListener('click',function(){var o=mm.classList.toggle('hidden');mb.setAttribute('aria-expanded',!o)});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
$('.rv').forEach(function(e){io.observe(e)});
var co=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;co.unobserve(e.target);var t=+e.target.dataset.count,s=performance.now();
(function f(n){var k=Math.min((n-s)/1600,1);e.target.textContent=Math.floor(t*k).toLocaleString('en-IN');if(k<1)requestAnimationFrame(f)})(s)})});
$('[data-count]').forEach(function(e){co.observe(e)});
var bar=document.getElementById('bar'),h=document.getElementById('hdr');
addEventListener('scroll',function(){var d=document.documentElement;bar.style.width=(d.scrollTop/(d.scrollHeight-d.clientHeight)*100)+'%';h.classList.toggle('shadow-lg',d.scrollTop>10)},{passive:true});
var t=$('.ts'),i=0;if(t.length)setInterval(function(){t[i].classList.remove('on');i=(i+1)%t.length;t[i].classList.add('on')},4500);
var f=document.getElementById('cf');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var d=new FormData(f);
var m='Hello, I am '+d.get('n')+' ('+d.get('p')+'). '+d.get('m');open('https://wa.me/919876543210?text='+encodeURIComponent(m),'_blank')});
document.getElementById('yr').textContent=new Date().getFullYear();
})();
