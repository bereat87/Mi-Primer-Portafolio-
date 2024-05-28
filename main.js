
let app = document.getElementById('typewriter-text');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('Diseñadora y Desarrolladora Web Front-End')
  .pauseFor(200)
  .deleteChars(10)
  .start();
 
