window.addEventListener("load",function(){
    var emp = JSON.parse(localStorage.getItem("employee"));
    var result = document.querySelector("body");
    for(var key in emp){
        result.innerHTML += key.toUpperCase() + " = "+emp[key]+"<br>";
    }
})
