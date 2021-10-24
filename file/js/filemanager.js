function verifyPassword() {  
  var file = document.getElementById("file").value;  
  var pw = document.getElementById("pswd").value;  
//check empty password field  
if(pw == "") {  
   document.getElementById("message").innerHTML = "<pre>**Fill the password please!</pre>";  
   return false;  
}  
 
//minimum password length validation  
if(pw.length < 8) {  
   document.getElementById("message").innerHTML = "<pre>**Password length must be atleast 8 characters</pre>";  
   return false;  
}  

//maximum length of password validation  
if(pw.length > 15) {  
   document.getElementById("message").innerHTML = "<pre>**Password length must not exceed 15 characters</pre>";  
   return false;  
} 
if(pw == "@Kasidate19") {  
  if(file == "test"){
    document.getElementById("message").innerHTML = "<pre> ผลการค้นหาทั้งหมดที่พบของ : " + document.getElementById("file").value  + " </pre>";
    document.getElementById("showcon").innerHTML = '<iframe src="/file/display/test.html"></iframe>';
   return false;  
  }
  if(file == "bankdsl2021"){
    document.getElementById("message").innerHTML = "<pre> ผลการค้นหาทั้งหมดที่พบของ : " + document.getElementById("file").value  + " </pre>";
    document.getElementById("showcon").innerHTML = '<iframe src="/file/display/bankdsl2021.html"></iframe>';
   return false;  
  
  }
  else{
      document.getElementById("message").innerHTML = "<pre>**ไม่พบไฟล์ที่ร้องขอ นี่คือไฟล์ที่เกี่ยวข้องทั้งหมดที่เราพบ</pre>";  
  }
}  

else {  
  document.getElementById("message").innerHTML = "<pre>**รหัสผ่านไม่ถูกต้อง</pre>";  
}  
}   ;