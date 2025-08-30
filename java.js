// Step 1: Store some quotes in an array
const quotes = [
  { text: "Success is not final, failure is not fatal.", author: "Winston Churchill" },
  { text: "Do what you can, with what you have.", author: "Theodore Roosevelt" },
  { text: "Happiness depends upon ourselves.", author: "Aristotle" },
  { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "A person is either a slave or a man of principle.", author: "Bhagat Singh" },
  { text: "Dream, dream, dream. Dreams transform into thoughts, and thoughts result in action.", author: "A. P. J. Abdul Kalam" },
  { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
  { text: "Arise, awake and stop not till the goal is reached.", author: "Swami Vivekananda" },
  { text: "You can't cross the sea merely by standing and staring at the water.", author: "Rabindranath Tagore" },
  { text: "Everything comes to us that belongs to us if we create the capacity to receive it.", author: "Rabindranath Tagore" },
  { text: "Growth is painful. Change is painful. But, nothing is as painful as staying stuck where you do not belong.", author: "N. R. Narayana Murthy" },
  { text: "If you want to shine like a sun, first burn like a sun.", author: "A.P.J. Abdul Kalam" },
  { text: "I slept and dreamt that life was joy. I awoke and saw that life was service. I acted and behold, service was joy.", author: "Rabindranath Tagore" },
  { text: "First they ignore you, then they laugh at you, then they fight you, then you win.", author: "Mahatma Gandhi" },
  { text: "The fragrance of flowers spreads only in the direction of the wind. But the goodness of a person spreads in all directions. ", author: "Chanakya" },
  { text: "And when all the wars are over, a butterfly will still be beautiful.", author: "Ruskin Bond" },
  { text: "If I cannot do great things, I can do small things in a great way.", author: "Martin Luther King, Jr." },
  { text: "The bad news is time flies. The good news is you're the pilot.", author: "Michael Altshuler" },
  { text: "You get what you give.", author: "Jennifer Lopez " }
  
];

// Step 2: Get elements from HTML
const quoteBox = document.querySelector(".quote"); // the <div class="quote">
const newBtn = document.getElementById("new_quote");
const copyBtn = document.getElementById("copy_quote");
const shareBtn = document.getElementById("share_quote");

// Step 3: Function to show a random quote
function showQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const currentQuote = quotes[randomIndex];

  // Put the quote inside the quoteBox
  quoteBox.textContent = `"${currentQuote.text}" - ${currentQuote.author}`;
}

// Step 4: Event listener for New Quote button
newBtn.addEventListener("click", showQuote);

// Step 5: Copy Quote button
copyBtn.addEventListener("click", () => {
  const textToCopy = quoteBox.textContent;
  navigator.clipboard.writeText(textToCopy)
    .then(() => alert("Quote copied to clipboard!"))
    .catch(() => alert("Copy failed!"));
});

// Step 6: Share Quote button (open Twitter)
shareBtn.addEventListener("click", () => {
  const textToShare = encodeURIComponent(quoteBox.textContent);
  window.open(`https://twitter.com/intent/tweet?text=${textToShare}`, "_blank");
});

// Step 7: Show one quote on page load
showQuote();
