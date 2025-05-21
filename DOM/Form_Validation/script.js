const signInBtn = document.getElementById('signInBtn');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');

// signInBtn.addEventListener('click', () => {
//   overlay.classList.add('active');
// });

function signInFunc() {
    overlay.classList.add('active');
}

// closeBtn.addEventListener('click', () => {
//   overlay.classList.remove('active');
// });

function closeBtnFunc() {
    overlay.classList.remove('active');
}

// Optional: Close form when clicking outside it
// overlay.addEventListener('click', (e) => {
//   if (e.target === overlay) {
//     overlay.classList.remove('active');
//   }
// });



function formSubmit(event) {
    event.preventDefault();
    let userName = document.getElementById("username").value;
    const usernameRegex  = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*_)[a-zA-Z0-9_]{3,16}$/;
    if (userName === "") {
        document.getElementsByClassName("error")[0].innerHTML = "This field is required";
    } else if (!usernameRegex.test(userName)) {
        document.getElementsByClassName("error")[0].innerHTML = "Username must be 3–16 characters and must contain letters, numbers, and underscores only.";
    } else {
        document.getElementsByClassName("error")[0].innerHTML = "";
        console.log(userName);
    }

    let password = document.getElementById("password").value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (password === "") {
        document.getElementsByClassName("error")[1].innerHTML = "This field is required";
    } else if (!passwordRegex.test(password)) {
        document.getElementsByClassName("error")[1].innerHTML = "Password must be at least 8 characters long and must include uppercase, lowercase, number, and special character.";
    } else {
        document.getElementsByClassName("error")[1].innerHTML = "";
        console.log(password);
    }

    let confirmPassword = document.getElementById("confirmPassword").value;
    if (confirmPassword === "") {
        document.getElementsByClassName("error")[2].innerHTML = "This field is required";
    } else if (confirmPassword !== password) {
        document.getElementsByClassName("error")[2].innerHTML = "Password does not match";
    } else {
        document.getElementsByClassName("error")[2].innerHTML = "";
        console.log(confirmPassword);
    }

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirmPassword").value = "";
}