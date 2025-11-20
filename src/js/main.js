import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Elements
const montagneDevant = document.querySelector(".montagne_devant");
const montagneDerriere = document.querySelector(".montagne_derriere");
const h1 = document.querySelector("h1");
const montagneFond = document.querySelector(".montagne_fond");
const sabre = document.querySelector(".montagne_sabre");

// Montagne_03 disparait à gauche
gsap.to(montagneDevant, {
  x: -1800,
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom center",
    scrub: 1,
    markers: false,
  },
});

gsap.to(sabre, {
  x: "80%",
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom center",
    scrub: 1,
    markers: false,
  },
});

// Montagne_02 disparait à droite
gsap.to(montagneDerriere, {
  x: 1800,
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom center",
    scrub: 1,
    markers: false,
  },
});

// // Sabre monte : atteint -400 avant que montagne_01 se décale
// gsap
//   .timeline({
//     scrollTrigger: {
//       trigger: "body",
//       start: "top top",
//       end: "bottom center",
//       scrub: 1,
//       markers: false,
//     },
//   })
//   .to(sabre, { y: -400 }, 0)
//   .to(sabre, { y: -850 }, 0.5)
//   .to(sabre, { y: -400 }, 1);

// Montagne_01 monte pendant la première moitié, puis disparait à gauche
gsap
  .timeline({
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      markers: false,
    },
  })
  .to(montagneFond, { y: -100 }, 0)
  .to(montagneFond, { x: -2000 }, 0.2);

// H1 monte et rétrécit pendant la première moitié, puis monte au top
gsap
  .timeline({
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      markers: false,
    },
  })
  .to(h1, { y: -400, scale: 0.3 }, 0)
  .to(h1, { y: -800, scale: 0.2 }, 0.5);

const timelineScroll = gsap.timeline({
  scrollTrigger: {
    trigger: ".scroll-container",
    start: "top top",
    scrub: 6,
    pin: true,
    anticipatePin: 1,
  },
});

// scroll horizontal paysage vers la droite
const horizontalScroll = document.querySelector(".scroll-horizontal");
const scrollMarche = document.querySelector(".scroll-marche");
const scrolljugement = document.querySelector(".scroll-jugement");
const scrolMarchelWidth = scrollMarche.scrollWidth - window.innerWidth;
const scrolljugementWidth = scrolljugement.scrollWidth - window.innerWidth;

timelineScroll.to(sabre, {
  y: -400,
  ease: "none",
});

timelineScroll.to(horizontalScroll, {
  x: -scrolMarchelWidth,
  ease: "none",
  delay: 6,
});

timelineScroll.to(sabre, {
  y: 100,
  ease: "none",
  delay: 6,
});

timelineScroll.to(sabre, {
  opacity: 0,
  ease: "none",
  delay: 6,
});

timelineScroll.to(horizontalScroll, {
  duration: 7,
  x: -horizontalScroll.scrollWidth + scrolMarchelWidth,
  ease: "none",
});

// Chute-sabre : tomber à travers .chute-univers
const chuteSabre = document.querySelector(".chute-sabre");
const chuteUnivers = document.querySelector(".chute-univers");

if (chuteSabre && chuteUnivers) {
  const fallDistance = chuteUnivers.offsetHeight + 200;
  gsap.to(chuteSabre, {
    y: fallDistance,
    opacity: 1,
    scrollTrigger: {
      trigger: ".chute-univers",
      start: "top top",
      end: "bottom top",
      scrub: 8,
      markers: false,
    },
  });
} else if (chuteSabre) {
  // fallback: original behaviour if .chute-univers not present
  gsap.to(chuteSabre, {
    y: 500,
    opacity: 1,
    scrollTrigger: {
      trigger: ".chute-container-case",
      start: "top top",
      end: "bottom bottom",
      scrub: 8,
      markers: false,
    },
  });
}
