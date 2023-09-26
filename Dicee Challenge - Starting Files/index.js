var randomNumber1=Math.floor(Math.random()*6)+1; //1-6
var randomDiceImage = "dice"+randomNumber1 + ".png";//dicel.png - dice6.png
var randomImageSource= "images/" + randomDiceImage; //images/dicel.png images/dice6.png
var imagel = document.querySelectorAll("img")[0];
imagel.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage = "dice"+randomNumber2+".png";
var randomImageSource2 = "images/"+randomDiceImage;
var imagel = document.querySelectorAll("img")[1];
imagel.setAttribute("src", randomImageSource2);


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Hey 1st Player win";
}else{
    document.querySelector("h1").innerHTML="Hey 2nd Player win";
}