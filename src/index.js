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
    "Please tell me what books I should read as you are a book expert, you love books and are very well read. Can you generate three book suggestions using the user instructions. Please provide ONLY the book title and authors name for each of the three suggestions. Can the suggestions be in a list format, for example: 1. Book, 2. Book, 3 Book. The answer must be presented in basic HTML and separate each line with a <br />";
  let prompt = `User Instructions: Please generate a book suggestion based on the ${instructionsInput.value}.`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let waitingMessage = document.querySelector("#book-suggestion");
  waitingMessage.innerHTML =
    "Please wait bookworm...... generating some suggestions for you now!";

  axios.get(apiUrl).then(showBooks);
}

let bookFormElement = document.querySelector("#book-suggestion-form");
bookFormElement.addEventListener("submit", generateBookSuggestion);
