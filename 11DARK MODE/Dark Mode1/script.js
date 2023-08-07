const drkMod=document.querySelector('#change');

drkMod.addEventListener('click',myFunction)
function myFunction(){
 
    if(document.querySelector('body').classList.contains("bdy")){
        document.querySelector('body').classList.remove("bdy");
    }else{
        document.querySelector('body').classList.add("bdy");
        document.documentElement.style.setProperty('--font-color','#ffffff');
        document.querySelector('#change').innerHTML="OFF";
        

    }
}