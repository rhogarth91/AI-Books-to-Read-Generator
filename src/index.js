function showBooks(response) {
  new Typewriter("#book-suggestion", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 50,
  });
}

function generateBookSuggestion(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-input");
  let apiKey = "74a685e33bd3f486faa1o3tac33e021d";
  let context =
    "Please tell me what books I should read as you are a book expert and love books. Can you generate three book suggestions following the user instructions. Please provide the book title and authors name for each of the three suggestions";
  let prompt = `User Instructions: Please generate a book suggestion based on the ${instructionsInput.value}. Please be polite and provide a short answer.`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let waitingMessage = document.querySelector("#book-suggestion");
  waitingMessage.innerHTML =
    "Please wait bookworm...... generating some suggestions for you now!";

  axios.get(apiUrl).then(showBooks);
}

let bookFormElement = document.querySelector("#book-suggestion-form");
bookFormElement.addEventListener("submit", generateBookSuggestion);
