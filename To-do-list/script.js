'use strict'

const task = document.querySelector('.item');
const toDoList = document.querySelector('.wrapper');
const trash = document.querySelector('.item__trash');

toDoList.addEventListener('click', function(event){

});

toDoList.addEventListener('mouseover', function(event){
    if(event.target.matches('.item') || event.target.matches('.item__task')){
        //
    }
});

console.log(task);