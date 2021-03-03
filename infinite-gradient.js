var lastLinearGradientColor;
var count = 10;

function randomNumber(min = 0, max = 255) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

function randomColor() {
  var r = randomNumber();
  var g = randomNumber();
  var b = randomNumber();
  return "rgb(" + r + "," + g + "," + b + ")";
}

function randomLinearGradient(angle = 90, firstColor, lastColor) {
  var c1 = firstColor || lastLinearGradientColor || randomColor();
  var c2 = randomColor();
  var c3 = lastColor || randomColor();
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

function init() {
  var b = document.querySelector(".grad-box");
  var firstColor = randomColor();
  for (var i = 0; i < count; i++) {
    var newRect = document.createElement("div");
    newRect.classList.add("fancy-rect");
    newRect.style.background =
      i === 0
        ? randomLinearGradient(90, firstColor)
        : i === count - 1
        ? randomLinearGradient(90, undefined, firstColor)
        : randomLinearGradient();
    newRect.style.width = randomNumber(200, 400) + "px";
    newRect.style.minWidth = newRect.style.width;
    b.appendChild(newRect);
  }
  b.querySelectorAll(".fancy-rect").forEach((fr, i) => {
    var f = fr.cloneNode();
    b.appendChild(f);
  });
  requestAnimationFrame(() => b.classList.add("grad-box-ready"));
}

window.addEventListener("mousemove", (e) => {
  var x = 1 - e.screenX / window.innerWidth;
  document.querySelector(".grad-box").style.animationDuration = x * 60 + "s";
});

init();
