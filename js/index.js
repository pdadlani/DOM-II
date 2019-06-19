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

// Scrolling changes the background color to lightblue
// scroll event must be applied to window, not specific object
window.addEventListener('scroll', () => {
  document.querySelector('body').style.background = 'lightblue';
  // once finished scrolling, background color changes to white after 3 seconds
  setTimeout(function () {
    document.querySelector('body').style.background = 'white';
  }, 3000)
})

// Right-clicking deletes content
// context menu event must be applied to window, not specific object
window.addEventListener('contextmenu', (e) => {
  e.target.style.display = 'none'
})

// Change Navigation Link colors when hovering over
// const navLink = document.querySelectorAll('nav a');
// navLink.forEach(function(link) {
//   link.addEventListener('mouseover', changeColorPink)
//   link.addEventListener('mouseout', changeColorBlk)
//   link.addEventListener('click', changeColorAqua)
//   link.addEventListener('click', function(e) {
//     e.preventDefault();
//   })
// })
document.querySelectorAll('nav a').forEach(function(link) {
  link.addEventListener('mouseover', changeColorPink)
  link.addEventListener('mouseout', changeColorBlk)
  link.addEventListener('click', changeColorAqua)
  link.addEventListener('click', function(e) {
    e.preventDefault();
  })
})

// Load Header2 in OrangeRed Color
// load event must be applied to window, not specific object
window.addEventListener('load', () => {
  document.querySelectorAll('h2').forEach(header =>{
    header.style.color = 'orangered';
  })
  // give alert that page is loading
  alert('Your page is loading!');
});

// Put border of orange & scale on all images when scrolling for limited time
// scroll event must be applied to window, not specific object
window.addEventListener('scroll', event => {
  document.querySelectorAll('img').forEach(image => {
    image.style.border = '2px solid orange';
    image.style.transform = 'scale(1.5)';
    // sets timer of 1.5 sec to change border and scale back to original specifications
    setTimeout(function () {
      image.style.border = '2px solid white';
      image.style.transform = 'scale(1)';
    }, 1500)
  })
})

// changes color of paragraph text when resizing
// resize event must be applied to window, not specific object
window.addEventListener('resize', function (event) {
  document.querySelectorAll('.home').forEach(item => {
    item.style.color = 'purple';
  })
})

// trying to figure out propagation
window.addEventListener('resize', function (event) {
  document.querySelectorAll('.content-pick').forEach(item => {
    item.style.color = 'green';
    // item.stopPropagation();
  })
})

// changes opacity of images when dragging
document.addEventListener("dragstart", function (event) {
  // store a ref. on the dragged elem (if wanting to access element outside of this block of code)
  dragged = event.target;
  // make it half transparent
  event.target.style.opacity = .5;
  // false is default argument, so do not need to include it.
}, false);

// returns opacity of images back to normal when finished dragging
document.addEventListener('dragend', function(event) {
  event.target.style.opacity = '1';
}, false)

// changes color of sign up button upon clicking once vs twice
const signUpBtn = document.querySelectorAll('.btn');
signUpBtn.forEach(function(btn) {
  btn.addEventListener('dblclick', changeColorBlk);
  btn.addEventListener('click', changeColorPink)
})

// change background color to aqua
const changeBackAqua = function(event) {
  event.target.style.backgroundColor = 'aqua';
}

// changes items in the form - background color to aqua when wheeling over it
// - text color to pink when typing
document.querySelectorAll('input').forEach(function(data) {
  data.addEventListener('wheel', changeBackAqua);
  data.addEventListener('keydown', changeColorPink);
  //data.addEventListener('click', alert);
})

// const alert = () => {
//   alert('Please enter your data to receive more information')
// }

// gives an alert message when trying to copy text
document.querySelector('body').addEventListener('copy', event => {
  alert('What are you trying to copy?! You must give us credit.')
})


// window.addEventListener('load', (e) => {
//   window.setTimeout(() => document.getElementById('modal').classList.toggle('hide'), 3000);
// })
