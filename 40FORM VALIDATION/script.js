const forms=document.querySelector('form');

const user=document.querySelector('#username');
const email=document.querySelector('#email');
const password1=document.querySelector('#password1')
const password2=document.querySelector('#password2');

const btn=document.querySelector('button');






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
        errorMessage(user,"Username should not be empty")
    }else{
        sucessMessage(user)
    }

    if(e===''){
        errorMessage(email,"Email should not be empty")
    }else{
        sucessMessage(email)
    }
    if(p1===''){
        errorMessage(password1,"Password 1 should not be empty")
    }else{
        sucessMessage(password1)
    }

    if(p2===''){
        errorMessage(password2,"Password 2 should not be empty")
    }else{
        sucessMessage(password2)
    };

}

function errorMessage(input,line){
    const gn=input.parentElement;
    const small=gn.querySelector('small');
    small.innerText=line;
}
// function errorMessage(input,line){
//     const gn=input.parentElement;
//     const small=gn.querySelector('small');
//     small.innerText=line;
// }
function sucessMessage(input){
    const a=input.parentElement;
    let b=a.querySelectorAll('i')[0];
    let c=a.querySelectorAll('i')[1];

    c.style.visibilty="visible"
    b.style.visibilty="visible";
    console.log(b)

    a.className="form-control success";
    
}
