const item=document.querySelector('#item');
const todoBox=document.querySelector('#to-do-box')

item.addEventListener(
    "keyup",
    function(event){
        if(event.key=="Enter"){
            addToDo(this.value)//this means item
            this.value=""
            saveData();
        }
    } 
)
const addToDo =(item)=>{
    const listItem=document.createElement("li");
    listItem.innerHTML=`
    ${item}
    <i class="fas fa-times"></i>
    `;
    listItem.addEventListener('click',
    function(){
        this.classList.toggle("done");
        saveData()
    })
    listItem.querySelector("i").addEventListener("click",
    function(){
        listItem.remove()
        saveData()
    }
    )
    todoBox.appendChild(listItem)
    
}

function saveData(){
    localStorage.setItem("data",todoBox.innerHTML);
}
function showTask(){
    todoBox.innerHTML=localStorage.getItem("data");
}
showTask();