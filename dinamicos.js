document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });
  });

  document.addEventListener('DOMContentLoaded',function(){
  // Verifica se o alerta já foi mostrado
  if (!localStorage.getItem("alertMostrado")) {
    window.alert("Site desenhado para ecras de computador");
    localStorage.setItem("alertMostrado", "true"); // Marca como mostrado
  }
  })

