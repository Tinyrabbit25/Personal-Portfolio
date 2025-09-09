/*Makes the hamburger lines appear */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

/*---------Make the navbar highlight the current section---------*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec=>{
       let top = window.scrollY;
       let offset = sec.offsetTop -150; 
       let height = sec.offsetHeight;
       let id = sec.getAttribute('id');

       if(top >= offset && top < offset + height){
        navLinks.forEach(links=>{
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
      };
    });

/* ---------------------Sticky Navbar------------------------*/
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

/*------------Gets rid of the box icon----------- */
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

/*------------Scroll--------------*/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading, .home-sci', {origin: 'top'});
ScrollReveal().reveal('.home-img, .skills-container, .projects-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h3, .profile-pic-container img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});

/*-------------typed js-------------*/

const typed = new Typed('.multiple-text',{
  strings: ['Software Engineer', 'Web Developer', 'Game Developer',],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

/* -------- Modal (Read More popup) -------- */

const model = document.getElementById('about-model');
const readMoreBtn = document.querySelector('.about-content .btn');
const closeBtn = document.querySelector('.close-btn');

readMoreBtn.addEventListener('click', (e) => {
  e.preventDefault();
  model.style.display = 'block';
  
  // wait a tiny moment before adding "show"
  requestAnimationFrame(() => {
    model.classList.add('show');
  })
});

// Closes the read more when clicked x
closeBtn.addEventListener('click', () => {
  model.classList.remove('show');
  setTimeout(() => {
    model.style.display = 'none';
  }, 400)
});

window.addEventListener('click', (e) => {
  if(e.target == model) {
    model.classList.remove('show');
    setTimeout(() => {
      model.style.display = 'none'
    }, 400)
  };
});

// Select all read more buttons inside the skills section
const skillReadMoreBtns = document.querySelectorAll('.skills-box .btn');

// Loop through each button
skillReadMoreBtns.forEach((btn, index) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    // Find the matching modal for this button
    const model = document.getElementById(`skill-model-${index}`);

    if (model) {
      // Show the modal
      model.style.display = 'block';

      // Smooth animation
      requestAnimationFrame(() => {
        model.classList.add('show');
      });
    }
  });
});

//For closing the read more
const skillCloseBtns = document.querySelectorAll('.close-btn');

skillCloseBtns.forEach(closeBtn => {
  closeBtn.addEventListener('click', () => {
    const SkillModel = closeBtn.closest('.model');
    SkillModel.classList.remove('show');
    setTimeout(() => {
      SkillModel.style.display = 'none';
    }, 400);
  });
});

//For closing it outside of the x so click anywhere to close

window.addEventListener('click', (e) => {
  if(e.target.classList.contains('model')) {
    e.target.classList.remove('show');
    setTimeout(() => {
      e.target.style.display = 'none';
    }, 400)
  };
});





