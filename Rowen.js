const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('.content-section');

function switchSection(e) {
  e.preventDefault(); 
  
  sections.forEach((section) => section.classList.remove('active'));

  const targetSection = document.querySelector(e.target.getAttribute('href'));
  targetSection.classList.add('active');
}

navLinks.forEach((link) => {
  link.addEventListener('click', switchSection);
});

const roles = ["Web Developer", "Pogi Lang"];
let currentRoleIndex = 0;

function changeRole() {
  const roleElement = document.getElementById("web-role");
  roleElement.classList.add("fade-out"); 
  setTimeout(() => {
    roleElement.textContent = roles[currentRoleIndex]; 
    roleElement.classList.remove("fade-out"); 
    currentRoleIndex = (currentRoleIndex + 1) % roles.length; 
  }, 500); 
}

setInterval(changeRole, 3000); 

const workBtn = document.querySelector('.contact-link');
const modal = document.getElementById('contactModal');
const closeBtn = document.querySelector('.close');
const contactForm = document.getElementById('contactForm');

workBtn.addEventListener('click', (e) => {
  e.preventDefault();
  modal.style.display = 'flex';
  setTimeout(() => modal.classList.add('show'), 10);  
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('show');
  setTimeout(() => modal.style.display = 'none', 300);  
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('show');
    setTimeout(() => modal.style.display = 'none', 300);
  }
});

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  emailjs.sendForm('your_service_id', 'your_template_id', contactForm)
    .then((response) => {
      alert('Message sent successfully!');
    }, (error) => {
      alert('Error sending message: ' + error);
    });

  modal.classList.remove('show');
  setTimeout(() => modal.style.display = 'none', 300);
});
