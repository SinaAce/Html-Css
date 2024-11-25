// گرفتن المنت‌های همبرگر و منو
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

// افزودن Event Listener برای کلیک روی همبرگر
hamburger.addEventListener('click', () => {
    console.log("1")
    menu.classList.toggle('show'); // نمایش یا پنهان کردن منو
});