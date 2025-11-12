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
  .to(sabre, { y: -1050 }, 0.5);

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
const scrollContainer = document.querySelector(".scroll-container");
const scrollHorizontal = document.querySelector(".scroll-horizontal");

if (scrollContainer && scrollHorizontal) {
  const scrollWidth = scrollHorizontal.scrollWidth;
  const viewportWidth = window.innerWidth;
  const distance = Math.max(scrollWidth - viewportWidth, 0);

  // on fixe la hauteur du container pour avoir assez de scroll vertical
  gsap.set(scrollContainer, { height: "100vh" });

  gsap.to(scrollHorizontal, {
    x: () => distance, // défile vers la droite
    ease: "none",
    scrollTrigger: {
      trigger: scrollContainer,
      start: "top top",
      end: () => `+=${distance}`,
      scrub: true,
      pin: true,
      anticipatePin: 1,
    },
  });
}
