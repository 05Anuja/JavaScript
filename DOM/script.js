let body = document.getElementsByTagName("body")[0];
let btn = document.getElementsByTagName("button")[0];

let colors = ["red", "blue", "brown", "black", "purple", "coral"];
let currentIndex = 0;

function bgColorChange() {
  body.style.backgroundColor = colors[currentIndex];
  btn.style.backgroundColor = colors[currentIndex];
  btn.innerText = colors[currentIndex];
  currentIndex += 1;
  currentIndex %= colors.length;
}

bgColorChange();
