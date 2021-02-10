document.addEventListener("DOMContentLoaded", function(event) { 
    
    document.getElementById("button").addEventListener("click", function(){
        let form = document.getElementById('login-info');
        let data = new FormData(form);
        if (data.get("email") === "admin@gmail.com" && data.get("password") === "admin"){
            window.location.replace("main.html")
        } else { 
            document.getElementsByClassName("incorrect")[0].style.display = 'block'
        }
    })
});

