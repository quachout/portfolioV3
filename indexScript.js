// BUTTON //////////////////////////////////////////////////////////////////

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// BUTTON //////////////////////////////////////////////////////////////////



// navBar button //////////////////////////////////////////////////
const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');
  
  
  burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');

      //links animation
      navLinks.forEach((link, index) => {
      
          



          if (link.style.animation){
              link.style.animation ='';
          }
          else{
              link.style.animation = `navLinkFade 0.5s ease forwards ${index/5+.05}s`;
          }
      });


      burger.classList.toggle('toggle');
  });

}
// navBar button //////////////////////////////////////////////////

// Theme toggle functionality
function toggleTheme() {
  document.documentElement.classList.toggle('darkTheme');
  const isDark = document.documentElement.classList.contains('darkTheme');
  localStorage.setItem('themeSwitch', isDark ? 'darkTheme' : '');
}

const themeSwitch = document.querySelector('#moon');
const themeSwitch2 = document.querySelector('#moon2');
const themeSwitch3 = document.querySelector('#sun');
const themeSwitch4 = document.querySelector('#sun2');

themeSwitch?.addEventListener('click', toggleTheme);
themeSwitch2?.addEventListener('click', toggleTheme);
themeSwitch3?.addEventListener('click', toggleTheme);
themeSwitch4?.addEventListener('click', toggleTheme);

window.onload = function(){
  initTheme();
  initTheme2();
};
/////////////////////////////////
function initTheme() {
  if ((localStorage.getItem('themeSwitch') !== null && localStorage.getItem('themeSwitch') === 'darkTheme') ){
    document.body.classList.toggle('darkTheme');
  } 

};
function initTheme2() {
  if ((localStorage.getItem('themeSwitch2') !== null && localStorage.getItem('themeSwitch2') === 'darkTheme') ){
    document.body.classList.toggle('darkTheme');
  } 

};

navSlide();

