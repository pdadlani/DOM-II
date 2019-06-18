// Your code goes here
// Change color to pink
const changeColorPink = function (event) {
  event.target.style.color = 'hotpink';
  // event.target.style.border = '2px solid hotpink';
  // event.preventDefault();
  console.log('I want to change color');
}

// Change color to aqua
const changeColorAqua = function (event) {
  event.target.style.color = 'aqua';
  console.log('I want to change color');
}

// Change color to black
const changeColorBlk = function (event) {
  event.target.style.color = 'black';
  console.log('I want to change color');
}

// Change Navigation Link colors when hovering over
const navLink = document.querySelectorAll('nav a');
// navLink[0].addEventListener('click', function (e) {
//   e.target.style.color = 'hotpink';
//   e.stopPropagation();
// });
navLink.forEach(function(link) {
  link.addEventListener('mouseover', changeColorPink)
  link.addEventListener('mouseout', changeColorBlk)
  // link.addEventListener('click', changeColorAqua)
})

navLink.forEach(function(link) {
  link.addEventListener('click', changeColorAqua)
//   link.addEventListener('click', changeColorAqua)
})
// does not work
// const resizing = window.addEventListener('resize', function(event) {
//   event.target.style.fontsize = '45px'
// })

// const enlarge = function(event) {
//   event.target.style.transform = 'scale(1.5)';
// }

// const images = document.querySelectorAll('img');
// images.addEventListener('mouseover', enlarge)

let image2 = document.querySelectorAll('.img-content')[1];
image2.addEventListener('mouseover', event => {
  event.target.style.transform = 'scale(1.5)';
});
// image2.addEventListener('setTimeout', event => {
//   event.target.style.transform = `scale(.6)`;
// });

// const signUpBtn = document.querySelector('.btn');
// signUpBtn.addEventListener('click', function() {
//   console.log('I was clicked');
// });

const signUpBtn = document.querySelectorAll('.btn');
signUpBtn.forEach(function(btn) {
  btn.addEventListener('click', changeColorPink);
})

const alertAddMe = function(event) {
  event.target.style.backgroundColor = 'aqua';
}

const personalData = document.querySelectorAll('input');
personalData.forEach(function(data) {
  data.addEventListener('wheel', alertAddMe);
  data.addEventListener('keydown', changeColorPink);
})


// signUpBtn.forEach(btn => {
//   btn.addEventListener('click', event => {
//     event.target.style = 'orange'
//   })
// })

// navBtn.forEach(item => item.addEventListener('mouseover', event => {
//   event.target.style = 'blue';
// }))

