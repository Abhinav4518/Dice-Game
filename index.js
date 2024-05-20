var n=Math.random();
n=(n*6)+1;
var randomNumber=Math.floor(n);
var randomDice="dice"+randomNumber+".png";
var randomImage="images/"+randomDice;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImage);
var n1=Math.random();
n1=(n1*6)+1;
var randomNumber1=Math.floor(n1);
var randomDice1="dice"+randomNumber1+".png";
var randomImage1="images/"+randomDice1;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImage1);
if(randomNumber>randomNumber1){
    document.querySelector("h1").innerHTML="Player 1 Wins.";
}
else if(randomNumber1>randomNumber){
    document.querySelector("h1").innerHTML="Player 2 wins. ";
}
else{
    document.querySelector("h1").innerHTML="Both of You are NOOB.";
}