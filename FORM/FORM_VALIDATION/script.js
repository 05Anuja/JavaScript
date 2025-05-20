function FormSubmit(event) {
    event.preventDefault();
    console.log(event);

    let fName = document.getElementById("fname").value;
    if (fName === "") {
        document.getElementsByClassName("error")[0].innerHTML = "This field is required";
    } else {
        document.getElementsByClassName("error")[0].innerHTML = "";
        console.log(fName);
    }

    let lName = document.getElementById("lname").value;
    if (lName === "") {
        document.getElementsByClassName("error")[1].innerHTML = "This field is required";
    } else {
        document.getElementsByClassName("error")[1].innerHTML = "";
        console.log(lName);
    }

    let email = document.getElementById("email").value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === "") {
        document.getElementsByClassName("error")[2].innerHTML = "This field is required";
    } else if (!emailPattern.test(email)) {
        document.getElementsByClassName("error")[2].innerHTML = "Invalid Email";
    } else {
        document.getElementsByClassName("error")[2].innerHTML = "";
        console.log(email);
    }

    let contact = document.getElementById("contact").value;
    const contactPattern = /^[6-9]\d{9}$/;
    if (contact === "") {
        document.getElementsByClassName("error")[3].innerHTML = "This field is required";
    } else if (!contactPattern.test(contact)) {
        document.getElementsByClassName("error")[3].innerHTML = "Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9";
    } else {
        document.getElementsByClassName("error")[3].innerHTML = "";
        console.log(contact);
    }

    let password = document.getElementById("password").value;
    const passwordPattern =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (password === "") {
        document.getElementsByClassName("error")[4].innerHTML = "This field is required";
    } else if (!passwordPattern.test(password)) {
        document.getElementsByClassName("error")[4].innerHTML = "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character";
    } else {
        document.getElementsByClassName("error")[4].innerHTML = "";
        console.log(password);
    }

    let confirmPassword = document.getElementById("confirmPassword").value;
    if (confirmPassword === "") {
        document.getElementsByClassName("error")[5].innerHTML = "This field is required";
    } else if (confirmPassword !== password) {
        document.getElementsByClassName("error")[5].innerHTML = "Password does not match";
    } else {
        document.getElementsByClassName("error")[5].innerHTML = "";
        console.log(confirmPassword);
    }
}