const inputWords=document.querySelector('#test');
const noOfwords=document.querySelector('#word');
const noOfchars=document.querySelector('#char');

inputWords.addEventListener('input',()=>{
    let inpWrds=inputWords.value;
    if(inpWrds!==""){
        let chrlen=charLength(inpWrds);
        let wrdCount=wrdsFunc(inpWrds);

        noOfwords.innerHTML=`Number of Words :${wrdCount}`;
        noOfchars.innerHTML=`Number of Characters : ${chrlen}`;
    }
})


function wrdsFunc(inpWrds){
    let wrds=0;
    for(i=0;i<inpWrds.length;i++){
        if(inpWrds[i]===" "|| i===inpWrds.length-1){
            wrds++;
        }
    }
    let wr=wrds;
    return wr;
}


function charLength(inpWrds){
    let len=0;
    for(i=0;i<inpWrds.length;i++){
        len++;
    }
    let ren=len;
    return ren;
}