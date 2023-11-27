function displayStudents() {
  let studentTable = document.getElementById("student-table-body");
  let studentList = [];
  let studentData = "";

  if (localStorage.getItem("studentList") !== null) {
    studentList = JSON.parse(localStorage.getItem("studentList"));

    for (let student of studentList) {
      studentData += `<tr><td>${student.name}</td><td>${student.email}</td><td>${student.subject}</td><td>${student.message}</td></tr>`;
    }

    studentTable.innerHTML = studentData;
  }
}

displayStudents();
