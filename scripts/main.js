   AOS.init({
    duration: 1000,
    offset: 100,
    once: true,
  });


  // Counter 
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const updateCounter = () => {
      const target = +counter.getAttribute('data-target');
      const current = +counter.innerText;
      const increment = target / 100; 
      if (current < target) {
        counter.innerText = `${Math.ceil(current + increment)}`;
        setTimeout(updateCounter, 300);
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
  });
   
//  Swiper 
  document.addEventListener('DOMContentLoaded', () => {
    try {
      if (typeof Swiper === 'undefined') {
        console.warn('Swiper is not loaded. Make sure the Swiper script is included before `scripts/main.js`.');
        return;
      }

      const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 1, // mobile default
        spaceBetween: 12,
        breakpoints: {
          // when window width is >= 768px, show 2 slides
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 992px, show 3 slides
          992: {
            slidesPerView: 3,
            spaceBetween: 24,
          }
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
    } catch (err) {
      console.error('Error initializing Swiper:', err);
    }
  });

// Toggle (FAQ)
  const Questions = document.querySelectorAll('.Questions');
  Questions.forEach((Question) => {
    Question.addEventListener('click', function() {
      const nextP = this.nextElementSibling;
      if (nextP && nextP.classList.contains('Answers')) {
        nextP.style.display = (nextP.style.display === 'none' || !nextP.style.display) ? 'flex' : 'none';
      }
    });
  });


// Rotating Animation
  window.onload = function() {
    const rotating = document.getElementById('rotating');
    let angle = 0;
    setInterval(() => {
      angle = (angle + 1) % 360; 
      rotating.style.transform = `rotate(${angle}deg)`;
    }, 10);
  }

