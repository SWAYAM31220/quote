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
  // Get the text to be copied
  const quoteText = quoteContainer.textContent;

  // Attempt to copy the text to the clipboard
  navigator.clipboard.writeText(quoteText)
    .then(() => {
      // Text copied successfully, update message element
      const messageElement = document.getElementById("copy-that");
      if (messageElement) { // Check if message element exists
        messageElement.textContent = "Text copied!";
        
        // Optionally, hide the message after a few seconds
        setTimeout(() => {
          messageElement.textContent = "";
        }, 2000); // Hide after 2 seconds (adjust as needed)
      } else {
        console.log("Message element not found. Add an element with id='copy-message' for display.");
      }
    })
    .catch(err => {
      console.error('Failed to copy: ', err);
      // Handle potential errors (optional)
    });
}

copyIcon.addEventListener("click", copyText);

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);
