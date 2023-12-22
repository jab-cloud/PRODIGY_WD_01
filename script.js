 // get the navigation element
 var nav = document.querySelector('nav');

 // add an event listener to the window object
 window.addEventListener('scroll', function() {
   // get the scroll position of the window
   var scrollPos = window.scrollY;

   // change the background color of the navigation element based on the scroll position
   if (scrollPos > 0) {
     // if the scroll position is greater than zero, change the background color to light blue
     nav.style.backgroundColor = 'black';
   } else {
     // if the scroll position is zero, change the background color to white
     nav.style.backgroundColor = 'white';
   }
 });