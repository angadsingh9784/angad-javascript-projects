const buttons=document.querySelectorAll('button');
const display=document.querySelector('.counter');


let x=0;
buttons.forEach(function(elem){
 console.log(elem)
 elem.addEventListener('click',()=>{
    if(elem.classList.contains('btn1')){
        display.innerHTML=x++;
       }
       else if(elem.classList.contains('btn2')){
        display.innerHTML=x--;
       }
       else{
        display.innerHTML=0;
       }
 })
});
 