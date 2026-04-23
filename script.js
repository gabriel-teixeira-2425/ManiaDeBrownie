// script.js

// ---------- DADOS ----------
const flavors = [
  {
    title: "O AUTÊNTICO:",
    highlight: "BROWNIE TRADICIONAL",
    description: "A experiência pura do nosso chocolate nobre em uma massa ultra molhadinha.",
    price: "R$ 5,00",
    image: "https://placehold.co/500x500/42160B/DEA85C?text=Tradicional",
    whatsappLink: "https://wa.me/558594116448?text=Ola!%20Vi%20no%20site%20e%20quero%20o%20Brownie%20Tradicional!"
  },
  {
    title: "A PAIXÃO:",
    highlight: "BROWNIE DE BRIGADEIRO",
    description: "A união irresistível entre a nossa massa e um brigadeiro artesanal cremoso.",
    price: "R$ 6,00",
    image: "https://placehold.co/500x500/42160B/DEA85C?text=Brigadeiro",
    whatsappLink: "https://wa.me/558594116448?text=Preciso%20do%20Brownie%20de%20Brigadeiro!"
  },
  {
    title: "O QUERIDINHO:",
    highlight: "BROWNIE DE NINHO",
    description: "Massa intensa recheada com um creme de Ninho suave que derrete na boca.",
    price: "R$ 6,00",
    image: "https://placehold.co/500x500/42160B/DEA85C?text=Ninho",
    whatsappLink: "https://wa.me/558594116448?text=Quero%20garantir%20o%20meu%20Brownie%20de%20Ninho!"
  },
  {
    title: "A EXPLOSÃO:",
    highlight: "BROWNIE DE OREO",
    description: "A crocância do Oreo mergulhada em um recheio cremoso e nossa massa secreta.",
    price: "R$ 6,00",
    image: "https://placehold.co/500x500/42160B/DEA85C?text=Oreo",
    whatsappLink: "https://wa.me/558594116448?text=Quero%20o%20Brownie%20de%20Oreo!"
  },
  {
    title: "O CONFORTO:",
    highlight: "BROWNIE DE DOCE DE LEITE",
    description: "Recheio generoso de doce de leite premium. Aquele sabor que abraça o paladar.",
    price: "R$ 6,00",
    image: "https://placehold.co/500x500/42160B/DEA85C?text=Doce+de+Leite",
    whatsappLink: "https://wa.me/558594116448?text=Quero%20o%20Brownie%20de%20Doce%20de%20Leite!"
  },
  {
    title: "O TROPICAL:",
    highlight: "BROWNIE DE PRESTÍGIO",
    description: "A combinação clássica de coco fresco com chocolate nobre. Textura incrível.",
    price: "R$ 6,00",
    image: "https://placehold.co/500x500/42160B/DEA85C?text=Prestigio",
    whatsappLink: "https://wa.me/558594116448?text=Quero%20o%20Brownie%20de%20Prestigio!"
  },
  {
    title: "A CROCÂNCIA:",
    highlight: "BROWNIE DE OVOMALTINE",
    description: "Recheio intenso e crocante de Ovomaltine que traz um sabor único.",
    price: "R$ 6,00",
    image: "https://placehold.co/500x500/42160B/DEA85C?text=Ovomaltine",
    whatsappLink: "https://wa.me/558594116448?text=Quero%20o%20Brownie%20de%20Ovomaltine!"
  }
];

const feedbacksLTR = [
  "O melhor que já comi! A massa é surreal de molhadinha.",
  "Viciada nesse Ninho Cremoso... É um caminho sem volta!",
  "Simplesmente divino! O de Oreo é uma experiência.",
  "O ponto perfeito do chocolate. Nota 10!",
  "Gosto de infância com toque gourmet.",
  "Não existe brownie melhor!",
  "A casquinha crocante é o meu ponto fraco.",
  "O recheio de Nutella é generoso demais.",
  "Dá para ver que é feito com muito amor.",
  "Comprei para presente e a pessoa amou.",
];

const feedbacksRTL = [
  "Ingredientes de primeira. Vale cada centavo!",
  "O de Doce de Leite tem gosto de abraço.",
  "Já virei cliente fiel da Mania!",
  "Textura de outro planeta. Muito macio!",
  "O de Ovomaltine superou tudo.",
  "Melhor sobremesa de delivery da vida.",
  "O recheio de Prestígio é fresquinho.",
  "Sempre peço da Mania nos eventos.",
  "Bruna é um doce e o brownie é arte.",
  "Fã número 1 do tradicional!",
];

// ---------- FUNÇÕES AUXILIARES ----------
function createFlavorCard(flavor) {
  const card = document.createElement('div');
  card.className = 'flavor-card group';
  card.innerHTML = `
    <div class="rounded-3xl overflow-hidden aspect-square max-h-80 lg:max-h-none">
      <img src="${flavor.image}" alt="${flavor.highlight}" class="w-full h-full object-cover">
    </div>
    <div class="flex flex-col justify-center gap-5 lg:gap-6">
      <h3>${flavor.title} <span class="text-[#DEA85C]">${flavor.highlight}</span></h3>
      <p class="text-base lg:text-lg leading-relaxed opacity-95 text-white">
        ${flavor.description} Por apenas <strong class="text-[#DEA85C] font-bold">${flavor.price}</strong>.
      </p>
      <a href="${flavor.whatsappLink}" target="_blank" class="btn-card">QUERO ESTE SABOR</a>
    </div>
  `;
  return card;
}

function createFeedbackCard(text) {
  const div = document.createElement('div');
  div.className = 'feedback-card';
  div.innerHTML = `&ldquo;${text}&rdquo;`;
  return div;
}

// ---------- CARROSSEL ----------
let currentIndex = 0;
const track = document.getElementById('carousel-track');
const dotsContainer = document.getElementById('carousel-dots');
const prevBtn = document.getElementById('carousel-prev');
const nextBtn = document.getElementById('carousel-next');
const prevMobile = document.getElementById('carousel-prev-mobile');
const nextMobile = document.getElementById('carousel-next-mobile');
const wrapper = document.getElementById('carousel-wrapper');

function renderCarousel() {
  track.innerHTML = '';
  flavors.forEach(flavor => {
    const slide = document.createElement('div');
    slide.className = 'flex-shrink-0 w-full px-1 lg:px-2';
    slide.appendChild(createFlavorCard(flavor));
    track.appendChild(slide);
  });
  updateCarousel();
  renderDots();
}

function renderDots() {
  dotsContainer.innerHTML = '';
  flavors.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = `carousel-dot ${i === currentIndex ? 'active' : ''}`;
    dot.setAttribute('aria-label', `Ir para sabor ${i+1}`);
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });
}

function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
  document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentIndex);
  });
}

function goToSlide(index) {
  if (index < 0) index = flavors.length - 1;
  if (index >= flavors.length) index = 0;
  currentIndex = index;
  updateCarousel();
}

function nextSlide() { goToSlide(currentIndex + 1); }
function prevSlide() { goToSlide(currentIndex - 1); }

// Touch events
let touchStartX = 0;
let touchEndX = 0;
wrapper.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; });
wrapper.addEventListener('touchmove', e => { touchEndX = e.touches[0].clientX; });
wrapper.addEventListener('touchend', () => {
  const diff = touchStartX - touchEndX;
  if (Math.abs(diff) > 50) {
    diff > 0 ? nextSlide() : prevSlide();
  }
});

// Keyboard
window.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') prevSlide();
  if (e.key === 'ArrowRight') nextSlide();
});

// Buttons
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);
prevMobile.addEventListener('click', prevSlide);
nextMobile.addEventListener('click', nextSlide);

// ---------- FEEDBACKS ----------
function renderFeedbacks() {
  const trackLTR = document.getElementById('feedback-track-ltr');
  const trackRTL = document.getElementById('feedback-track-rtl');
  
  // Duplicar para scroll infinito
  const ltrItems = [...feedbacksLTR, ...feedbacksLTR];
  const rtlItems = [...feedbacksRTL, ...feedbacksRTL];
  
  ltrItems.forEach(text => trackLTR.appendChild(createFeedbackCard(text)));
  rtlItems.forEach(text => trackRTL.appendChild(createFeedbackCard(text)));
}

// ---------- HEADER SCROLL ----------
const header = document.getElementById('main-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ---------- MENU MOBILE ----------
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  mobileMenu.classList.toggle('open');
});
// Fechar ao clicar em link
document.querySelectorAll('.mobile-nav-link').forEach(link => {
  link.addEventListener('click', () => {
    menuToggle.classList.remove('active');
    mobileMenu.classList.remove('open');
  });
});

// ---------- INTERSECTION OBSERVER (fade-in) ----------
const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });
fadeElements.forEach(el => observer.observe(el));

// ---------- ANO ATUAL ----------
document.getElementById('current-year').textContent = new Date().getFullYear();

// ---------- INICIALIZAÇÃO ----------
renderCarousel();
renderFeedbacks();

// Smooth scroll para links internos (opcional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === "#" || href === "") return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});