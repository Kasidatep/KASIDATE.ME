function sVerify() {
  var username = document.getElementById("user").value;
  var pw = document.getElementById("pswd").value;
  //check empty password field
  if (pw == "") {
    document.getElementById("message").innerHTML =
      "<pre>**Fill the password please!</pre>";
    return false;
  }
  //minimum password length validation
  if (pw.length < 8) {
    document.getElementById("message").innerHTML =
      "**Password length must be atleast 8 characters";
    return false;
  }
  //maximum length of password validation
  if (pw.length > 15) {
    document.getElementById("message").innerHTML =
      "**Password length must not exceed 15 characters";
    return false;
  }
   else if ( pw == "@pswd") {
    document.getElementById("message").innerHTML =
    "**Successfully Log In "+ document.getElementById("username").value;
    window.open("./lock.html");
  }

  else {
    document.getElementById("message").innerHTML =
      "ไม่พบข้อมูลในระบบ";
  }
}
