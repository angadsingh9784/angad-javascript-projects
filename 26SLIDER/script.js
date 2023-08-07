const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");

//we give slides because slides is given to several elements
slides.forEach((slide,index)=>{
    slide.style.left=`${index*100}%`;
});
let counter = 0;
nextBtn.addEventListener("click", function () {
  counter++;
  carousel();
});

prevBtn.addEventListener("click", function () {
  counter--;
  carousel();
});

function carousel(){
    slides.forEach(function (slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
      });
}

