window.onscroll = function() {scrollBar()};

function scrollBar() {
  var thisScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var myScroll = (thisScroll / height) * 100;
  document.getElementById("scrollBar").style.width = myScroll + "%";
}