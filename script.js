// script.js — Mania de Brownie | Versão Final

"use strict";

// ================================================================
// 1. DADOS COM LINKAGEM DAS IMAGENS JÁ DEFINIDA
// ================================================================
// LISTA DE NOMES DAS IMAGENS PARA SALVAR:
//
// logo-brownie.png      -> Logo do site (ícone do círculo)
// hero-brownie.jpg      -> Hero principal (foto do brownie em destaque)
// bruna.jpg             -> Foto da Bruna (seção Sobre Mim)
// tradicional.jpg       -> Brownie Tradicional
// brigadeiro.jpg        -> Brownie de Brigadeiro
// ninho.jpg             -> Brownie de Ninho
// oreo.jpg              -> Brownie de Oreo
// prestigio.jpg         -> Brownie de Prestígio
// doce-de-leite.jpg     -> Brownie de Doce de Leite
// ovomaltine.jpg        -> Brownie de Ovomaltine
// ================================================================

const FLAVORS = [
  {
    label: "O Autêntico",
    title: "Brownie Tradicional",
    desc: "Massa molhadinha com chocolate nobre e casquinha crocante. O clássico que conquista.",
    price: "R$ 5,00",
    img: "./assets/tradicional.jpeg",
    link: "https://wa.me/558594116448?text=Ol%C3%A1!%20Vi%20no%20site%20o%20Brownie%20Tradicional%20e%20gostaria%20de%20encomendar!%20Tem%20dispon%C3%ADvel%3F",
  },
  {
    label: "A Paixão",
    title: "Brownie de Brigadeiro",
    desc: "Massa de chocolate meio amargo com brigadeiro artesanal cremoso e aveludado.",
    price: "R$ 6,00",
    img: "./assets/brigadeiro.jpeg",
    link: "https://wa.me/558594116448?text=Ol%C3%A1!%20Vi%20no%20site%20o%20Brownie%20de%20Brigadeiro%20e%20gostaria%20de%20encomendar!%20Tem%20dispon%C3%ADvel%3F",
  },
  {
    label: "O Queridinho",
    title: "Brownie de Ninho",
    desc: "Contraste perfeito: massa escura intensa com recheio cremoso de Leite Ninho.",
    price: "R$ 6,00",
    img: "./assets/ninho.jpg",
    link: "https://wa.me/558594116448?text=Ol%C3%A1!%20Vi%20no%20site%20o%20Brownie%20de%20Ninho%20e%20gostaria%20de%20encomendar!%20Tem%20dispon%C3%ADvel%3F",
  },
  {
    label: "A Explosão",
    title: "Brownie de Oreo",
    desc: "Massa molhadinha com recheio de baunilha e a crocância do biscoito Oreo.",
    price: "R$ 6,00",
    img: "./assets/oreo.jpg",
    link: "https://wa.me/558594116448?text=Ol%C3%A1!%20Vi%20no%20site%20o%20Brownie%20de%20Oreo%20e%20gostaria%20de%20encomendar!%20Tem%20dispon%C3%ADvel%3F",
  },
  {
    label: "O Tropical",
    title: "Brownie de Prestígio",
    desc: "Chocolate nobre com beijinho cremoso e coco ralado. Frescor tropical.",
    price: "R$ 6,00",
    img: "./assets/prestigio.jpg",
    link: "https://wa.me/558594116448?text=Ol%C3%A1!%20Vi%20no%20site%20o%20Brownie%20de%20Prest%C3%ADgio%20e%20gostaria%20de%20encomendar!%20Tem%20dispon%C3%ADvel%3F",
  },
  {
    label: "O Conforto",
    title: "Brownie de Doce de Leite",
    desc: "Massa de chocolate meio amargo com camadas generosas de doce de leite cremoso.",
    price: "R$ 6,00",
    img: "./assets/doce-de-leite.jpg",
    link: "https://wa.me/558594116448?text=Ol%C3%A1!%20Vi%20no%20site%20o%20Brownie%20de%20Doce%20de%20Leite%20e%20gostaria%20de%20encomendar!%20Tem%20dispon%C3%ADvel%3F",
  },
  {
    label: "A Intensidade",
    title: "Brownie de Ovomaltine",
    desc: "Recheio cremoso com a crocância única e o sabor inconfundível do Ovomaltine.",
    price: "R$ 6,00",
    img: "./assets/ovomaltine.jpeg",
    link: "https://wa.me/558594116448?text=Ol%C3%A1!%20Vi%20no%20site%20o%20Brownie%20de%20Ovomaltine%20e%20gostaria%20de%20encomendar!%20Tem%20dispon%C3%ADvel%3F",
  },
];

// FEEDBACKS - VELOCIDADE AUMENTADA (25s no CSS)
const FEEDBACKS_LTR = [
  "O melhor que já comi! Massa surreal de molhadinha.",
  "Viciada no Ninho Cremoso. Caminho sem volta!",
  "O de Oreo é uma experiência divina.",
  "Ponto perfeito do chocolate. Nota 10!",
  "Gosto de infância com toque gourmet.",
  "Simplesmente o melhor brownie!",
];

const FEEDBACKS_RTL = [
  "Casquinha crocante é meu ponto fraco.",
  "Recheio generoso demais. Amei!",
  "Feito com muito amor, dá pra sentir.",
  "Ingredientes premium. Vale cada centavo!",
  "Doce de Leite tem gosto de abraço.",
  "Textura de outro planeta. Muito macio!",
];

// ================================================================
// 2. RENDER — CARDS DE SABORES
// ================================================================

function createFlavorCard(flavor, index) {
  const card = document.createElement("article");
  card.className = "flavor-card reveal";
  card.dataset.delay = String(index * 60);
  card.setAttribute("aria-label", flavor.title);

  card.innerHTML = `
    <div class="flavor-img-wrap">
      <img src="${flavor.img}" alt="${flavor.title}" loading="lazy" onerror="this.src='https://placehold.co/500x500/42160B/DEA85C?text=${encodeURIComponent(flavor.title)}'">
    </div>
    <div class="flavor-body">
      <span class="flavor-label">${flavor.label}</span>
      <h3 class="flavor-title">${flavor.title}</h3>
      <p class="flavor-desc">
        ${flavor.desc}
        Por apenas <span class="flavor-price">${flavor.price}</span>.
      </p>
      <a
        href="${flavor.link}"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-card"
        aria-label="Pedir ${flavor.title} via WhatsApp"
      >Quero este sabor</a>
    </div>
  `;

  return card;
}

function renderFlavors() {
  const grid = document.getElementById("flavors-grid");
  if (!grid) return;

  const fragment = document.createDocumentFragment();
  FLAVORS.forEach((flavor, i) =>
    fragment.appendChild(createFlavorCard(flavor, i)),
  );
  grid.appendChild(fragment);
}

// ================================================================
// 3. RENDER — FEEDBACKS com estrelas SVG
// ================================================================

function createStarsSVG() {
  return `
    <svg class="star-icon" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
    </svg>
  `;
}

function createStarsHTML() {
  return (
    createStarsSVG() +
    createStarsSVG() +
    createStarsSVG() +
    createStarsSVG() +
    createStarsSVG()
  );
}

function createFeedbackCard(text) {
  const card = document.createElement("div");
  card.className = "feedback-card";
  card.innerHTML = `
    <div class="feedback-stars" aria-hidden="true">
      ${createStarsHTML()}
    </div>
    <p class="feedback-text">&ldquo;${text}&rdquo;</p>
  `;
  return card;
}

function renderFeedbacks() {
  const trackLTR = document.getElementById("feedback-ltr");
  const trackRTL = document.getElementById("feedback-rtl");
  if (!trackLTR || !trackRTL) return;

  const ltrItems = [...FEEDBACKS_LTR, ...FEEDBACKS_LTR];
  const rtlItems = [...FEEDBACKS_RTL, ...FEEDBACKS_RTL];

  const fragLTR = document.createDocumentFragment();
  const fragRTL = document.createDocumentFragment();

  ltrItems.forEach((t) => fragLTR.appendChild(createFeedbackCard(t)));
  rtlItems.forEach((t) => fragRTL.appendChild(createFeedbackCard(t)));

  trackLTR.appendChild(fragLTR);
  trackRTL.appendChild(fragRTL);
}

// ================================================================
// 4. HEADER — scroll effect
// ================================================================

function initHeaderScroll() {
  const header = document.getElementById("main-header");
  if (!header) return;

  const update = () => header.classList.toggle("scrolled", window.scrollY > 24);
  window.addEventListener("scroll", update, { passive: true });
  update();
}

// ================================================================
// 5. MENU MOBILE
// ================================================================

function initMobileMenu() {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("mobile-menu");
  if (!toggle || !menu) return;

  function closeMenu() {
    menu.classList.remove("open");
    toggle.classList.remove("active");
    menu.setAttribute("aria-hidden", "true");
    toggle.setAttribute("aria-expanded", "false");
  }

  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    toggle.classList.toggle("active", isOpen);
    menu.setAttribute("aria-hidden", String(!isOpen));
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  menu.querySelectorAll(".mobile-link").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

// ================================================================
// 6. SMOOTH SCROLL
// ================================================================

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
}

// ================================================================
// 7. SCROLL REVEAL
// ================================================================

function initScrollReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const el = entry.target;
        const delay = parseInt(el.dataset.delay || "0", 10);

        el.style.transitionDelay = `${delay}ms`;
        el.classList.add("visible");

        el.addEventListener(
          "transitionend",
          () => {
            el.style.transitionDelay = "0ms";
          },
          { once: true },
        );

        observer.unobserve(el);
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -30px 0px",
    },
  );

  elements.forEach((el) => observer.observe(el));
}

// ================================================================
// 8. HOVER IMEDIATO NOS CARDS
// ================================================================

function initCardHover() {
  const cards = document.querySelectorAll(
    ".flavor-card, .hero-card, .sobre-card, .contato-card, .feedback-card",
  );

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transitionDelay = "0ms";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transitionDelay = "0ms";
    });
  });
}

// ================================================================
// 9. ANO ATUAL NO FOOTER
// ================================================================

function setCurrentYear() {
  const el = document.getElementById("current-year");
  if (el) el.textContent = new Date().getFullYear();
}

// ================================================================
// 10. INICIALIZAÇÃO
// ================================================================

document.addEventListener("DOMContentLoaded", () => {
  renderFlavors();
  renderFeedbacks();
  initHeaderScroll();
  initMobileMenu();
  initSmoothScroll();
  initScrollReveal();
  initCardHover();
  setCurrentYear();
});
