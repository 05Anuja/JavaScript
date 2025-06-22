// const white = document.querySelector("#white");
// const red = document.querySelector("#red");
// const green = document.querySelector("#green");
// const blue = document.querySelector("#blue");

// white.addEventListener("click", () => {
//     document.body.style.backgroundColor = "white";
// });

// red.addEventListener("click", () => {
//     document.body.style.backgroundColor = "red";
// });

// blue.addEventListener("click", () => {
//     document.body.style.backgroundColor = "blue";
// });

// green.addEventListener("click", () => {
//     document.body.style.backgroundColor = "green";
// });

// Another way to solve this problem

const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        switch(e.target.id) {
            case "red":
                document.body.style.backgroundColor = e.target.id;
                break;
            case "blue":
                document.body.style.backgroundColor = e.target.id;
                break;
            case "green":
                document.body.style.backgroundColor = e.target.id;
                break;
            case "white":
                document.body.style.backgroundColor = e.target.id;
                break;
            case "purple":
                document.body.style.backgroundColor = e.target.id;
            default:
                document.body.style.backgroundColor = e.target.id;
        }
    })
})