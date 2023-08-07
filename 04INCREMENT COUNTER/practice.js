const counters=document.querySelectorAll('.counter');
counters.forEach(function(counter){
    // console.log(counter)
    counter.innerHTML=0;

    const counterUpdate=()=>{
        const targetCount=Number(counter.getAttribute('data-target'));
        // console.log(targetCount);
        // console.log(typeof(targetCount));

        const startingCount=Number(counter.innerHTML);
        const incrementCount=targetCount/100;

        if(startingCount<targetCount){
            counter.innerHTML=`${startingCount+incrementCount}`;
            setTimeout(counterUpdate,10)
        }else{
            counter.innerHTML=`${targetCount}`;
        }


    }
    counterUpdate();


    
});

