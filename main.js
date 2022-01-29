const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
    loop: true,
    delay:75
});

typewriter
    .typeString('¡Visitanos! somos expertos en equipo medico')
    .pauseFor(200)
    .start();