var randomNumber1 = Math.floor(Math.random() * 3) + 1;

var randomRPSImage1 = "rps" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomRPSImage1;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 3) + 1;

var randomRPSImage2 = "rps" + randomNumber2 + ".png";

var randomImageSource = "images/" + randomRPSImage2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource);

//player1 win
if (randomNumber1 === 1 && randomNumber2 === 2){
    document.querySelector("h1").innerHTML = "Player 1 Wins 🎉";
} else if(randomNumber1 === 1 && randomNumber2 === 3){
    document.querySelector("h1").innerHTML = "Player 2 Wins ✨";
} else if(randomNumber1 === 2 && randomNumber2 === 1){
    document.querySelector("h1").innerHTML = "Player 2 Wins ✨";
} else if(randomNumber1 === 2 && randomNumber2 === 3){
    document.querySelector("h1").innerHTML = "Player 1 Wins 🎉";
} else if (randomNumber1 === 3 && randomNumber2 === 1){
    document.querySelector("h1").innerHTML = "Player 1 Wins 🎉";
} else if (randomNumber1 === 3 && randomNumber2 === 2){
    document.querySelector("h1").innerHTML = "Player 2 Wins ✨";
}
else{
    document.querySelector("h1").innerHTML = "Draw 🙌";
}