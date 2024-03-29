let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");
const container = document.querySelector(".container");
const quoteContainer = document.querySelector(".container p");
const url = "https://api.quotable.io/random";

let getQuote = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      quote.innerText = item.content;
      author.innerText = item.author;
    });
};
function copyText() {
    const quoteText = quoteContainer.textContent;
    navigator.clipboard.writeText(quoteText);
}

copyIcon.addEventListener("click", copyText);

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);
