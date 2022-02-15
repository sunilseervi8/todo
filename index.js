let addToDoButton= document.getElementById('addToDo');//taking + button
let toDoContainer=document.getElementById('toDoContainer');
let inputField=document.getElementById('inputField');
addToDoButton.addEventListener('click',function(){
    var paragraph=document.createElement('p');
    paragraph.innerText=inputField.value;
    paragraph.classList.add('paragraph-styling')//changing the appended paragraph style 
    toDoContainer.appendChild(paragraph);
    inputField.value="";
    /// break line to show that task is done
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration="line-through";
    })
    //in case if double the task then the task will be remove completely
    paragraph.addEventListener('dblclick',function(){
        toDoContainer.removeChild(paragraph);
    })

})
