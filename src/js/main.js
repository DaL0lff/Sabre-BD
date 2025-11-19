import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Elements
const montagneDevant = document.querySelector(".montagne_devant");
const montagneDerriere = document.querySelector(".montagne_derriere");
const h1 = document.querySelector("h1");
const montagneFond = document.querySelector(".montagne_fond");
const sabre = document.querySelector(".montagen_sabre");

// Montagne_03 disparait à gauche
gsap.to(montagneDevant, {
  x: -1500,
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
  x: 1500,
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom center",
    scrub: 1,
    markers: false,
  },
});

// Sabre monte : atteint -400 avant que montagne_01 se décale
gsap
  .timeline({
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "bottom center",
      scrub: 1,
      markers: false,
    },
  })
  .to(sabre, { y: -400 }, 0)
  .to(sabre, { y: -850 }, 0.5)
  .to(sabre, { y: -400 }, 1);

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

// scroll horizontal paysage vers la droite
const horizontalScroll = document.querySelector(".scroll-horizontal");
const scrollWidth = horizontalScroll.scrollWidth - window.innerWidth;

gsap.to(horizontalScroll, {
  x: -scrollWidth,
  ease: "none",
  scrollTrigger: {
    trigger: ".scroll-container",
    start: "top top",
    scrub: 1,
    pin: true,
    anticipatePin: 1,
  },
});

//paysage parte vers la gauche
const scrollMarche = document.querySelector(".scroll-marche");

gsap.to(scrollMarche, {
  x: -500, // vers la gauche, ajuste la valeur
  scrollTrigger: {
    trigger: ".scroll-jugement", // quand ce bloc arrive
    start: "top center", // ajuste le point de départ
    end: "bottom center",
    scrub: 1,
  },
});
