const acessKey="RlFHuiHLx-_b94bc7xPyk1Y66mjyzchma_hslvNU-J4";

const formEl=document.querySelector("form")
const inputEl=document.getElementById('search-input')
const searchResults=document.getElementById('search-button');
const showMore=document.getElementById('show-more-button');


let inputData="";
let page=1;


async function searchImages(){
    inputData=inputEl.value;
    const url=`https://api.unsplash.com/search/photos=${page}&query=${inputData}
    &client_id=${acessKey}`

    const response=await(url);
    const data=await response.json();

    const results=data.results

    if(page===1){
        searchResults.innerHTML=""
    }

    results.map((result)=>{
        const imagewrapper=document.getElementById('div')
        imagewrapper.classList.add("search-result")
        const image=document.createElement('img')
        image.src=result.urls.small
        image.alt=result.alt_description
        const imagelink=document.createElement('a')
        imagelink.href=result.links.html
        imagelink.target="_blank"
        imagelink.textContent=result.alt_description

        //append
        imagewrapper.appendChild(image)
        imagewrapper.appendChild(imagelink)
        searchResults.appendChild(imagewrapper)

    });

    page++
    if(page>1){
        showMore.style.display='block'
    }
}

formEl.addEventListener('submit',(event)=>{
    event.preventDefault()
    searchImages();
})


showMore.addEventListener('click',()=>{
    searchImages();
})