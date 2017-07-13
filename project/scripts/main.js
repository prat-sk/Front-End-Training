var myHeading = document.querySelector("h1");
myHeading.textContent = "Hello Hell!!";

var myHeadings = document.querySelectorAll("h1");
for (var index = 0; index < myHeadings.length; index++) {
    var myHeading = myHeadings[index];
    myHeading.textContent = "I am Loving It";
}

// var task = "jumping";
// if(task == "jumping")
// {
//     alert(task + " is fun ");
// }
// else
// {
//     alert(task + " is no fun ");
// }

function multiply(num1 , num2)
{
    var result = num1 * num2;
    return result;
}
console.log(multiply(6,9));
console.log(multiply(4,6));
console.log(multiply(2,6));
console.log(multiply(8,4));


// document.querySelector("html").onclick = function(){
//     alert(" Stop poking me......");
// }

var myImage = document.querySelectorAll("img");
myImage[0].onclick = function(){
    var mysrc = myImage[0].getAttribute("src");
    if(mysrc == "./images/running.png")
    {
        myImage[0].setAttribute("src","./images/guitar.jpeg");
    }
    else
    {
        myImage[0].setAttribute("src","./images/running.png");
    }
}
myImage[1].onclick = function(){
    var mysrc = myImage[1].getAttribute("src");
    if(mysrc == "./images/minions.jpg")
    {
        myImage[1].setAttribute("src","./images/any.jpg");
    }
    else
    {
        myImage[1].setAttribute("src","./images/minions.jpg");
    }
}
