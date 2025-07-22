function displayPoem(response) {
    new Typewriter('#poem', {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}

function generatePoem(event) {
    event.preventDefault();

    let topicInputElement = document.querySelector("#topicInput");
    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");

    // Vis "Generating poem..." før API-kall
    poemElement.innerHTML = "<div class='blink'>⏳ Generating poem...";

    let apiKey = "4f3064df1bof6a9et5e31fd7aa251457";
    let prompt = "User instructions: Generate a poem about " + topicInputElement.value;
    let context = "You are a poet. Write a creative and engaging poem based on the given topic. Make it maximum 100 words long and seperate the lines with <br> tags. Sign the poem with 'AI Poem Generator' inside a <strong> element at the bottom.";
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
