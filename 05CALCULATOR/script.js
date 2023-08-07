

function display(num){
    // console.log(num);
    document.getElementById('displayResult').value+=num;
}

function calculate(){
    var a =document.getElementById('displayResult')

    var p=a.value;
    var x=eval(p);

   console.log(x)
   document.getElementById('answer').innerHTML=`Answer is = ${x}`;
}


function clears(){
    var a =document.getElementById('displayResult');
    a.value=" "
}

