const buttons=document.querySelector('.btn-container');
const infoPara=document.querySelectorAll('.fist');


buttons.addEventListener('click',(e)=>{
    const id=e.target.dataset.id;
    if(id){
        infoPara.forEach((infoPara)=>{
            infoPara.classList.remove('active');
        });
        const element=document.getElementById(id)
        console.log(element)
        element.classList.add('active');
    }
})