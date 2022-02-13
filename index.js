
let randomNumber1 = Math.floor(Math.random()* (6 - 1) + 1);
let randomNumber2 = Math.floor(Math.random()* (6 - 1) + 1);

document.querySelector(".img1").setAttribute("src","./images/dice"+randomNumber1+".png")
document.querySelector(".img2").setAttribute("src","./images/dice"+randomNumber2+".png")

if(randomNumber1 > randomNumber2){
    document.querySelector(".heading").innerHTML = "Player1 Won!";  
} 
else if(randomNumber2 > randomNumber1){
    document.querySelector(".heading").innerHTML = "Player2 Won!";  
}
else if (randomNumber1 === randomNumber2){
document.querySelector(".heading").innerHTML = "Draw!";   
} 


