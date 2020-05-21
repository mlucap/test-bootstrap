var app = document.getElementById('typewriter');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Affordable')
    .pauseFor(2000)
    .deleteAll()
    .typeString('Lots of Features')
    .pauseFor(2000)
    .deleteAll()
    .typeString('24/7 Support')
    .pauseFor(2000)
    .deleteAll()
    .start();