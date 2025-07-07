function showWish() {
  const messages = [
    "🌸 Chúc em ngày mới vui vẻ, luôn cười thật tươi nhé!",
    "☀️ Mỗi ngày bên em đều là một ngày tuyệt vời.💕",
    "🍀 Chúc em lúc nào cũng xinh đẹp và hạnh phúc như bây giờ.",
    "💕 Chỉ cần em vui, anh cũng vui.",
    "🌟 Anh chúc công chúa của anh luôn rạng rỡ như ánh nắng.",
    "☁️ Chúc em một ngày nhẹ nhàng, không buồn, không lo.",
    "🎵 Anh chúc trái tim bé nhỏ của em luôn ấm áp.",
    "🍫 Chúc cô bé ngọt ngào của anh luôn hạnh phúc như kẹo.",
    "🐻 Chúc gấu nhỏ của anh luôn được yêu thương thật nhiều."
  ];

  const randomIndex = Math.floor(Math.random() * messages.length);
  const message = document.getElementById("loveMessage");
  message.innerText = messages[randomIndex];

  // Phát nhạc nền
  const bgMusic = document.getElementById("bgMusic");
  bgMusic.play();
}

