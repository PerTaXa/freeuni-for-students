"use strict";

document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("button").addEventListener("click", function () {
    var form = document.getElementById('login-info');
    var data = new FormData(form);

    if (data.get("email") === "admin@gmail.com" && data.get("password") === "admin") {
      window.location.replace("main.html");
    } else {
      document.getElementsByClassName("incorrect")[0].style.display = 'block';
    }
  });
});