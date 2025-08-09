 const scrollContainer = document.querySelector('.menu-scroll');
  const leftBtn = document.querySelector('.nav-btn.left');
  const rightBtn = document.querySelector('.nav-btn.right');

  function updateNavButtons() {
    const scrollLeft = scrollContainer.scrollLeft;
    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;

    // Mostrar botão esquerdo apenas se puder rolar para a esquerda
    if (scrollLeft > 0) {
      leftBtn.classList.add('visible');
    } else {
      leftBtn.classList.remove('visible');
    }

    // Mostrar botão direito apenas se houver conteúdo oculto à direita
    if (scrollLeft + clientWidth < scrollWidth - 1) {
      rightBtn.classList.add('visible');
    } else {
      rightBtn.classList.remove('visible');
    }
  }

  // Ações nos botões
  leftBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({ left: -100, behavior: 'smooth' });
  });

  rightBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({ left: 100, behavior: 'smooth' });
  });

  // Atualiza botões após rolagem ou redimensionamento
  scrollContainer.addEventListener('scroll', updateNavButtons);
  window.addEventListener('resize', updateNavButtons);
  window.addEventListener('load', updateNavButtons);

    // (Removido: declarações duplicadas e código duplicado para scrollContainer, leftBtn, rightBtn e updateNavButtons)

    // Scroll suave com ajuste de 50% do nav-bar
    document.querySelectorAll('.menu li a').forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);

        const navbarHeight = document.querySelector('.menu-wrapper').offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({
          top: targetPosition - (navbarHeight / 2),
          behavior: 'smooth'
        });
      });
    });
 window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const links = document.querySelectorAll('.menu li a');

  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  links.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

const slides = document.querySelectorAll('.secao .slide');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    slide.style.display = i === index ? 'block' : 'none';
  });

  // Opcional: mudar ícone se for o último
  if (index === slides.length - 1) {
    nextBtn.innerHTML = '<span class="material-icons">keyboard_double_arrow_left</span>';
  } else {
    nextBtn.innerHTML = '<span class="material-icons">keyboard_double_arrow_right</span>';
  }
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

showSlide(currentIndex);


// Fullscreen: solicita tela cheia no container (ou sai dela)
  (function () {
    const btn = document.getElementById('mapFullscreenBtn');
    const wrapper = document.getElementById('mapWrapper');

    btn.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        if (wrapper.requestFullscreen) {
          wrapper.requestFullscreen();
        } else if (wrapper.webkitRequestFullscreen) { /* Safari */
          wrapper.webkitRequestFullscreen();
        } else {
          // fallback: abrir mapa em nova aba
          const iframe = document.getElementById('mapIframe');
          window.open(iframe.src, '_blank', 'noopener');
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }
      }
    });

    // Melhorar acessibilidade: tecla Enter/Space ativa o botão
    btn.addEventListener('keyup', (e) => {
      if (e.key === 'Enter' || e.key === ' ') btn.click();
    });
  })();
  
  // Inicializa com o primeiro slide
  showSlide(currentIndex);