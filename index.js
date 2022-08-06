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

const tvTimeline = gsap.timeline({
    repeat: -1
})

// Selectionner les ID
// Yeux
const eyeballs = document.querySelectorAll('path#ball, path#ball_2, path#ball_3, path#ball_4, path#ball_5, path#ball_6');
// Chapeau
const hat = document.querySelector('g#hat')

// Bras

const leftArm = document.querySelector('g#left-arm')
const rightArm = document.querySelector('g#right-arm')

// TvLight

const tvLight = document.querySelector('g#tv-light')
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

let o = .25

tvTimeline
.set(tvLight, {opacity: o})
.to(tvLight, {opacity: 1, duration: 1, delay: .5})
.to(tvLight, {opacity: o})
.to(tvLight, {opacity: 0.5, duration: .4, delay: .5 })
.to(tvLight, {opacity: o})
    

// Lorsque je hover dessus, je prends l'attribut des liens de svg

const label = document.querySelector('div.label');
const links = document.querySelectorAll('svg a');

links.forEach(link => {

    link.addEventListener('mouseenter', function(){
        label.classList.add('is-visible')
        label.innerHTML = link.getAttribute('data-label');
        gsap.to(links, {opacity: .25})
        gsap.to(link, {opacity: 1})
    })

    link.addEventListener('mouseleave', function(){
        label.classList.remove('is-visible')
        label.innerHTML = 'Leaved';
        gsap.to(links, {opacity: 1})
    })
})


// SUR le mouvement de la souris le positionnement du label changera en pixel

document.addEventListener('mousemove', function(event) {
    label.style.left = `${event.clientX}px`;
    label.style.top = `${event.clientY}px`;
})