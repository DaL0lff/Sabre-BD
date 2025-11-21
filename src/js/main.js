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
  x: "100%",
  ease: "power2.out",
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom center",
    scrub: 3,
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
  .to(montagneFond, { x: -2000 }, 0.2)
  .to(montagneFond, { x: -2000 }, 0.9);

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

// Timeline principale de scroll sabre
const timelineScroll = gsap.timeline({
  scrollTrigger: {
    trigger: ".scroll-container",
    start: "top top",
    scrub: 6,
    pin: true,
    anticipatePin: 2,
  },
});

// scroll horizontal paysage vers la droite
const horizontalScroll = document.querySelector(".scroll-horizontal");
const scrollMarche = document.querySelector(".scroll-marche");
const scrolljugement = document.querySelector(".scroll-jugement");
const scrolMarchelWidth = scrollMarche.scrollWidth - window.innerWidth;
const scrolljugementWidth = scrolljugement.scrollWidth - window.innerWidth;

timelineScroll.to(sabre, {
  y: -100,
  ease: "power2.out",
  duration: 60,
});

timelineScroll.to(horizontalScroll, {
  x: -scrolMarchelWidth,
  ease: "none",
  delay: 6,
});

timelineScroll.to(sabre, {
  opacity: 0,
  ease: "power2.out",
  duration: 25,
  delay: 30,
});

timelineScroll.to(horizontalScroll, {
  duration: 600,
  x: -horizontalScroll.scrollWidth + scrolMarchelWidth,
  ease: "none",
});

// Chute-sabre : tomber à travers .chute-univers
const chuteSabre = document.querySelector(".chute-sabre");
const chuteUnivers = document.querySelector(".chute-univers");

if (chuteSabre && chuteUnivers) {
  const fallDistance = (chuteUnivers.offsetHeight + 400) * 2.3;
  gsap.to(chuteSabre, {
    y: fallDistance,
    x: -200,
    opacity: 1,
    scrollTrigger: {
      trigger: ".chute-sabre",
      start: "top top",
      end: `+=${fallDistance}`,
      scrub: 8,
      markers: false,
    },
  });
} else if (chuteSabre) {
  // fallback: original behaviour if .chute-univers not present
  gsap.to(chuteSabre, {
    y: 1000,
    x: -200,
    opacity: 1,
    scrollTrigger: {
      trigger: ".chute-sabre",
      start: "top top",
      end: "+=500",
      scrub: 8,
      markers: false,
    },
  });
}

// Animations pour les astres dans .chute-univers
const chuteUniversEl = document.querySelector(".chute-univers");
if (chuteUniversEl) {
  const imgs = chuteUniversEl.querySelectorAll("img");
  // safeguard: on attend au moins 4 images (planete, astre_01, astre_02, astre_03)
  if (imgs.length >= 4) {
    const planete = imgs[0];
    const astre1 = imgs[1];
    const astre2 = imgs[2];
    const astre3 = imgs[3];

    const triggerSettings = {
      trigger: ".chute-univers",
      start: "top 80%",
      end: "bottom 60%",
      scrub: 1,
      markers: false,
    };

    // planete et astre_03 apparaissent depuis la gauche (accentué)
    gsap.from([planete, astre3], {
      x: -600,
      y: 40,
      scale: 0.6,
      opacity: 0,
      duration: 1.6,
      stagger: 0.35,
      ease: "back.out(1.7)",
      scrollTrigger: triggerSettings,
    });

    // astre_01 et astre_02 apparaissent depuis la droite (accentué)
    gsap.from([astre1, astre2], {
      x: 600,
      y: 40,
      scale: 0.6,
      opacity: 0,
      duration: 1.6,
      stagger: 0.35,
      ease: "back.out(1.7)",
      scrollTrigger: triggerSettings,
    });
  }
}
