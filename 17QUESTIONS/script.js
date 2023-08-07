

const showingButton = document.querySelector('.plus-icon');
showingButton.addEventListener('click', () => {

    const showingPara = document.querySelector('.answer');
    
    if (showingPara.style.display === "none") {
        showingPara.style.display = "block"
    } else {
        showingPara.style.display="none"
    }
});
