const quotes = [
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  "The way to get started is to quit talking and begin doing. - Walt Disney",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt"
];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function startTest() {
  const quote = getRandomQuote();
  document.getElementById("quote").textContent = quote;
  document.getElementById("input").value = "";
  document.getElementById("result").textContent = "";

  const startTime = new Date().getTime();

  document.getElementById("input").addEventListener("input", function() {
    const typedText = this.value;
    if (typedText.trim() === quote) {
      const endTime = new Date().getTime();
      const totalTime = (endTime - startTime) / 1000; // in seconds
      const wpm = Math.round((quote.split(" ").length / totalTime) * 60);
      document.getElementById("result").textContent = `Congratulations! Your typing speed is ${wpm} words per minute.`;
    }
  });
}
