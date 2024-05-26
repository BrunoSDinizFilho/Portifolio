document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.carousel');
  let scrollAmount = 0;
  const scrollStep = 2;

  function scroll() {
    scrollAmount += scrollStep;
    carousel.scrollLeft = scrollAmount;
    if (scrollAmount >= (carousel.scrollWidth - carousel.clientWidth)) {
      scrollAmount = 0;
    }
  }

  let scrollInterval = setInterval(scroll, 50); // Ajuste o intervalo de tempo para a velocidade desejada

  carousel.addEventListener('mouseenter', function() {
    clearInterval(scrollInterval);
  });

  carousel.addEventListener('mouseleave', function() {
    scrollInterval = setInterval(scroll, 50);
  });
});
