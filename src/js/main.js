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
    end: "bottom bottom",
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
    end: "bottom bottom",
    scrub: 1,
    markers: false,
  },
});

// H1 monte et rétrécit beaucoup
gsap.to(h1, {
  y: -300,
  scale: 0.3,
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
    markers: false,
  },
});

// Montagne_01 monte
gsap.to(montagneFond, {
  y: -250,
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
    markers: false,
  },
});

// Sabre monte
gsap.to(sabre, {
  y: -200,
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: 1,
    markers: false,
  },
});
