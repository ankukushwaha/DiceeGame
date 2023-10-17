var num1 =  Math.round(Math.random()*6) + 1; 
var num2 =  Math.round(Math.random()*6) + 1; 
var element1 = document.querySelector(".img1");
var element2 = document.querySelector(".img2");

if(num1 === 1){
    element1.setAttribute("src","./images/dice1.png");
}
else if(num1 === 2){
    element1.setAttribute("src","./images/dice2.png");
}
else if(num1 === 3){
    element1.setAttribute("src","./images/dice3.png");
}
else if(num1 === 4){
    element1.setAttribute("src","./images/dice4.png");
}
else if(num1 === 5){
    element1.setAttribute("src","./images/dice5.png");
}
else{
    element1.setAttribute("src","./images/dice6.png");
}


if(num2 === 1){
    element2.setAttribute("src","./images/dice1.png");
}
else if(num2 === 2){
    element2.setAttribute("src","./images/dice2.png");
}
else if(num2 === 3){
    element2.setAttribute("src","./images/dice3.png");
}
else if(num2 === 4){
    element2.setAttribute("src","./images/dice4.png");
}
else if(num2 === 5){
    element2.setAttribute("src","./images/dice5.png");
}
else{
    element2.setAttribute("src","./images/dice6.png");1
}


if(num1 > num2){
    document.querySelector("h1").innerText = "🚩 Player 1 Wins!" ;
}
else if(num2 > num1) {
    document.querySelector("h1").innerText = "Player 2 Wins! 🚩";
}
else {
    document.querySelector("h1").innerText = "Its Draw!🌝 " ;
}

