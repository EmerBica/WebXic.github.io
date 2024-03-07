document.addEventListener('DOMContentLoaded', function() {

const bubbles = document.querySelectorAll('.bubbles path');
const waves = document.querySelectorAll('.wave path');
const button = document.querySelector('.button');

// Animate the bubbles
bubbles.forEach(bubble => {
  function animateBubble() {
    const x = Math.random() * 800;
    const y = Math.random() * 800;
    bubble.style.transform = `translate(${x}px, ${y}px)`;
    setTimeout(animateBubble, 3000);
  }
  animateBubble();

  bubble.addEventListener('mouseover', () => {
    bubble.style.fill = '#000';
    bubble.style.transition = 'all 0.5s ease-in-out';
    bubble.style.transform = 'scale(1.5)';
  });
  
  bubble.addEventListener('mouseout', () => {
    bubble.style.fill = '#C67036';
    bubble.style.transform = 'scale(1)';
  });
});

// Animate the waves
waves.forEach(wave => {
    function animateWave() {
      const x = Math.random() * 800;
      const y = Math.random() * 800;
      wave.style.transform = `translate(${x}px, ${y}px)`;
      setTimeout(animateWave, 3000);
    }
    animateWave();
  
    wave.addEventListener('mouseover', () => {
      wave.style.fill = '#f0f0f0';
      wave.style.transition = 'all 0.5s ease-in-out';
      wave.style.transform = 'scale(1.5)';
    });
    
    wave.addEventListener('mouseout', () => {
      wave.style.fill = '#C67036';
      wave.style.transform = 'scale(1)';
    });
  });

// Animate the button
button.addEventListener('mouseover', () => {
    button.style.animation = 'pulse 1s ease-in-out infinite';
  });
  
  button.addEventListener('mouseout', () => {
    button.style.animation = 'none';
  });
  
  button.addEventListener('click', () => {
    button.style.animation = 'explode 0.5s ease-in-out';
    setTimeout(() => {
      button.style.animation = 'none';
    }, 500);
  });

// Add smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// Initialize Bootstrap's collapse plugin
var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
var collapseList = collapseElementList.map(function (collapseEl) {
  return new bootstrap.Collapse(collapseEl)
})


// Nav scroll to section
  window.addEventListener('scroll', function() {
    var position = window.scrollY;

    document.querySelectorAll('section').forEach(function(section) {
      var target = section.offsetTop;
      var id = section.getAttribute('id');
      var navLink = document.querySelector('.navbar-nav .nav-link[href="#' + id + '"]');

      if (position >= target && position <= target + section.offsetHeight) {
        if (navLink) {
          navLink.classList.add('active');
        }
      } else {
        if (navLink) {
          navLink.classList.remove('active');
        }
      }
    });
  });


  // Scroll Navbar
const nav = document.querySelector('.big-nav');
function onScroll() {
  const scrollPosition = window.pageYOffset;
  if (scrollPosition > 0) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
}
window.addEventListener('scroll', onScroll);

// Bottom navbar responsiveness script
let navbar = document.querySelector('nav');
let windowWidth = window.innerWidth;
let navbarNav = document.querySelector('nav ul');

function toggleClasses() {
  if (windowWidth > 600) {
    navbar.classList.remove('fixed-bottom', 'bg-dark');
    navbar.classList.add('scrolled', 'fixed-top');
  } else if (windowWidth < 600) {
    navbar.classList.add('fixed-bottom', 'bg-dark');
    navbar.classList.remove('fixed-top', 'scrolled');
  }
}

toggleClasses();

window.addEventListener('resize', function() {
  windowWidth = window.innerWidth;
  toggleClasses();
});


  // About us animation
const aboutUsSection = document.getElementById('sobre');
const backgroundItems = document.querySelectorAll('.background-item');

aboutUsSection.addEventListener('click', function() {
  backgroundItems.forEach(function(item) {
    item.style.animation = 'none';
    item.offsetHeight;
    item.style.animation = 'background-item 3s ease-in-out infinite';
  });
});

// Service background change when mouse over
const serviceItems = document.querySelectorAll('.service-item');

// Define an array of background images
const backgrounds = [
  'linear-gradient(rgba(8, 0, 0, 0.6), rgba(0,0,0,0.6)), url(images/catering.jpg)',
  'linear-gradient(rgba(8, 0, 0, 0.6), rgba(0,0,0,0.6)), url(images/organization.jpg)',
  'linear-gradient(rgba(8, 0, 0, 0.6), rgba(0,0,0,0.6)), url(images/protocol.jpg)',
];

// Section Background change
const serviceBackgrounds = ['images/catering.jpg', 'images/organization.jpg', 'images/protocol.jpg'];
serviceItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    document.getElementById('servicos').style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0,0,0,0.6)), url(${serviceBackgrounds[index % serviceBackgrounds.length]})`;
    const p = document.querySelector('#servicos p');
    p.style.color = '#fff';
    p.style.fontWeight = 'bold';
  });
});
});
