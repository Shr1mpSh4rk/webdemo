function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "nhom6" && password == "123456") {
        window.open("blog.html", "_blank");
    } else {
        document.getElementById("errorMsg").innerHTML = "Tên đăng nhập không đúng vui lòng nhập lại.";
    }
}