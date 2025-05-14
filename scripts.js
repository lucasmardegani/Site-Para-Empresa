// Animação ao aparecer na tela
const myObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
});

const elements = document.querySelectorAll('.hidden');
elements.forEach((element) => myObserver.observe(element));

// Slider de imagens
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;
let currentIndex = 0;

// Botão próximo
document.querySelector('.next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider();
});

// Botão anterior
document.querySelector('.prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlider();
});

// Atualiza o slider
function updateSlider() {
  const offset = -currentIndex * 100;
  slides.style.transform = `translateX(${offset}%)`;
}

// Faz as imagens passarem automaticamente a cada 5 segundos
setInterval(() => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider();
}, 7000);
