import { gsap, Back, Power0 } from "gsap";
import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

//mobile nav menu
const menuToggleBtn = document.getElementById('navbar-mobile-toggle');
const menu = document.getElementById("navbar-mobile");
const on = (e, type, listener) => e.addEventListener(type,listener);

on(menuToggleBtn, 'click', () => {
  if(menu.classList.contains('opacity-0')) {
    menu.classList.remove('opacity-0', 'pointer-events-none', 'z-0');
    menu.classList.add('opacity-1', 'pointer-events-auto', 'z-30');
  } else if(menu.classList.contains('opacity-1')) {
    menu.classList.remove('opacity-1', 'pointer-events-auto', 'z-30');
    menu.classList.add('opacity-0', 'pointer-events-none', 'z-0');
  } else {
    console.log('nothing');
  }
});


//section fade in on scroll
const scrollOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.7
};

function scrollDownObserver(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.replace('fade-out', 'fade-in');
    }
  });
}

const fadeItems = document.querySelectorAll('.fade-element');
const observer = new IntersectionObserver(scrollDownObserver, scrollOptions);

fadeItems.forEach(e => observer.observe(e));

//svg image animations

const glowTL = gsap.timeline({
      defauts: {
        duration: .5, 
        ease: Back.easeInOut.config(1),
        opacity: 0
      }
    });

const lineTL = gsap.timeline({
      defauts: {
        duration: .55, 
        ease: Power0.easeOut,
        opacity: 0,
        scaleX: 1,
      }
    });

const dotsTL = gsap.timeline({
  defauts: {
    duration: .5, 
    ease: Back.easeInOut.config(1),
    opacity: 0,
    scale: 1,
  }
});

glowTL.from('#outmost', {delay:0, scaleX:0, transformOrigin:"left", opacity: 1, duration:.25})
  .from('#inner', {delay:0.15, scaleX:0, transformOrigin:"left", opacity: 1, duration:.25})
  .from('#inmost', {delay:0.30, scaleX:0, transformOrigin:"left", opacity: 1, duration:.25});

lineTL.from('#line', {scaleX: 0, opacity: 1, duration:.5, delay:.55});

dotsTL.from('#circle-start', {opacity: 1, scale:0, transformOrigin:"bottom", duration:.3, delay: .65})
.from('#text-start', {opacity: 1, scale:0, transformOrigin:"bottom 50%", duration:.2})
.from('#circle-plan', {opacity: 1, scale:0, transformOrigin:"bottom", duration:.3, delay: .5})
.from('#text-plan', {opacity: 1, scale:0, transformOrigin:"bottom 50%", duration:.2})
.from('#circle-code', {opacity: 1, scale:0, transformOrigin:"bottom", duration:.3, delay: .5})
.from('#text-code', {opacity: 1, scale:0, transformOrigin:"bottom 50%", duration:.2})
.from('#circle-qa', {opacity: 1, scale:0, transformOrigin:"bottom", duration:.3, delay: .5})
.from('#text-qa', {opacity: 1, scale:0, transformOrigin:"bottom 50%", duration:.2})
.from('#circle-launch', {opacity: 1, scale:0, transformOrigin:"bottom", duration:.3, delay: .5})
.from('#text-launch', {opacity: 1, scale:0, transformOrigin:"bottom 50%", duration:.2})
.from('#circle-win', {opacity: 1, scale:0, transformOrigin:"bottom", duration:.3, delay: .5})
.from('#text-win', {opacity: 1, scale:0, transformOrigin:"bottom 50%", duration:.2});
// tl.from(line, {
//   width: '100%',
//   duration: 3
// });