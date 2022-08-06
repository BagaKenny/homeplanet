// Timeline pour les yeux
const eyesTimeline = gsap.timeline({
    // Mettre -1 pour repeat à l'infini
    repeat: -1,
});

const hatTimeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 4,
})

const leftTimeline = gsap.timeline({
    repeat: -1,
})

const rightTimeline = gsap.timeline({
    repeat: -1,
})


// Selectionner les ID
// Yeux
const eyeballs = document.querySelectorAll('path#ball, path#ball_2, path#ball_3, path#ball_4, path#ball_5, path#ball_6');
// Chapeau
const hat = document.querySelector('g#hat')

// Bras

const leftArm = document.querySelector('g#left-arm')
const rightArm = document.querySelector('g#right-arm')
// Animer avec Timeline

eyesTimeline
.set(eyeballs, {y: 0})
.to(eyeballs, {y: 7, duration: 0.15, delay: 1, stagger: .5})
.to(eyeballs, {y: 0, duration: .25, delay: 2})

hatTimeline
.set(hat, {y: 0})
.to(hat, {y: -50, rotation: -10, duration: 0.2, delay: 2})
.to(hat, {y: 0, rotation: 0, duration: .5, delay: .1})

leftTimeline
.set(leftArm, {rotation: 0})
.to(leftArm, {rotation: 20, duration: 1, delay: 2})
.to(leftArm, {rotation: 0})

rightTimeline
.set(rightArm, {rotation: 0})
.to(rightArm, {rotate: -20, duration: 1, delay: 1})
.to(rightArm, {rotation: 0})