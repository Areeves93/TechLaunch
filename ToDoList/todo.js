let todo=documnet.querySelector('.todo')
let todo_list=document.querySelector('.todo_list')
let toDone=document.querySelector('.toDone')
let del=document.querySelector('.del')

let moveToDo=function moveToDo(e){
    toDone.appendChild(e.target.parentNode)
    e.target.parentNode.removeChild(e.target)
}

toDo.addEventListener('click', function(e){
  let dialouge=
}



// var text;
// var todo=prompt("What do you have to do?");
// switch(todo){
//     case "Homework":
//     text="You better get started!"
//     break;
//     case "Clean Up":
//     text="Its Cleaning Time";
//     break;
//  default:
//    text="Let's Get Started";
//    break;
// }

