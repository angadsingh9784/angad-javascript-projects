const butn = document.getElementById('btn');
butn.addEventListener('click', () => {
    const node = document.createElement("li");
    const textNode = document.createTextNode("Water");

    node.appendChild(textNode);
    // document.getElementById('myList').appendChild(node);
    document.getElementById('myList').appendChild(node);            
    
})