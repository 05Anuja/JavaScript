const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");
  // console.log(result)
  result.style.display = "block";

  if (height === 0 || height <= 0 || isNaN(height)) {
    result.innerHTML = `Please enter a valid height`;
  } else if (weight === 0 || weight <= 0 || isNaN(weight)) {
    result.innerHTML = `Please enter a valid weight`;
  } else {
    const bmi = parseFloat((weight / Math.pow(height, 2)) * 10000);
    result.innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;
    if (bmi < 18.6) {
        result.innerHTML += `<br> You are underweight`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        result.innerHTML += `<br> Your weight is in normal range`;
    } else {
        result.innerHTML += `<br> You are overweight`
    }
  }
});
