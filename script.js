const toggle = document.getElementById('dark-toggle');

toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark');
});



// Auto-slide logic for hero
const slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
  index = (index + 1) % slides.length;
}

setInterval(showSlide, 4000); // Change slide every 4 seconds



function toggleComment(button) {
    const commentBox = button.nextElementSibling;
    commentBox.style.display = commentBox.style.display === 'none' ? 'block' : 'none';
  }
  
