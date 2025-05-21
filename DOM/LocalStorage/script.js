let editIndex = null;

function formSubmit(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let city = document.getElementById("city").value;

    const formData = {name, age, city};

    let students = JSON.parse(localStorage.getItem("formData")) || [];

    students.push(formData);
    localStorage.setItem("formData", JSON.stringify(students));

    // console.log(formData);
    display();
    
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("city").value = "";
}

function display() {
    let students = JSON.parse(localStorage.getItem("formData")) || [];
    const tableBody = document.getElementById("table_body");
    tableBody.innerHTML = "";

    students.forEach((student, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
        <td>${student.name}</td>
        <td>${student.age}</td>
        <td>${student.city}</td>
        <td>
            <button class = "action-btn edit-btn">EDIT</button>
            <button class = "action-btn delete-btn" onclick="deleteData(${index})">DELETE</button>
        </td>
        `;

        tableBody.appendChild(row);
    })
}

function deleteData(index) {
    const students = JSON.parse(localStorage.getItem("formData")) || [];
    students.splice(index, 1);

    localStorage.setItem("formData", JSON.stringify(students));
    display();
}

