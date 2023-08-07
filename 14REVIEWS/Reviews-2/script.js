let reviews=[
    {id:1,name:'Angad Singh',info:"para=Angad Singh"},
    {id:2,name:'Harsimar Kaur',info:"para=harsimar Singh"},
    {id:3,name:'Surjit Singh',info:"para=surjit Singh"},
    {id:4,name:'Ravinder Kaur',info:"para=ravinder Singh"},
    ];
    
    
    const persName=document.querySelector('#personName');
    const btn=document.querySelector('#btnNext');
    const persInfo=document.querySelector('#personInfo');
    const persImage=document.querySelector('#personImage');
    let currentItem = 0;



    window.addEventListener('DOMContentLoaded', function () {
        const item = reviews[currentItem];
        persName.textContent=item.name;
        persInfo.textContent=item.info;

      });
    

    function myFunc(person){
        const item = reviews[person];
        persName.textContent=item.name;
        persInfo.textContent=item.info;
        
    }



    btn.addEventListener('click',()=>{
        let a=currentItem++;
        if(a>reviews.length-1){
            currentItem=1;//repeat
        }
         myFunc(a)

    })