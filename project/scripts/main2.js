/*
var myButton = document.querySelector("button");
var heading = document.querySelector("h1");

function setUsername()
{
    var myname = prompt("Please enter your name.");
    localStorage.setItem("name",myname);
    heading.textContent = "Good day...."+myname;
}

if(!localStorage.getItem("name"))
{
    setUsername();
}
else
{
    var storedName = localStorage.getItem("name");
    heading.textContent = "Good day...."+storedName;
}

myButton.onclick = function()
{
    setUsername();
}
*/

/*
var para = document.querySelector("p");
para.onclick = function(){
    var name = prompt("Please Enter name .");
    para.textContent = "Player : "+name;
}
*/

function createPara(){
    var para = document.createElement("p");
    para.textContent = "You have clicked the button.";
    document.body.appendChild(para);
}

var myButton = document.querySelector("button");

myButton.onclick = function(){
    createPara();
}

// myButton.addEventListener("click",createPara);