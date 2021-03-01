// >>> HELPERS

// function that returns a random number; 0 <= number <= 255
function randomNumber() {
  return Math.floor(Math.random() * 256);
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
  var c1 = randomColor();
  var c2 = randomColor();
  var c3 = randomColor();
  return "linear-gradient(" + angle + "deg," + c1 + "," + c2 + "," + c3 + ")";
}

// function that updates the number in the counter
function updateCounter() {
  // find all the children of the clown-box and count them
  var count = document.querySelectorAll(".clown-box > *").length;
  // find the counter element by id and set its text to the count
  document.getElementById("counter").innerText = count;
}

// <<< HELPERS

// >>> EVENT HANDLERS

// add 'keypress' (keyboard's key was pressed) event handler
window.addEventListener("keypress", function (e) {
  // see the codes at https://keycode.info/

  // Space
  if (e.which === 32) {
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
    document.querySelector("html").classList.toggle("make-me-spin");
  }
});

// >>> click the button with id="red-btn" to make the page red

// find the button
var button = document.getElementById("red-btn");
// add 'click' event handler
button.addEventListener("click", function () {
  // find body
  var body = document.querySelector("body");
  // make body's bacground red
  body.style.background = "red";
});

// <<< click the button with id="red-btn" to make the page red

// find the button
var clownButton = document.getElementById("clown-btn");
// add 'click' event handler
clownButton.addEventListener("click", function () {
  // create new div element
  var newCircle = document.createElement("div");
  // add 'clown-circle' class to this div
  newCircle.classList.add("clown-circle");
  // find the element with the 'clown-box' class
  var clownBox = document.querySelector(".clown-box");
  // add the new div to this element
  clownBox.appendChild(newCircle);
  updateCounter();
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
  // find the element with the 'clown-box' class
  var clownBox = document.querySelector(".clown-box");
  // add the new button to this element
  clownBox.appendChild(newRect);
  updateCounter();
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
  newRect.style.background = randomLinearGradient(45);
  // find the element with the 'clown-box' class
  var clownBox = document.querySelector(".clown-box");
  // add the new div to this element
  clownBox.appendChild(newRect);
  updateCounter();
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
  }
});

// find the button
var deleteBody = document.getElementById("delete-body");
// add 'double click' event handler
deleteBody.addEventListener("dblclick", function () {
  // find the body element
  var body = document.querySelector("body");
  // remove it
  body.remove();
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
