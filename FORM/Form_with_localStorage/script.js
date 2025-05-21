let editIndex = null;

function formSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();
  const city = document.getElementById("city").value.trim();

  const formData = { name, age, city };

  let students = JSON.parse(localStorage.getItem("formData")) || [];

  if (editIndex === null) {
    students.push(formData); // CREATE
  } else {
    students[editIndex] = formData; // UPDATE
    editIndex = null;
  }

  localStorage.setItem("formData", JSON.stringify(students));
  displayData();

  // Clear form
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("city").value = "";
}

function displayData() {
  const students = JSON.parse(localStorage.getItem("formData")) || [];
  const tableBody = document.getElementById("table_body");

  tableBody.innerHTML = "";

  students.forEach((student, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${student.name}</td>
      <td>${student.age}</td>
      <td>${student.city}</td>
      <td>
        <button class="action-btn edit-btn" onclick="editData(${index})">Edit</button>
        <button class="action-btn delete-btn" onclick="deleteData(${index})">Delete</button>
      </td>
    `;

    tableBody.appendChild(row);
  });
}

function editData(index) {
  const students = JSON.parse(localStorage.getItem("formData")) || [];
  const student = students[index];

  document.getElementById("name").value = student.name;
  document.getElementById("age").value = student.age;
  document.getElementById("city").value = student.city;

  editIndex = index;
}

function deleteData(index) {
  const students = JSON.parse(localStorage.getItem("formData")) || [];
  students.splice(index, 1);

  localStorage.setItem("formData", JSON.stringify(students));
  displayData();
}