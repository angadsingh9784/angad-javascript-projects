



function myFunction(){
var randomNum=Math.floor(Math.random()*6)+1;
document.getElementById('img1').setAttribute('src',`./images/dice${randomNum}.png`);

var randomNum1=Math.floor(Math.random()*6)+1;
document.getElementById('img2').setAttribute('src',`./images/dice${randomNum1}.png`);

if(randomNum>randomNum1){
    document.querySelector("h1").textContent="Player 1 wins";
}
else if(randomNum<randomNum1){
    document.querySelector("h1").textContent="Player 2 wins";
}
else if(randomNum=randomNum1){
    document.querySelector("h1").textContent="DRAW MATCH";
}
}