let colors = ['#db1032','#ffff00','#cf1dcf','#4b0082','#1cf11c','#ffa500'];
document.onmousemove=animate;


function animate(event){
// console.log(event)
let circle=document.createElement('circle');
circle.setAttribute('class','circle');
document.body.appendChild(circle);

circle.style.left=event.clientX+"px";
circle.style.top=event.clientY+"px";

var color = colors[Math.floor(Math.random() * colors.length)]; 
circle.style.borderColor=color;

circle.style.left = circle.offsetLeft - 20 + 'px';
circle.style.top = circle.offsetTop - 20 + 'px';
circle.style.color = color;
circle.style.width = "35px";
circle.style.height = "35px";
circle.style.borderWidth = "10px";
circle.style.transition = "all 1s linear 0s";
circle.style.opacity = 0;

}