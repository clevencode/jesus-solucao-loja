const scrollContainer = document.querySelector('.menu-scroll');
const leftBtn = document.querySelector('.nav-btn.left');
const rightBtn = document.querySelector('.nav-btn.right');

function updateNavButtons() {
  const scrollLeft = scrollContainer.scrollLeft;
  const scrollWidth = scrollContainer.scrollWidth;
  const clientWidth = scrollContainer.clientWidth;

  if (scrollLeft > 0) {
    leftBtn.classList.add('visible');
  } else {
    leftBtn.classList.remove('visible');
  }

  if (scrollLeft + clientWidth < scrollWidth - 1) {
    rightBtn.classList.add('visible');
  } else {
    rightBtn.classList.remove('visible');
  }
}

leftBtn.addEventListener('click', () => {
  scrollContainer.scrollBy({ left: -100, behavior: 'smooth' });
});

rightBtn.addEventListener('click', () => {
  scrollContainer.scrollBy({ left: 100, behavior: 'smooth' });
});

scrollContainer.addEventListener('scroll', updateNavButtons);
window.addEventListener('resize', updateNavButtons);
window.addEventListener('load', updateNavButtons);

// Clique no link: scroll suave para a seção
document.querySelectorAll('.menu li a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Scroll spy para marcar ativo e sublinhar
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const links = document.querySelectorAll('.menu li a');

  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120; // ajuste se tiver header fixo
    if (window.scrollY >= sectionTop) {
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
