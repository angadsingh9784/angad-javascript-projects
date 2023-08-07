let reviews=[
{id:1,name:'Angad Singh',info:"para=Angad Singh"},
{id:2,name:'Harsimar Kaur',info:"para=harsimar Singh"},
{id:3,name:'Surjit Singh',info:"para=surjit Singh"},
{id:4,name:'Ravinder Kaur',info:"para=ravinder Singh"},
];




const persName=document.querySelector('#personName');
const btn=document.querySelector('#btnNext');
const persInfo=document.querySelector('#personInfo');
btn.addEventListener('click',()=>{
    var randomPerson=Math.floor(Math.random()*4);
    persName.innerHTML=`${reviews[randomPerson].name}`;
    persInfo.innerHTML=`${reviews[randomPerson].info}`;
});
