const inputWords=document.querySelector('#inputBox')
const exactWords=document.querySelector('#word');
const reverseWords=document.querySelector('#reverse');
const palindroneWords=document.querySelector('#rre');

inputWords.addEventListener('input',()=>{
    let inputWord=inputWords.value.toLowerCase();
    if(inputWords.value !==""){
        exactWords.innerHTML=`Word :  ${inputWord}`;
        let revWrd=reverseWord(inputWord);
        reverseWords.innerHTML=`Reverse :  ${revWrd}`
        let chkPlain=palindrom(inputWord,revWrd);
        palindroneWords.innerHTML=`Result :    ${chkPlain}`
    }
 
    

});



function reverseWord(inputWord){
    //for reversing the string
    let word = inputWord;
    let revs = "";

    for(let i=word.length-1;i>=0;i--){
        revs+=word[i];
    }
    return revs
}
function palindrom(inputWord,revWrd){
    if(inputWord===revWrd){
        return "Palindrome"
    }else{
        return "Not a Palindrome"
    }
}