function generatePoemOutput(event) {
    event.preventDefault();

new Typewriter('#poemOutput', {
  strings: ['Let the stars guide your way,', 
            'As you wander through the night,', 
            'In the silence, find your peace,', 
            'And let your dreams take flight.'],
  autoStart: true,
  delay: 1, 
  cursor: "",
    });
} 

let topicInputElement = document.querySelector("#topicInput")
topicInputElement.addEventListener("submit", generatePoemOutput);