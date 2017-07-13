var randomNumber = Math.floor(Math.random()*100) + 1;
console.log(randomNumber);

var guessedNumber = document.querySelector(".guessedNumber");
var guessSubmit = document.querySelector(".guessSubmit");

var guesses = document.querySelector(".guesses");
var lastResult = document.querySelector(".lastResult");
var lowOrHi = document.querySelector(".lowOrHi");

var guessCount = 1;
var resetButton ;

function checkNumber(){
    var number = Number(guessedNumber.value);
    if(guessCount === 1)
    {
        guesses.textContent = "Previous Guesses : ";
    }

    guesses.textContent += number + " ";

    if(number === randomNumber)
    {
        lastResult.textContent = "Congratulations !!! Your Guess is right.";
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = " ";
        restart();
    }
    else if(guessCount === 10)
    {
        lastResult.textContent = " !!! GAME OVER !!! ";
        lowOrHi.textContent = " ";
        restart();
    }
    else
    {
        lastResult.textContent = "Wrong !!! ";
        lastResult.style.backgroundColor = "red";
        if(number > randomNumber)
        {
            lowOrHi.textContent = "Your guess is Greater.";
        }
        else if(number < randomNumber)
        {
            lowOrHi.textContent = "Your guess is Smaller.";
        }
    }
    guessCount++;
    guessedNumber.value = " ";
    guessedNumber.focus();
}

guessSubmit.addEventListener("click",checkNumber);

function restart(){
    guessedNumber.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement("button");
    resetButton.textContent = "Restart Game";
    document.body.appendChild(resetButton);
    resetButton.addEventListener("click",reset);
}

function reset(){
    guessCount = 1;
    
    var results = document.querySelectorAll(".results p");
    for(var i=0 ; i < results.length ; i++)
    {
        results[i].textContent = " ";
    }

    resetButton.parentNode.removeChild(resetButton);
    guessedNumber.disabled = false;
    guessSubmit.disabled = false;
    guessedNumber.value = " ";
    guessedNumber.focus();
    lastResult.style.backgroundColor = "white";

    randomNumber = Math.floor(Math.random() * 100) + 1;
}