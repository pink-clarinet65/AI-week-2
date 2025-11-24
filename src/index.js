function displayQuote(response) {
  console.log("Quote generated");

  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "7482b6ta250748o436a7585c26ecf30b";
  let prompt = `User instructions: Generate a quote about $(instructionsInput.value)`;
  let context =
    "You are a knowledgable quote expert. Your mission is to generate a short and simple quote in basic HTML without backticks. Make sure to base the quote on the user instructions.";

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating quote");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayQuote);
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
