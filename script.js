



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

// light theme ////////////////////////////////////////////////////
const themeSwitch = document.querySelector('#moon');

themeSwitch.addEventListener('click', () => {
  document.body.classList.toggle('darkTheme');
});
// light theme ////////////////////////////////////////////////////
// light theme2 ////////////////////////////////////////////////////
const themeSwitch2 = document.querySelector('#moon2');

themeSwitch2.addEventListener('click', () => {
  document.body.classList.toggle('darkTheme');
});
// light theme2 ////////////////////////////////////////////////////
