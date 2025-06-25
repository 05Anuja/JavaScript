// Generating a Random Color

const randomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i <= 5; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let colorChanger;

document.querySelector("#startBtn").addEventListener("click", () => {
  if (!colorChanger) {
    colorChanger = setInterval(() => {
      let color = randomColor();
      console.log(color);
      document.body.style.backgroundColor = color;
    }, 1000);
  }
});

document.querySelector("#stopBtn").addEventListener("click", () => {
  clearInterval(colorChanger);
  colorChanger = null;
});
