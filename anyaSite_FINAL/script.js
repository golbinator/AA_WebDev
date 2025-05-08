
document.getElementById("hamburger").addEventListener("click", function () {
    document.getElementById("menu").classList.toggle("show");
  });
  
 
  const onion = document.getElementById("clickOnion");
  const counter = document.getElementById("clickCounter");
  let onionClicks = 0;
  
  if (onion) {
    onion.addEventListener("click", () => {
      onionClicks++;
      counter.textContent = onionClicks;
      if (onionClicks === 10) {
        alert("onion");
      }
    });
  }


gsap.from("#contact", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#contact",
      start: "top 80%"
    }
  });
  
  
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  
  form.addEventListener("submit", function (e) {
    e.preventDefault();
  
  
    setTimeout(() => {
      status.style.display = "block";
      status.textContent = "message sent ✓";
  
 
      form.reset();
  
      setTimeout(() => {
        status.style.display = "none";
      }, 3000);
    }, 500);
  });

 
  
  

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        gsap.to(window, {
          duration: 1,
          scrollTo: target.offsetTop,
          ease: "power2.inOut"
        });
      }


      const track = document.getElementById('carouselTrack');
const slides = Array.from(track.children);
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

let currentIndex = 0;

function updateCarousel() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}

nextBtn.addEventListener('click', () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    updateCarousel();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

    });
  });
  