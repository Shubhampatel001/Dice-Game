var randomNumber1 = Math.floor(Math.random() * 6)+1;
var randomNumber2 = Math.floor(Math.random() * 6)+1;
var diceImg1="images/dice"+randomNumber1+".png";
var diceImg2="images/dice"+randomNumber2+".png";
document.querySelector("img.img1").setAttribute("src",diceImg1);
document.querySelector("img.img2").setAttribute("src",diceImg2);


if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML="🚩Player1 WINS";
}
else if (randomNumber1<randomNumber2) {
    document.querySelector("h1").innerHTML="Player2 WINS🚩";
}
else{
    document.querySelector("h1").innerHTML="🚩Draw🚩";
}