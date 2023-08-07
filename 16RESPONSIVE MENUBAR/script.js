const webLogo = document.querySelector('.menu-logo');
const allLinks = document.querySelectorAll('li');

// console.log(screen.width)
// console.log(typeof(screen.width))

if (screen.width < 800) {

    if(webLogo.classList.contains('menu-logo')){
        webLogo.classList.remove('menu-logo');
        webLogo.classList.add('menu-logo-up')
    }

    
} else {
    console.log('no');
}

webLogo.addEventListener('click',()=>{
    console.log('hy')
})






// allLinks.forEach(element => {
//     // console.log(element);
  
       
   
// });