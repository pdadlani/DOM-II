// Your code goes here
const navLink = document.querySelectorAll('nav a');
navLink[0].addEventListener('click', function (e) {
  e.target.style.color = 'hotpink';
  e.stopPropagation();
});

