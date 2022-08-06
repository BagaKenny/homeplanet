// Timeline pour les yeux
const eyesTimeline = gsap.timeline({
  // Mettre -1 pour repeat à l'infini
  repeat: -1,
});

// Hat Timeline
const hatTimeline = gsap.timeline({
  repeat: -1,
  repeatDelay: 4,
});

// Arms Timeline
const leftTimeline = gsap.timeline({
  repeat: -1,
});

const rightTimeline = gsap.timeline({
  repeat: -1,
});

// TV Timeline

const tvTimeline = gsap.timeline({
  repeat: -1,
});

// Story Timeline

const storyTimeline = gsap.timeline();

// Parrallax Timeline

const parrallaxTimeline = gsap.timeline();

// Selectionner les ID
// Yeux
const eyeballs = document.querySelectorAll(
  "path#ball, path#ball_2, path#ball_3, path#ball_4, path#ball_5, path#ball_6"
);
// Chapeau
const hat = document.querySelector("g#hat");

// Bras

const leftArm = document.querySelector("g#left-arm");
const rightArm = document.querySelector("g#right-arm");

// TvLight

const tvLight = document.querySelector("g#tv-light");

// Pick mon Header

const header = document.querySelector("header");
// Animer avec Timeline

eyesTimeline
  .set(eyeballs, { y: 0 })
  .to(eyeballs, { y: 7, duration: 0.15, delay: 1, stagger: 0.5 })
  .to(eyeballs, { y: 0, duration: 0.25, delay: 2 });

hatTimeline
  .set(hat, { y: 0 })
  .to(hat, { y: -50, rotation: -10, duration: 0.2, delay: 2 })
  .to(hat, { y: 0, rotation: 0, duration: 0.5, delay: 0.1 });

leftTimeline
  .set(leftArm, { rotation: 0 })
  .to(leftArm, { rotation: 20, duration: 1, delay: 2 })
  .to(leftArm, { rotation: 0 });

rightTimeline
  .set(rightArm, { rotation: 0 })
  .to(rightArm, { rotate: -20, duration: 1, delay: 1 })
  .to(rightArm, { rotation: 0 });

let o = 0.25;

tvTimeline
  .set(tvLight, { opacity: o })
  .to(tvLight, { opacity: 1, duration: 1, delay: 0.5 })
  .to(tvLight, { opacity: o })
  .to(tvLight, { opacity: 0.5, duration: 0.4, delay: 0.5 })
  .to(tvLight, { opacity: o });

// Lorsque je hover dessus, je prends l'attribut des liens de svg

const label = document.querySelector("div.label");
const links = document.querySelectorAll("svg a");

links.forEach((link) => {
  link.addEventListener("mouseenter", function () {
    label.classList.add("is-visible");
    label.innerHTML = link.getAttribute("data-label");
    gsap.to(links, { opacity: 0.25 });
    gsap.to(link, { opacity: 1 });
  });

  link.addEventListener("mouseleave", function () {
    label.classList.remove("is-visible");
    label.innerHTML = "Leaved";
    gsap.to(links, { opacity: 1 });
  });
});

// SUR le mouvement de la souris le positionnement du label changera en pixel

document.addEventListener("mousemove", function (event) {
  label.style.left = `${event.clientX}px`;
  label.style.top = `${event.clientY}px`;
});

// Story

gsap.set("section.house", { opacity: 0 });
gsap.set("section.scene", { opacity: 0 });
gsap.set("section.scene img", {
  x: (index) => {
    return `${index * 50 + 300}vh`;
  },
});

storyTimeline
  .to("header", { opacity: 0, delay: 3 })
  .addLabel("startScene")
  .to("section.scene", { opacity: 1 }, "startScene")
  .to(
    "section.scene img",
    { x: "0vh", duration: 10, ease: "linear" },
    "startScene"
  )
  .addLabel("endScene")
  .to("section.scene", { opacity: 0 }, "endScene")
  .to("section.house", { opacity: 1 }, "endScene");

storyTimeline.pause();

// Optimize for Processing

let update;

window.addEventListener("scroll", function () {
  // pageYOffset
  const pixels = window.pageYOffset;
  const currentTime = pixels / 300;

  cancelAnimationFrame(update);

  // requestAnimationFrame La fonction contenant l'animation doit être appelée avant que le navigateur n'effectue un nouveau rafraîchissement .

  update = this.requestAnimationFrame(function () {
    // Seek Gsap Saute à une heure (ou à une étiquette) spécifique sans affecter si l'instance est en pause ou inversée.
    storyTimeline.seek(currentTime);
  });
});
