
document.addEventListener('keydown', (event) => {

    switch (event.key) {
        case 'w':
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom1 = new Audio("./sounds/tom-2.mp3");
            tom1.play();
            break;

        case "s":
            var tom1 = new Audio("./sounds/tom-3.mp3");
            tom1.play();
            break;

        case "d":
            var tom1 = new Audio("./sounds/tom-4.mp3");
            tom1.play();
            break;

        case "j":
            var tom1 = new Audio("./sounds/crash.mp3");
            tom1.play();
            break;

        case "k":
            var tom1 = new Audio("./sounds/kick-bass.mp3");
            tom1.play();
            break;

        case "l":
            var tom1 = new Audio("./sounds/snare.mp3");
            tom1.play();
            break;
    }
})

const drums = document.querySelectorAll('.drum');


function abc() {
    for (i = 0; i < 7; i++) {

        drums[0].addEventListener('click', () => {
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
        })
        drums[1].addEventListener('click', () => {
            var tom1 = new Audio("./sounds/tom-2.mp3");
            tom1.play();
        })
        drums[2].addEventListener('click', () => {
            var tom1 = new Audio("./sounds/tom-3.mp3");
            tom1.play();
        })

        drums[3].addEventListener('click', () => {
            var tom1 = new Audio("./sounds/tom-4.mp3");
            tom1.play();
        })
        drums[4].addEventListener('click', () => {
            var tom1 = new Audio("./sounds/crash.mp3");
            tom1.play();
        })
        drums[5].addEventListener('click', () => {
            var tom1 = new Audio("./sounds/snare.mp3");
            tom1.play();
        })
        drums[6].addEventListener('click', () => {
            var tom1 = new Audio("./sounds/kick-bass.mp3");
            tom1.play();
        })
    }


}
abc();
