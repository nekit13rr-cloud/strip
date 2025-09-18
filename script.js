// Калькулятор дохода
function calculateIncome() {
  const hours = parseInt(document.getElementById('hours').value) || 0;
  const hourlyRate = parseInt(document.getElementById('hourlyRate').value) || 0;
  const tariff = parseFloat(document.getElementById('tariff').value);
  const result = (hours * hourlyRate) * (1 - tariff);

  document.getElementById('result').textContent = result.toLocaleString('ru-RU') + ' ₽';
}

// Прокрутка к началу при клике на логотип
document.getElementById('logoLink').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Анимация появления блоков
const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.feature-card, .benefit-card, .tariff-card').forEach(card => {
  observer.observe(card);
});

// Плавная прокрутка для навигации
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Инициализация калькулятора при загрузке
document.addEventListener('DOMContentLoaded', calculateIncome);
