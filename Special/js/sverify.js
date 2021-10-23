function sVerify() {
  var username = document.getElementById("username").value;
  var pw = document.getElementById("password").value;
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
   else if (username == "admin" && pw == "@12345678") {
    document.getElementById("message").innerHTML =
    "**Successfully Log In "+ document.getElementById("username").value;
    window.open("https://kasidate.me/special/2/list");
    return false;
  }

  else {
    document.getElementById("message").innerHTML =
      "ไม่พบข้อมูลในระบบ";
  }
}
