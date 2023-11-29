// Function to save student data to local storage
function saveStudentData(studentList) {
  const namespace = "yourProgramNamespace_";
  localStorage.setItem(namespace + "studentList", JSON.stringify(studentList));
}

// Function to retrieve and display student data from local storage

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
// Function to clear the local storage for your program
function clearLocalStorage() {
  const namespace = "yourProgramNamespace_";
  localStorage.removeItem(namespace + "studentList");
}

displayStudents();
