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
navLink.forEach(function(link) {
  link.addEventListener('mouseover', changeColorPink)
  link.addEventListener('mouseout', changeColorBlk)
  link.addEventListener('click', changeColorAqua)
  link.addEventListener('click', function(e) {
    e.preventDefault();
  })
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
const headerLoad = document.querySelectorAll('h2');
window.addEventListener('load', (event) => {
  // headerLoad[2].style.color = "red";
  headerLoad.forEach(header =>{
    header.style.color = 'orangered';
  })
});

// let image2 = document.querySelectorAll('.img-content')[1];
// image2.addEventListener('mouseover', event => {
//   event.target.style.transform = 'scale(1.5)';
// });

// image2.addEventListener('setTimeout', event => {
//   event.target.style.transform = `scale(.6)`;
// });

let images = document.querySelectorAll('img');
console.log(images);
window.addEventListener('click', event => {
  images.forEach(image => {
    image.style.border = '2px solid orange';
  })
})

const signUpBtn = document.querySelectorAll('.btn');
signUpBtn.forEach(function(btn) {
  btn.addEventListener('dblclick', changeColorBlk);
  btn.addEventListener('click', changeColorPink)
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

