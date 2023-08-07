const menu=[
{
    id:1,
    product_name:"Chole Bhautre",
    product_price:"23",
    product_desc:"i am chole bhutre i am very tasty please eat me"
},
{
    id:2,
    product_name:"aloo Bhautre",
    product_price:"43",
    product_desc:"i am aloo bhutre i am very tasty please eat me"
},
{
    id:3,
    product_name:"Paneer Bhautre",
    product_price:"23",
    product_desc:"i am Paner bhutre i am very tasty please eat me"
},
{
    id:4,
    product_name:"pyazz Bhautre",
    product_price:"23",
    product_desc:"i am pyazz bhutre i am very tasty please eat me"
}
];
// console.log(menu[0])

const btnContainer=document.querySelector('.btn-container');
const menuItems=document.querySelector('.menu-items');
// console.log(menuItems)

window.addEventListener('DOMContentLoaded',function(){
displayMenuItems(menu);
});

function displayMenuItems(menuItems){
// console.log(menuItems)
let displayMenu=menuItems.map(function(item){
// console.log(item)
return`  <div class="menu-items">
<header>
    <h4>${item.product_name}</h4>
    <h4 class="price">${item.product_price}</h4>
</header>
<p>${item.product_desc}</p>
</div>`;
});
displayMenu=displayMenu.join("");
console.log(displayMenu);
menuItems.innerHTML=displayMenu

}
