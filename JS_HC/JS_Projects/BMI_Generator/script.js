
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const bmi = parseFloat((weight/ (Math.pow(height,2))) * 10000);
    // console.log(bmi);
    const result = document.querySelector("#result");
    // console.log(result)
    result.style.display ="block"

    result.innerHTML += `Your BMI is: ${bmi.toFixed(2)}`;
})
