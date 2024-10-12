document.getElementById("tema").addEventListener("click", function() {
          /* 
  const currentTheme = document.body.className;
  */
  const themeIcon = document.querySelector('#tema img');
  const themeLogo = document.querySelector('#logo');
  const themeLogo2 = document.querySelector('#logoUnd');
  const arrows = document.querySelector('#arrowd');
  const arrowsd2 = document.querySelector('#arrowd2');
  const body = document.body;
 /*
  if (currentTheme === '') {
      document.body.className = 'light-theme' 
      document.body.style.transition = '0.25s'
      themeIcon.src = 'SUN.png';

  } else {
      document.body.className = ''; 
      themeIcon.src = 'MOON.png';
  }
      */

  const isDarkTheme = body.classList.toggle('light-theme'); 
  themeIcon.src = isDarkTheme ? 'SUN.png' : 'MOON.png';
  themeLogo.src = isDarkTheme ? 'Rectangle69.png' : 'Rectangle.svg';
  themeLogo2.src = isDarkTheme ? 'Rectangle69.png' : 'Rectangle.svg';
  arrows.src = isDarkTheme ? 'Vector.png' : 'arrow.svg';
  arrowsd2.src = isDarkTheme ? 'Vector.png' : 'arrow.svg';
  
  body.style.transition = '0.25s';
  });
 

   


