function addMore(){
    document.getElementById('error').innerHTML="Please Enter Value";
    let names=document.getElementById('name').value;
    if(names==""){
        document.getElementById('error').innerHTML="Please Enter Value";

    }else{
        let box=document.getElementById('box');
        let li=document.createElement('li');
        li.textContent=names;

        let a=document.createElement('a');
        a.textContent="x";
        a.href="javascript:void(0)";
        a.className="remove";
        li.appendChild(a)
        // box.appendChild(li);//niche add krega
        
        let pos=box.firstElementChild;
        if(pos==null){
            box.appendChild(li);
        }else{
            box.insertBefore(li,pos);
        }
    }
    document.getElementById('name').value="";
}
    let btn=document.querySelector('ul');
    btn.addEventListener('click',(e)=>{
    let box=document.getElementById('box');
    let li=e.target.parentNode;
    box.removeChild(li);
})


