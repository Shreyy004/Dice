// Generate a random number between 1 and 6
var randomNumber1 = Math.floor(Math.random() * 6)+1;

var diceimage="dice" + randomNumber1+".png";
var randomimagesource="images/" + diceimage;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomimagesource);

//dice2
var randomnumber2=Math.floor(Math.random()*6)+1;

var randomimagesource2="images/dice" + randomnumber2 +".png"

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimagesource2);

if(randomNumber1>randomnumber2)
{
   document.querySelector("h1").innerHTML="Player 1 Wins!" 
}
else if(randomnumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins!"

}
else{
    document.querySelector("h1").innerHTML="Draw!"
}

