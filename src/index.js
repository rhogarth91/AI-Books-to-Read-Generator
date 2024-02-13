function generateBookSuggestion() {
  let apiKey = "74a685e33bd3f486faa1o3tac33e021d";
  let context = "Please be polite and provide a short answer.";
  let prompt =
    "Please tell me what books I should read based on the key wrods entered. Can these suggestions be limited to three books. Please provide the book title and authors name";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
}

let waitingMessage = document.querySelector("#book-suggestion");
waitingMessage.innerHTML =
  "Please wait bookworm...... generating some suggestions for you now!";

let bookFormElement = document.querySelector("#book-suggestion-form");
bookFormElement.addEventListener("submit", generateBookSuggestion);
