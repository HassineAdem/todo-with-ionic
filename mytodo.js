const todoInput = document.querySelector ("#todoIn"); 
const addBtn = document.querySelector ("#addbtn");
const Todoul = document.querySelector ("#expenses-list");
const taskOutPut = document.querySelector ("#taskout");
const TaskcompletedBtn = document.querySelector ("#completedTask");
const todoCompletedUl = document.querySelector ("#completedtasks-list");
const tasksBtn = document.querySelector ("#tasks");
                            function presentAlert() {
                                const alert = document.createElement('ion-alert');
                                alert.header = 'Alert';
                                alert.message = 'U havent entered a Task! ';
                                alert.buttons = ['OKEY'];
                            
                                document.body.appendChild(alert);
                                return alert.present();
                            }
                            const clear = () => { 
                                todoInput.value= "";
                                
                            
                            }
                                        
var todoListChecked = {
    todoLiCh : [],
    todoLiChAdd : function (position) {
        this.todoLiCh.push ({text : todoList.todoLi[position].text, test :true});
    }
}
var todoList = {
    todoLi : [] ,
    todoadd :function(text) {
 this.todoLi.push ({text: text , test : false})
console.log (todoList); 
    },
    todoRemove : function (position) {
        this.todoLi.splice (position,1)
    }

         

    }

var view = {
    displayMytasks : function () { 
        Todoul.innerHTML ='';
        todoCompletedUl.innerHTML ="";
        for(let i=0;i<todoList.todoLi.length;i++){
            todoListShow= document.createElement ("ion-item");
           // todoListShow.style.display = "flex";
            labelElement = document.createElement('ion-label');
            labelElement.textContent =  todoList.todoLi[i].text ;
            
            checkBoxElement = document.createElement("ion-checkbox");
            checkBoxElement.setAttribute('slot', 'end');
            
            checkBoxElement.setAttribute ('checked','false');
            
            checkBoxElement.addEventListener("click",  () => {
                todoListChecked.todoLiChAdd (i);
                todoList.todoLi.splice(i, 1);
                  taskOutPut.textContent = todoList.todoLi.length;
                  this.displayMytasks();
              });
            
            todoListShow.appendChild(labelElement);
    
            todoListShow.appendChild(checkBoxElement);
              
         Todoul.appendChild (todoListShow);
      
        }


},
displayMyCompletedTask : function () {
    todoCompletedUl.innerHTML ="";
    for(var i=0;i<todoListChecked.todoLiCh.length;i++){
        todoListShowCompleted= document.createElement ("ion-item");
        labelElementComp = document.createElement('ion-label');
        labelElementComp.textContent =  todoListChecked.todoLiCh[i].text ;
        
        checkBoxElementComp = document.createElement("ion-checkbox");
        checkBoxElement.setAttribute ('disabled','')
        checkBoxElementComp.setAttribute('slot', 'end');
        checkBoxElementComp.setAttribute ('checked','true');
        
        todoListShowCompleted.appendChild(labelElementComp);
        todoListShowCompleted.appendChild(checkBoxElementComp);
          
        todoCompletedUl.appendChild (todoListShowCompleted);
        taskOutPut.textContent = todoListChecked.todoLiCh.length;


}}
}
tasksBtn.addEventListener ("click", () => 
{                  taskOutPut.textContent = todoList.todoLi.length;

    view.displayMytasks ();
})

TaskcompletedBtn.addEventListener("click", () => {
    Todoul.innerHTML ='';
    taskOutPut.textContent = todoListChecked.todoLiCh.length;
    view.displayMyCompletedTask () ;
})
addBtn.addEventListener ("click", () => {
    const todoEntered = todoInput.value ; 
    if  (!todoEntered.trim().length){
        presentAlert (); 
        return 0 ; 
    }
    todoList.todoadd(todoEntered);
    view.displayMytasks (); 
    taskOutPut.textContent = todoList.todoLi.length;

clear ();
});


     

