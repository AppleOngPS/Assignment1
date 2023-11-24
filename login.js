function login() {
  var username = document.getElementById("email").value;
  var password = document.getElementById("pwd").value;
  // filter function is to make sure it is the correct format.. eg example@gmail.com
  var filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  // if user did not fill up this part it will pop the alert
  if (username == "") {
    alert("please enter email.");
    // if user did not fill up this part it will pop the alert
  } else if (password == "") {
    alert("enter the password");
    // if the email is wrong format it will pop out invaild email,please try again
  } else if (!filter.test(username)) {
    alert("invaild email,please try again!.");
    // the password need to be 6 charater/digit length long
  } else if (password.length < 6 || password.length > 6) {
    alert("Password min and max length is 6.");
  } else {
    // if all is true , it will pop out login succesfull
    alert("Login Successfull!");
  }
  // testing to the real yale school of art website
  window.location.href = "https://www.art.yale.edu/";
}
