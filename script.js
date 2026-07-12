document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel");
  const imageWidth = 232; // Image width
  const gap = 20; // Gap between images
  const step = 1; // Scrolling step in pixels
  let scrollPosition = 0;

  function scrollCarousel() {
    scrollPosition += step;

    // If the first image scrolls out of view, move it to the end
    const firstImage = carousel.children[0];
    const totalVisibleWidth = carousel.offsetWidth;
    if (scrollPosition >= imageWidth + gap) {
      scrollPosition -= imageWidth + gap;
      carousel.appendChild(firstImage); // Move the first image to the end
    }

    // Apply the translation
    carousel.style.transform = `translateX(-${scrollPosition}px)`;

    // Continue the animation
    requestAnimationFrame(scrollCarousel);
  }

  // Clone images to ensure smooth looping
  const images = Array.from(carousel.children);
  images.forEach((img) => {
    const clone = img.cloneNode(true);
    carousel.appendChild(clone);
  });

  // Start the infinite scroll
  scrollCarousel();
});



let currentQuote = 0;

function showQuote(index) {
  const quotes = document.querySelectorAll('.quote');
  const dots = document.querySelectorAll('.dot');

  quotes[currentQuote].classList.remove('active');
  dots[currentQuote].classList.remove('active');

  currentQuote = index;

  quotes[currentQuote].classList.add('active');
  dots[currentQuote].classList.add('active');
}

// Auto-switch quotes every 5 seconds
setInterval(() => {
  const nextQuote = (currentQuote + 1) % document.querySelectorAll('.quote').length;
  showQuote(nextQuote);
}, 20000);

// Function to handle elements appearing on scroll
      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
                  observer.unobserve(entry.target); // Stop observing once visible
              }
          });
      });

      // Select all elements with the class 'content'
      const contentElements = document.querySelectorAll('.in');

      // Observe each element
      contentElements.forEach(element => observer.observe(element));


function copyToClipboard() {
  const textToCopy = document.getElementById('copy-text').textContent;
  navigator.clipboard.writeText(textToCopy).then(() => {
    alert('Text copied to clipboard!');
  }).catch((err) => {
    console.error('Failed to copy text: ', err);
  });
}
