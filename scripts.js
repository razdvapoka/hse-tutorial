console.log("hey");

function destroyHandler(e) {
  e.preventDefault();
  e.stopPropagation();
  e.target.style.display = "none";
}

function makeClickDestructive(e) {
  e.stopPropagation();
  document
    .querySelectorAll("*")
    .forEach((c) => c.addEventListener("click", destroyHandler));
}

function makeClickUndestructive() {
  document
    .querySelectorAll("*")
    .forEach((c) => c.removeEventListener("click", destroyHandler));
}

function randomNumber(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function randomColor() {
  var red = randomNumber(0, 255);
  var green = randomNumber(0, 255);
  var blue = randomNumber(0, 255);
  var components = [red, green, blue].join(",");
  return "rgb(" + components + ")";
}

function randomGrad() {
  var c1 = randomColor();
  var c2 = randomColor();
  var c3 = randomColor();
  var colors = [c1, c2, c3].join(",");
  return "linear-gradient(90deg," + colors + ")";
}

function colorize() {
  document
    .querySelectorAll(".item")
    .forEach((item) => (item.style.backgroundColor = randomColor()));
}

function bringThemBack() {
  document
    .querySelectorAll(".item")
    .forEach((item) => (item.style.display = "flex"));
}

function initCellHandlers() {
  document.querySelectorAll(".grid > div").forEach((cell) =>
    cell.addEventListener("click", function (e) {
      this.style.background = randomGrad();
    })
  );
}

function addItemHandlers(item, index) {
  var span = item.querySelector("span");
  item.addEventListener("mouseenter", function (e) {
    span.innerText = this.style.backgroundColor;
  });
  item.addEventListener("mouseleave", function (e) {
    span.innerText = index + 1;
  });
}

function initItemHints() {
  document.querySelectorAll(".item").forEach(addItemHandlers);
}

function addItem() {
  var count = document.querySelectorAll(".item").length;
  var item = document.createElement("div");
  var span = document.createElement("span");
  span.innerText = count + 1;
  item.appendChild(span);
  item.classList.add("item");
  document.querySelector(".parent").appendChild(item);
  addItemHandlers(item, count);
}

function init() {
  document
    .getElementById("destroy")
    .addEventListener("click", makeClickDestructive);

  document
    .getElementById("undestroy")
    .addEventListener("click", makeClickUndestructive);

  document.getElementById("colorize").addEventListener("click", colorize);
  document.getElementById("back").addEventListener("click", bringThemBack);
  document.getElementById("new").addEventListener("click", addItem);
  initCellHandlers();
  initItemHints();
}

init();
