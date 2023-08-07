var colors=['red','blue','grey','yellow','purple','pink'];
let btn=document.querySelector('.btnClick');
btn.addEventListener('click',()=>{

let ramdomNum=Math.floor(Math.random()*colors.length);

document.body.style.background=colors[ramdomNum];


})