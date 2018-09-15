
// $('.welcomeback').typeIt({ 
//   speed: 90, 
//   autoStart: false,
//   loop : true,
//   loopDelay: 1550,
// });

/*
* Open the drawer when the menu icon is clicked.
*/

var menu = document.querySelector('#menu');
var main = document.querySelector('main');
var drawer = document.querySelector('#drawer');
var body = document.querySelector('body');

menu.addEventListener('click', function(e) {
drawer.classList.toggle('open');
main.classList.toggle('open');
body.classList.toggle('open');

e.stopPropagation();
});
main.addEventListener('click', function() {
drawer.classList.remove('open');
});

