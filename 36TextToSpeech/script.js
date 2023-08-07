const texts=document.querySelector('#textarea');
const submitBtn=document.querySelector('#submitBtn');
const pauseBtn=document.querySelector('#pause');
const replayBtn=document.querySelector('#resume');

let audioSpeech;
submitBtn.addEventListener('click',()=>{
   
    pauseBtn.style.display = "block";
    replayBtn.style.display = "none";

    audioSpeech.text=texts.value;
    window.speechSynthesis.speak(audioSpeech);
});

replayBtn.addEventListener('click',()=>{
    pauseBtn.style.display = "block";
    replayBtn.style.display = "none";

    if(speechSynthesis.pause()){
        speechSynthesis.resume();
    }
})
pauseBtn.addEventListener('click',()=>{
    pauseBtn.style.display = "none";
    replayBtn.style.display = "block";

    if(speechSynthesis.speaking()){
        speechSynthesis.pause()
    }
})





window.onload = () => {
    pauseBtn.style.display = "none";
    replayBtn.style.display = "none";
  
    if ("speechSynthesis" in window) {
      audioSpeech = new SpeechSynthesisUtterance();
    } else {
      alert("Not Supported ");
    }
  };
