const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
    loop: true,
    delay:75
});

typewriter
    .typeString('┬íVisitanos! somos expertos en equipo medico')
    .pauseFor(200)
    .start();