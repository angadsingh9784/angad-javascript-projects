const links=document.querySelectorAll('a');


links.forEach((elements)=>{
// console.log(elements)
elements.addEventListener('click',()=>{
if(elements.classList.contains('link')){
    elements.classList.remove('link');
}else{
    elements.classList.add('link');
}

// elements.classList.toggle('link');

});
})