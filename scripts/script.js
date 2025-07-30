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
