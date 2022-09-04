window.sr = ScrollReveal({reset: true});

var slideUp = {
    distance: '150%',
    origin: 'bottom',
    opacity: null
};

sr.reveal('.card--1', {duration: 1500});

sr.reveal('.card--2', {rotate: {x: 0, y: 80, z:0}});

sr.reveal('.card--3', slideUp);

sr.reveal()

sr.reveal('.card--4', slideUp);