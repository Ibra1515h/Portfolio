var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 7);

var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 7);

var path1 = "images/dice" + randomNumber1 + ".png";

var path2 = "images/dice" + randomNumber2 + ".png";

document.getElementById("img1").setAttribute("src", path1);

document.getElementById("img2").setAttribute("src", path2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}

else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}

else{
    document.querySelector("h1").innerHTML = "It's a Draw";
}