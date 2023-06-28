function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
function scrollToTop() {
  document.documentElement.scrollTop = 0; // Di chuyển đến đầu trang cho trình duyệt Chrome, Firefox, IE và Opera
  document.body.scrollTop = 0; // Di chuyển đến đầu trang cho trình duyệt Safari
}
