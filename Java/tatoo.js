window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');
  var scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
  } else {
    navbar.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  }
});

window.addEventListener('load', function() {
  var elemento = document.getElementById('miElemento');
  var opacidad = 0;

  function mostrarGradualmente() {
    opacidad += 0.1;
    elemento.style.opacity = opacidad;

    if (opacidad < 1) {
      setTimeout(mostrarGradualmente, 100);
    }
  }

  mostrarGradualmente();
});

window.sr = ScrollReveal();

    sr.reveal('.animacion-cuadro', {
        duration: 3000,
        origin: 'top',
        distance: '100px'
    });

    sr.reveal('.logito', {
      duration: 3000,
      rotate: {
          x:1,
          y:180,
         
      }
  });