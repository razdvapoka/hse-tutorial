var lastLinearGradientColor;

// >>> HELPERS

// function that returns a random number; 0 <= number <= 255
function randomNumber(min = 0, max = 255) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

// function that returns a random color in the rgb() string form
function randomColor() {
  var r = randomNumber();
  var g = randomNumber();
  var b = randomNumber();
  return "rgb(" + r + "," + g + "," + b + ")";
}

// function that returns a random gradient in the linear-gradient() string form
function randomLinearGradient(angle = 90) {
  var c1 = lastLinearGradientColor || randomColor();
  var c2 = randomColor();
  var c3 = randomColor();
  lastLinearGradientColor = c3;
  return "linear-gradient(" + angle + "deg," + c1 + "," + c2 + "," + c3 + ")";
}

function randomConicGradient() {
  var colorCount = randomNumber(3, 9);
  var colors = [];
  for (var i = 0; i < colorCount; i++) {
    colors[i] = randomColor();
  }
  colors.push(colors[0]);
  return "conic-gradient(" + colors.join(",") + ")";
}

// function that updates the number in the counter
function updateCounter() {
  // find all the children of the clown-box and count them
  var count = document.querySelectorAll(".clown-box > *").length;
  // find the counter element by id and set its text to the count
  document.getElementById("counter").innerText = count;
}

function scrollToBottom() {
  var h = document.body.getBoundingClientRect().height;
  window.scrollTo(0, h);
}

// <<< HELPERS

// >>> EVENT HANDLERS

// add 'keypress' (keyboard's key was pressed) event handler
window.addEventListener("keypress", function (e) {
  // see the codes at https://keycode.info/

  console.log(e.which);
  // Space
  if (e.which === 32) {
    e.preventDefault();
    e.stopPropagation();
    // set the body's background to a random linear gradient
    document.body.style.background = randomLinearGradient();
  }

  // Enter
  if (e.which === 13) {
    // set the body's background to a random color
    document.body.style.background = randomColor();
  }

  // q
  if (e.which === 113) {
    // make the page spin or stop spinning
    document
      .querySelectorAll(".clown-circle")
      .forEach((c) => c.classList.toggle("make-me-spin"));
  }
});

// find the button
var clownButton = document.getElementById("clown-btn");
// add 'click' event handler
clownButton.addEventListener("click", function () {
  // create new div element
  var newCircle = document.createElement("button");
  // add 'clown-circle' class to this div
  newCircle.classList.add("clown-circle");
  var randomBg = Math.random() < 0.8;
  if (randomBg) {
    newCircle.style.background = randomConicGradient();
  }
  var d = randomNumber(150, 250);
  newCircle.style.width = d + "px";
  newCircle.style.height = d + "px";
  // find the element with the 'clown-box' class
  var clownBox = document.querySelector(".clown-box");
  // add the new div to this element
  clownBox.appendChild(newCircle);
  updateCounter();
  scrollToBottom();
});

// find the button
var rectButton = document.getElementById("rect-btn");
// add 'click' event handler
rectButton.addEventListener("click", function () {
  // create new button element
  var newRect = document.createElement("button");
  // add 'rounded-rect' class to this div
  newRect.classList.add("rounded-rect");
  // make its background a random color
  newRect.style.background = randomColor();
  newRect.style.width = randomNumber(100, 300) + "px";
  newRect.style.height = randomNumber(100, 300) + "px";
  // find the element with the 'clown-box' class
  var clownBox = document.querySelector(".clown-box");
  newRect.addEventListener("click", function () {
    this.remove();
  });
  // add the new button to this element

  clownBox.appendChild(newRect);
  updateCounter();
  scrollToBottom();
});

// find the button
var fancyButton = document.getElementById("fancy-btn");
// add 'click' event handler
fancyButton.addEventListener("click", function () {
  // create new div element
  var newRect = document.createElement("div");
  // add 'fancy-rect' class to this div
  newRect.classList.add("fancy-rect");
  // make its background a random gradient
  newRect.style.background = randomLinearGradient();
  newRect.style.width = randomNumber(100, 200) + "px";
  // find the element with the 'clown-box' class
  var clownBox = document.querySelector(".clown-box");
  // add the new div to this element
  clownBox.appendChild(newRect);
  newRect.addEventListener("click", function () {
    this.remove();
  });
  updateCounter();
  scrollToBottom();
});

// find the button
var deleteClownButton = document.getElementById("delete-clown-btn");
// add 'click' event handler
deleteClownButton.addEventListener("click", function () {
  // find all the elements with the 'clown-circle' class
  var circles = document.querySelectorAll(".clown-circle");
  // if there is at least one
  if (circles.length > 0) {
    // extract it from the elements' list
    var firstCircle = circles[0];
    // and delete it
    firstCircle.remove();
    updateCounter();
    scrollToBottom();
  }
});

// find the button
var toggleButton = document.getElementById("toggle-btn");
// add 'click' event handler
toggleButton.addEventListener("click", function () {
  // find all the elements with the 'clown-circle' class
  var circles = document.querySelectorAll(".clown-circle");
  // for each found circle...
  circles.forEach(function (circle) {
    // toggle 'blue-bg' class
    circle.classList.toggle("blue-bg");
  });
});

// <<< EVENT HANDLERS
