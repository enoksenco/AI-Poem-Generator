function generatePoem(event) {
    event.preventDefault();

new Typewriter('#poem', {
  strings: ['Let the stars guide your way,', 
            'As you wander through the night,', 
            'In the silence, find your peace,', 
            'And let your dreams take flight.'],
  autoStart: true,
  delay: 1, 
  cursor: "",
    });
} 

let poemFormElement = document.querySelector("#poem-form")
poemFormElement.addEventListener("submit", generatePoem);