// const navSlide = () => {
//     const burger = document.querySelector('.burger');
//     const nav = document.querySelector('.nav-links');
//     const navLinks = document.querySelectorAll('.nav-links li');
    
    
//     burger.addEventListener('click', () => {
//         nav.classList.toggle('nav-active');

//         //links animation
//         navLinks.forEach((link, index) => {
        
            



//             if (link.style.animation){
//                 link.style.animation ='';
//             }
//             else{
//                 link.style.animation = `navLinkFade 0.5s ease forwards ${index/5+.05}s`;
//             }
//         });


//         burger.classList.toggle('toggle');
//     });
// }

// navSlide();







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

navSlide();

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