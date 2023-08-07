document.getElementById('btnON').addEventListener('click',()=>{
    document.getElementById('bulbImage').setAttribute('src','./Images/BulbOFF.png')
});
document.getElementById('btnOFF').addEventListener('click',()=>{
    document.getElementById('bulbImage').setAttribute('src','./Images/BulbON.png')
})