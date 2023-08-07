const submitBtn = document.querySelector('#btn');
const enterValue = document.querySelector('#types');
const qrImage = document.querySelector('#imga');
const bodyEl = document.querySelector("body");

qrImage.style.display="none";

let urrl = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=";
submitBtn.addEventListener('click', () => {
    const val = enterValue.value;
    let url = urrl + encodeURIComponent(val.value);
    fetch(url)
        .then((response) => response)
        .then((data) => {

            qrImage.src = data.url;
            qrImage.style.display="block";
        });
})


