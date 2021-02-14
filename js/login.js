document.addEventListener("DOMContentLoaded", function(event) { 
    alert("user: admin@gmail.com\npassword: admin")
    document.getElementById("button").addEventListener("click", function(){
        let form = document.getElementById('login-info');
        fetch('../json/login.json')
        .then(response => response.json())
        .then(data => {
            let formData = new FormData(form);
            if (formData.get("email") === data["username"] && formData.get("password") === data["password"]){
                window.location.replace("main.html")
            } else { 
                document.getElementsByClassName("incorrect")[0].style.display = 'block'
            }
        });
    })
});

