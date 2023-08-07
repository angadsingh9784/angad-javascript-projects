const counters=document.querySelectorAll('.counter');

counters.forEach((counter)=>{
    // console.log(counter);


    counter.innerHTML=0;

    const updateCounter=()=>{
        const targetCount=+counter.getAttribute('data-target');//gives number
        // console.log(targetCount)//type = string

        const startingCount=Number(counter.innerHTML);

        const incr=targetCount/100;

        if(startingCount<targetCount){
            counter.innerHTML=`${startingCount+incr}`
            setTimeout(updateCounter,10)    
        }else{
            counter.innerHTML=targetCount;
        }
    }


    updateCounter();
})