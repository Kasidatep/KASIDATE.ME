function getpath() {  
var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf('/')+1);
alert(filename);
}


function get() {  
    var file = document.getElementById("file").value;  
    let url3 = new URL(document.file.value, 'https://kasidate.me/file/display/');

alert(url3); 
}