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
(function(){
var $=function(s,c){return(c||document).querySelector(s)},$$=function(s,c){return Array.prototype.slice.call((c||document).querySelectorAll(s))};
var P=window.PRODUCTS,byId={};P.forEach(function(p){byId[p.id]=p});
var rs=function(n){return '₹'+Math.round(n).toLocaleString('en-IN')};
function ld(k){try{return JSON.parse(localStorage.getItem(k))||[]}catch(e){return[]}}function sv(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
function toast(m){var t=$('#toast');t.textContent=m;t.classList.add('on');clearTimeout(toast.t);toast.t=setTimeout(function(){t.classList.remove('on')},2200)}
// header
var h=$('#hdr'),tp=$('#top');addEventListener('scroll',function(){h.classList.toggle('sc',scrollY>30);tp.classList.toggle('show',scrollY>500)});tp.onclick=function(){scrollTo({top:0,behavior:'smooth'})};
$('#burger').onclick=function(){$('#nav').classList.toggle('open')};
$$('.has-dd>a').forEach(function(a){a.addEventListener('click',function(e){if(innerWidth<=900&&!a.parentNode.classList.contains('open')){e.preventDefault();a.parentNode.classList.add('open')}})});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.1});
$$('.reveal,.reveal-l,.reveal-r').forEach(function(e){io.observe(e)});
// state
var cart=ld('al_cart'),wl=ld('al_wl'),coupon=localStorage.getItem('al_cp')||'';
function save(){sv('al_cart',cart);sv('al_wl',wl);upd()}
function count(){return cart.reduce(function(a,i){return a+i.qty},0)}
function sub(){return cart.reduce(function(a,i){return a+byId[i.id].price*i.qty},0)}
function totals(){var s=sub(),d=0;if(coupon==='FIRST10')d=s*.1;if(coupon==='FESTIVE40')d=s*.4;var sh=(s-d>=999||!s)?0:60;return{s:s,d:d,sh:sh,t:s-d+sh}}
function upd(){$('#cc').textContent=count();$('#wc').textContent=wl.length;$$('.wl').forEach(function(b){var on=wl.indexOf(b.dataset.id)>-1;b.classList.toggle('on',on);b.innerHTML=on?'<i class="fa-solid fa-heart"></i>':'<i class="fa-regular fa-heart"></i>'});drawer();pages()}
function add(id,size,color,q){var f=cart.filter(function(i){return i.id===id&&i.size===size&&i.color===color})[0];if(f)f.qty+=q;else cart.push({id:id,size:size,color:color,qty:q});save();toast('Added to bag 🛍️')}
function lineHTML(i,x){var p=byId[i.id];return '<div class="ci"><img src="'+p.img+'" alt="'+p.name+'"><div><h4><a href="'+p.id+'.html">'+p.name+'</a></h4><small>Size '+i.size+' · '+i.color+'</small><div class="q"><button data-a="m" data-i="'+x+'">−</button><span>'+i.qty+'</span><button data-a="p" data-i="'+x+'">+</button></div></div><div style="text-align:right"><b>'+rs(p.price*i.qty)+'</b><br><button class="rm" data-a="r" data-i="'+x+'" aria-label="Remove"><i class="fa-regular fa-trash-can"></i></button></div></div>'}
function drawer(){var b=$('#dbody');b.innerHTML=cart.length?cart.map(lineHTML).join(''):'<p class="empty">Your bag is empty.<br><a href="shop.html">Start shopping</a></p>';$('#dsub').textContent=rs(sub())}
document.addEventListener('click',function(e){var b=e.target.closest('[data-a]');if(!b)return;var i=+b.dataset.i,a=b.dataset.a;if(a==='p')cart[i].qty++;if(a==='m'){cart[i].qty--;if(cart[i].qty<1)cart.splice(i,1)}if(a==='r')cart.splice(i,1);save()});
function op(el,on){el.classList.toggle('on',on)}
$('#cbtn').onclick=function(){op($('#drw'),1);op($('#dbg'),1)};$('#dx').onclick=$('#dbg').onclick=function(){op($('#drw'),0);op($('#dbg'),0)};
// wishlist
document.addEventListener('click',function(e){var b=e.target.closest('.wl');if(!b)return;e.preventDefault();var id=b.dataset.id,i=wl.indexOf(id);if(i>-1){wl.splice(i,1);toast('Removed from wishlist')}else{wl.push(id);toast('Saved to wishlist ♡')}save()});
// search
var sov=$('#sov'),sin=$('#sin');$('#sbtn').onclick=function(){op(sov,1);setTimeout(function(){sin.focus()},100)};$('#sx').onclick=function(){op(sov,0)};
function pc(p){return '<article class="pc"><a href="'+p.id+'.html" class="pi"><img src="'+p.img+'" alt="'+p.name+'"><img class="h" src="'+p.img2+'" alt=""></a><button class="wl" data-id="'+p.id+'" aria-label="Wishlist"><i class="fa-regular fa-heart"></i></button><div class="pt"><small>'+CATS[p.cat]+'</small><h3><a href="'+p.id+'.html">'+p.name+'</a></h3><div class="pr"><b>'+rs(p.price)+'</b><s>'+rs(p.mrp)+'</s></div></div></article>'}
sin.oninput=function(){var q=sin.value.toLowerCase().trim(),r=q?P.filter(function(p){return (p.name+' '+CATS[p.cat]).toLowerCase().indexOf(q)>-1}).slice(0,8):[];$('#sres').innerHTML=q&&!r.length?'<p class="empty">No results found.</p>':r.map(pc).join('');upd()};
// quick add
$$('.qa').forEach(function(b){b.onclick=function(){var p=byId[b.dataset.id],s='';p.sizes.forEach(function(z,i){s+='<button class="sz'+(i===1?' on':'')+'" data-v="'+z+'">'+z+'</button>'});$('#qb').innerHTML='<button class="x" id="qx">×</button><h3>'+p.name+'</h3><div class="pr" style="margin:6px 0 14px"><b>'+rs(p.price)+'</b><s>'+rs(p.mrp)+'</s></div><h4 style="margin-bottom:8px">Select size</h4><div id="qs">'+s+'</div><button class="btn full" id="qadd" style="margin-top:14px">Add to Bag</button>';op($('#qm'),1);
 $$('#qs .sz').forEach(function(z){z.onclick=function(){$$('#qs .sz').forEach(function(x){x.classList.remove('on')});z.classList.add('on')}});$('#qx').onclick=function(){op($('#qm'),0)};$('#qadd').onclick=function(){add(p.id,$('#qs .on').dataset.v,p.colors[0],1);op($('#qm'),0);op($('#drw'),1);op($('#dbg'),1)}}});
$('#qm').onclick=function(e){if(e.target.id==='qm')op($('#qm'),0)};
// product page
var pd=$('.pd');if(pd){var p=byId[pd.dataset.id],qv=$('#qv');
 function one(sel){$$(sel).forEach(function(b){b.onclick=function(){$$(sel).forEach(function(x){x.classList.remove('on')});b.classList.add('on')}})}one('#szs .sz');one('#cls .cl');
 $$('.th').forEach(function(t){t.onclick=function(){$$('.th').forEach(function(x){x.classList.remove('on')});t.classList.add('on');$('#mimg').src=t.dataset.src}});
 $('#qp').onclick=function(){qv.value=+qv.value+1};$('#qm_').onclick=function(){qv.value=Math.max(1,+qv.value-1)};
 $('#addc').onclick=function(){add(p.id,$('#szs .on').dataset.v,$('#cls .on').dataset.v,+qv.value);op($('#drw'),1);op($('#dbg'),1)}}
// filters (shop + category pages)
var grid=$('#grid');if(grid){var cards=$$('.pc',grid),fs=$('#fs'),fp=$('#fp'),fo=$('#fo'),q=new URLSearchParams(location.search);if(q.get('sort'))fo.value=q.get('sort');
 function flt(){var t=fs.value.toLowerCase(),r=fp.value.split('-'),n=0;cards.forEach(function(c){var pr=+c.dataset.price,ok=(!t||c.dataset.name.indexOf(t)>-1)&&(!fp.value||(pr>=+r[0]&&pr<=+r[1]));c.style.display=ok?'':'none';if(ok)n++});
  var s=fo.value,arr=cards.slice();if(s==='low')arr.sort(function(a,b){return a.dataset.price-b.dataset.price});if(s==='high')arr.sort(function(a,b){return b.dataset.price-a.dataset.price});if(s==='new')arr.sort(function(a,b){return b.dataset.new-a.dataset.new});if(s)arr.forEach(function(c){grid.appendChild(c)});
  $('#fcount').textContent=n+' products';$('#empty').hidden=n>0}
 [fs,fp,fo].forEach(function(x){x.oninput=flt});flt()}
// hero + countdown
var sl=$$('.sl'),dt=$$('#dots button'),ix=0;if(sl.length){function go(n){sl[ix].classList.remove('on');dt[ix].classList.remove('on');ix=n;sl[ix].classList.add('on');dt[ix].classList.add('on')}dt.forEach(function(d,i){d.onclick=function(){go(i)}});setInterval(function(){go((ix+1)%sl.length)},5500)}
if($('#cd')){var end=localStorage.getItem('al_end');if(!end||+end<Date.now()){end=Date.now()+5*864e5;localStorage.setItem('al_end',end)}
 setInterval(function(){var d=Math.max(0,end-Date.now()),z=function(n){return String(n).padStart(2,'0')};$('#cdd').textContent=z(Math.floor(d/864e5));$('#cdh').textContent=z(Math.floor(d%864e5/36e5));$('#cdm').textContent=z(Math.floor(d%36e5/6e4));$('#cds').textContent=z(Math.floor(d%6e4/1e3))},1000)}
// cart / checkout / wishlist pages
function pages(){var cl=$('#cartlist');if(cl)cl.innerHTML=cart.length?cart.map(lineHTML).join(''):'<p class="empty">Your bag is empty. <a href="shop.html">Continue shopping</a></p>';
 var T=totals();['s1','s2','s3','s4'].forEach(function(id,i){var e=$('#'+id);if(e)e.textContent=[rs(T.s),T.sh?rs(T.sh):'Free','−'+rs(T.d),rs(T.t)][i]});
 var cs=$('#cosum');if(cs)cs.innerHTML=cart.length?cart.map(function(i){var p=byId[i.id];return '<div class="rw"><span>'+p.name+' ('+i.size+') × '+i.qty+'</span><b>'+rs(p.price*i.qty)+'</b></div>'}).join(''):'<p class="empty">Bag is empty. <a href="shop.html">Shop now</a></p>';
 var wg=$('#wgrid');if(wg){var items=wl.map(function(id){return byId[id]}).filter(Boolean);wg.innerHTML=items.map(pc).join('');$('#wempty').hidden=items.length>0}}
var ca=$('#capply');if(ca)ca.onclick=function(){var v=$('#coupon').value.trim().toUpperCase();if(v==='FIRST10'||v==='FESTIVE40'){coupon=v;localStorage.setItem('al_cp',v);toast('Coupon applied 🎉')}else toast('Invalid coupon code');upd()};
var cf=$('#cof');if(cf)cf.onsubmit=function(e){e.preventDefault();if(!cart.length){toast('Your bag is empty');return}var d=new FormData(cf),T=totals(),m='*New Order – Aaliya Fashion*\n\n';cart.forEach(function(i){var p=byId[i.id];m+='• '+p.name+' | '+i.size+' | '+i.color+' × '+i.qty+' = '+rs(p.price*i.qty)+'\n'});
 m+='\nSubtotal: '+rs(T.s)+'\nDiscount: '+rs(T.d)+'\nShipping: '+(T.sh?rs(T.sh):'Free')+'\n*Total: '+rs(T.t)+'*\n\nName: '+d.get('name')+'\nPhone: '+d.get('phone')+'\nAddress: '+d.get('address')+', '+d.get('city')+', '+d.get('state')+' - '+d.get('pin')+'\nPayment: '+d.get('pay');
 window.open('https://wa.me/918999999999?text='+encodeURIComponent(m),'_blank');cart=[];save();toast('Order sent on WhatsApp! 🎉')};
$$('form[data-wa]').forEach(function(f){f.addEventListener('submit',function(e){e.preventDefault();var d=new FormData(f),s='*'+f.dataset.wa+' – Aaliya*\n';d.forEach(function(v,k){if(v)s+=k+': '+v+'\n'});window.open('https://wa.me/918999999999?text='+encodeURIComponent(s),'_blank')})});
$('#nlf').onsubmit=function(e){e.preventDefault();toast('Thanks! Use FIRST10 for 10% off');e.target.reset()};
upd();
})();
