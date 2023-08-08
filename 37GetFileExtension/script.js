const file=document.querySelector('#fileInp')
const disMsg=document.querySelector('#message');


file.addEventListener('input',()=>{
 
    // console.log(file.files.length);//gives 1
    if(file.files.length){
        let fileExtension=file.files[0].name.split(".").pop();
        disMsg.innerHTML=fileExtension;
    }else{
        disMsg.innerHTML="Please select a file"
    }
})
