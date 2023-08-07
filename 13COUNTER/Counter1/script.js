let x = document.querySelector('.counter');
let y = document.querySelector('.btn');
let z = document.querySelector('.btn2');

const a=setInterval(contra, 100);
let count = 0;
function contra() {
    x.innerHTML = ++count;
    z.addEventListener('click', () => {

        clearInterval(a)
    })
    
}

y.addEventListener('click', () => {

    x.innerHTML=0;
})



