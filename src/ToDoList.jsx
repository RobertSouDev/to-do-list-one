import React, { useState } from 'react';

function ToDoList() {
    const [tasks, setTasks] = useState(["Eat Breakfast","Take a shower", "Walk the dog"])
    const [newTasks, setNewTasks] = useState("")


    function handleInputChange(event){
        setNewTasks(event.target.value)
    }

    function addTask(){

    }

    function deleteTask(index){

    }

    function moveTaskUp(index){

    }

    function moveTaskDown(index){

    }

 
    return (  
       <div className="to-do-list">
            <h1>To-Do-List</h1>

            <div>
                <input type="text" placeholder="Enter a task..." value={newTasks}
                onChange={handleInputChange}/>
                <button className="add-button" onClick={addTask}>Add</button>
            </div>

            <ol>

                {tasks.map((task, index)=>{
                    return (      <li key={index}>
                        <span className="text">{task}</span>
                    </li>)
                })}
            </ol>
       </div>
    );
}

export default ToDoList;
