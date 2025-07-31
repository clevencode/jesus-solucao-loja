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
