document.onreadystatechange=function(){
    if(document.readyState!=="complete"){
        setTimeout(()=>{
            document.querySelector("body").style.visibility="hidden";
            document.querySelector("img").style.visibility="visible"
        })
    }else{
       
            setTimeout(()=>{
            document.querySelector("body").style.visibility="visible";
            document.querySelector("img").style.visibility="hidden"
        },5000)
    }
};
