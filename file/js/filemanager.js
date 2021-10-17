function verifyPassword() {  
    var file = document.getElementById("file").value;  
    var pw = document.getElementById("pswd").value;  
  //check empty password field  
  if(pw == "") {  
     document.getElementById("message").innerHTML = "**Fill the password please!";  
     return false;  
  }  
   
 //minimum password length validation  
  if(pw.length < 8) {  
     document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";  
     return false;  
  }  
  
//maximum length of password validation  
  if(pw.length > 15) {  
     document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";  
     return false;  
  } 
  if(pw == "@Kasidate19") {  
    if(file == "bankdsl2021"){
      document.getElementById("message").innerHTML = " ผลการค้นหาทั้งหมดที่พบของ : " + document.getElementById("file").value  ;
      document.getElementById("showcon").innerHTML = '<iframe src="https://kasidate.me/file/display/test.html" width="100%" height="100%"></iframe>';
     return false;  
    }
    else{
        document.getElementById("message").innerHTML = "**ไม่พบไฟล์ที่ร้องขอ";  
    }
  }  
  
  else {  
    document.getElementById("message").innerHTML = "**รหัสผ่านไม่ถูกต้อง";  
  }  
}   ;