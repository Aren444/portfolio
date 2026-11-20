"use strict";
const menuButton=document.querySelector('.menu-toggle');
const navLinks=document.querySelector('#nav-links');
if(menuButton&&navLinks){
  const closeMenu=()=>{navLinks.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Open navigation menu');};
  menuButton.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Close navigation menu':'Open navigation menu');});
  navLinks.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
  document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu();});
  document.addEventListener('click',event=>{if(!menuButton.contains(event.target)&&!navLinks.contains(event.target))closeMenu();});
  window.addEventListener('resize',()=>{if(window.innerWidth>600)closeMenu();});
}
document.querySelectorAll('#year').forEach(el=>el.textContent=String(new Date().getFullYear()));
// Desktop pointer hover, while <details> provides tap/keyboard behavior.
document.querySelectorAll('.skills-popover').forEach(el=>{
  const fine=window.matchMedia('(hover: hover) and (pointer: fine)');
  el.addEventListener('mouseenter',()=>{if(fine.matches)el.open=true;});
  el.addEventListener('mouseleave',()=>{if(fine.matches&&!el.contains(document.activeElement))el.open=false;});
  el.addEventListener('keydown',e=>{if(e.key==='Escape'){el.open=false;el.querySelector('summary').focus();}});
});
// Optional figures are hidden only when missing; their content is not fabricated.
document.querySelectorAll('img[data-optional-image]').forEach(img=>{
  const fig=img.closest('figure');
  img.addEventListener('error',()=>{if(fig)fig.hidden=true;},{once:true});
});
// Avoid an empty audio control if user has not exported the MP3 yet.
document.querySelectorAll('audio').forEach(audio=>{
  audio.addEventListener('error',()=>{audio.hidden=true;},{once:true});
});
