const quotes = [
  "🌸 Bạn Đừng Buồn Nữa Nha",
  "🌈 Miệng thiên hạ là dao hai lưỡi",
  "☕ Đừng bận tâm nha cố lên đừng để ý lời nói của những người chê bay",
  "🕊️ Cảm xúc của bạn là hợp lý, dù có ai nói gì đi nữa.",
  "🌼 Bạn đủ tốt – và bạn luôn đủ đầy.",
  "🍀 Mỗi ngày là một cơ hội để bạn bắt đầu lại và yêu thương chính mình.",
  "Tác giả kêu là :  Yen Anh!"
];

function showHealing() {
  const quote = document.getElementById("quote");
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quote.style.opacity = 0;
  setTimeout(() => {
    quote.innerText = randomQuote;
    quote.style.opacity = 1;
  }, 300);
}
