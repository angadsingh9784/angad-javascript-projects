const button=document.querySelector('.btn');
const button2=document.querySelector('.btn2');
const video=document.querySelector('.video-container')


button.addEventListener('click',()=>{
    video.pause();
    button.style.display="none"
    button2.style.display="block";
    button2.innerHTML="PAUSE";
})

button2.addEventListener('click',()=>{
        video.play();
        console.log('k');
        button2.style.display="none";
        button.style.display="block"
        button.innerHTML="PLAY";
    })