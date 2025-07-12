function showQuote() {
  const quotes = [
    "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.",
    "If you want to shine like a sun, first burn like a sun.",
    "Excellence happens not by accident. It is a process.",
    "Let us sacrifice our today so that our children can have a better tomorrow.",
    "All of us do not have equal talent. But, all of us have an equal opportunity to develop our talents."
  ];

  const quoteEl = document.getElementById("quote");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteEl.style.opacity = 0;
  
  setTimeout(() => {
    quoteEl.textContent = quotes[randomIndex];
    quoteEl.style.opacity = 1;
  }, 300);
}
