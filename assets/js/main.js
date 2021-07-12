/* SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    reset: true
});

sr.reveal(`.title_about, .img_about,
            .description_about, .title-body, .container-type-services, .card-bg-burger, .card-bg-beer, .footer-container`, {
    interval: 200
})