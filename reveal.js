/* reveals on scroll — partagé par les 5 pages */
(function(){
var els=document.querySelectorAll('.card,.gacha,.sec,.temoi,.faq,.spirit,.hub a,.crest');
els.forEach(function(el,i){el.classList.add('rv');});
if(!('IntersectionObserver' in window)){els.forEach(function(el){el.classList.add('in');});return;}
var io=new IntersectionObserver(function(es){
es.forEach(function(e){
if(e.isIntersecting){
var sibs=Array.prototype.slice.call(e.target.parentNode.children);
var k=sibs.indexOf(e.target);if(k<0)k=0;
e.target.style.transitionDelay=Math.min(k*90,450)+'ms';
e.target.classList.add('in');io.unobserve(e.target);
}
});
},{threshold:.12,rootMargin:'0px 0px -6% 0px'});
els.forEach(function(el){io.observe(el);});
})();
