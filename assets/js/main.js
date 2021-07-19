/* SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    reset: true
});

sr.reveal(`.title_about, .img-about,
            .description_about, .title-body, .container-type-services, .card-bg-burger, .card-bg-beer, .footer-container`, {
    interval: 200
})
// ANIMATION TYPED TEXT
var typed = new Typed(".typing",{
    strings: ["19:00 a 00:00"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})