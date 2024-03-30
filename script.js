let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");
const container = document.querySelector(".container");
const quoteContainer = document.querySelector(".container p");
const url = "https://api.quotable.io/random";
const downloadLink = document.getElementById("downloadLink");

let getQuote = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      quote.innerText = item.content;
      author.innerText = item.author;
    });
};

const textContainer = document.getElementById("textContainer");

downloadLink.addEventListener("click", function () {
  html2canvas(document.getElementById("quote"), {
    backgroundcolour: 'rgba(255, 0, 0)';
    scale: 3,
    onrendered: function (canvas) {
      const screenshot = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = screenshot;
      link.download = "text_screenshot.png"; // Set your desired filename
      link.click();
    },
  });
});

function copyText() {
  const quoteText = quoteContainer.textContent;
  navigator.clipboard.writeText(quoteText);
}

copyIcon.addEventListener("click", copyText);

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);
