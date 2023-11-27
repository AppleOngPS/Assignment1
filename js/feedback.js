function Student(stuName, stuEmail, stuSubject, stuMessage) {
  this.id = Date.now();
  this.name = stuName;
  this.email = stuEmail;
  this.subject = stuSubject;
  this.message = stuMessage;
}

// Function to refresh the student table
function refreshStudentTable() {
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

// Event listener for form submission
document.addEventListener("submit", function (event) {
  event.preventDefault();

  let stuName = document.getElementById("txtName").value;
  let stuEmail = document.getElementById("txtemail").value;
  let stuSubject = document.getElementById("txtsubject").value;
  let stuMessage = document.getElementById("txtMessage").value;

  let studentList = [];
  if (localStorage.getItem("studentList") !== null) {
    studentList = JSON.parse(localStorage.getItem("studentList"));
  }

  let newStudent = new Student(stuName, stuEmail, stuSubject, stuMessage);
  studentList.push(newStudent);
  localStorage.setItem("studentList", JSON.stringify(studentList));

  document.getElementById("myFrm").reset();

  // Call the refreshStudentTable function after storing a new student
  refreshStudentTable();
});

// Initial call to refreshStudentTable to display existing data on page load
refreshStudentTable();
