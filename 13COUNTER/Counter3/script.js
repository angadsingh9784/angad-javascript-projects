const countNum=document.querySelectorAll('#counter')

countNum.forEach(function(elem){
//   console.log(elem);


    elem.innerHTML="0";

   

    function increase(){
        let startCounter=Number(elem.innerHTML);
        let b=+Number(elem.getAttribute('data-target'));
        let increment=Number(b/10);

        if(startCounter<b){
           elem.innerHTML=+elem.innerHTML+increment;
           setTimeout(increase,200)
            console.log(typeof(b))
        }else{
            elem.innerHTML=1000;
            
        }
    }
    increase();
})