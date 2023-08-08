

 
function myFunction(){
    const inputText=document.querySelector('#myInput');
    const unOrderedList=document.querySelector('#myUL');
    const lists=unOrderedList.getElementsByTagName('li')
    const filters=inputText.value.toUpperCase();
    for(i=0;i<lists.length;i++){
        let sol=lists[i].getElementsByTagName('a')[0];
        let txtVal=sol.innerText||sol.textContent;
        if(txtVal.toUpperCase().indexOf(filters)>-1){
            lists[i].style.display="";
        }else{
            lists[i].style.display="none";
        }
    }
    
}



















// function myFunction() {
//     var input, filter, ul, li, a, i, txtValue;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();


//     ul = document.getElementById("myUL");
//     li = ul.getElementsByTagName("li");


    
//     for (i = 0; i < li.length; i++) {
//         a = li[i].getElementsByTagName("a")[0];

//         txtValue = a.textContent || a.innerText;

//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }