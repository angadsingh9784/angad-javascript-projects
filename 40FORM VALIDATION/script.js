const forms=document.querySelector('form');

const user=document.querySelector('#username');
const email=document.querySelector('#email');
const password1=document.querySelector('#password1')
const password2=document.querySelector('#password2');

const btn=document.querySelector('button');

const sml=document.querySelector('small');




forms.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkInput();
});


function checkInput(){
   
    let u=user.value.trim();//trim vaccant spaces
    let e=email.value.trim();
    let p1=password1.value.trim();
    let p2=password2.value.trim();
    
 
    if(u===''){
        errorMessage()
    }else{

    }
}