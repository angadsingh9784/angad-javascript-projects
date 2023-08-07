const userNameInput = document.querySelector('#username')
const showDetailsButton = document.querySelector('#showDetails');
const profileInfoDiv = document.querySelector('#profileInfo');
const reposIn=document.querySelector('.reposInfo');


function showRepoInfo(userName){
    fetch(`https://api.github.com/users/${userName}/repos`)
    .then((res)=>{
        res.json().then((data)=>{
            console.log(data)
            //array to str
            for(let i=0; i<data.length;i++){
                reposIn.innerHTML+=` <div class="card">
               
                <div class="card-body">
                    <div class="card-title">${data[i].name}</div>
                    <div class="card-subheading">${data[i].language}</div>
                    
                   <button>
                   <a href=${data[i].html_url}>
                   Do Checkout Project
                   </a>
                   </button>
                    </div>
                </div>
            </div>`
            }
            
        })
    })
}
showDetailsButton.addEventListener('click', () => {
    const userName = userNameInput.value;


    //request the data from server: fetch api
    fetch(`https://api.github.com/users/${userName}`)
        .then((res) => {
            res.json()
                .then((data) => {
                    console.log(data);
                    profileInfoDiv.innerHTML = ` <div class="cardd">
                                    <div class="card-img">
                                        <img src="${data.avatar_url}" alt=${data.name}>
                                        <div class="card-title">${data.name}</div>
                                        <div class="card-subheading">${data.login}</div>
                                        <div class="card-text">
                                        <p>
                                        ${data.bio}
                                        </p>
                                        <p>
                                        ${data.followers} Followers ${data.following} Following
                                        </p>
                                        </div>
                                    </div>
                                    <div class="card-body">
                                     
                                       
                                    </div>
                                </div>
                        `

                        showRepoInfo(userName)

                })
        })

    //promises
    //it can be fulfil,rejected,pending

})
// const p=new Promise((resolve,reject)=>{
//     const x=1+3;
//     if(x===2){
//         resolve('suceed')
//     }else{
//         reject('failed')
//     }
// })
// p.then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })