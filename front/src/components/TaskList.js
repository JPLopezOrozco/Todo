import { useState } from "react"
import { useTask } from "../context/TaskContext"
import { useTaskUpdate } from "../context/TaskUpdateContext"
import { useTaskDelete } from "../context/TaskDeleteContext"
import { useCsrfToken } from "../context/CsrfContext"
function TaskList(){

  const [newTask, setNewTask] = useState('')

  const {tasks, setTasks} = useTask()
  const {updateTask} = useTaskUpdate()
  const {deleteTask} = useTaskDelete()
  const csrfToken = useCsrfToken()

  const post = (newTask, csrfToken)=>{
    fetch('http://127.0.0.1:8000/api/tasks/',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
        'X-CSRFToken': csrfToken, 
      },
      body: JSON.stringify({name:newTask}),
    })
    .then(response=>response.json())
    .then(task=>{
      setTasks([...tasks, task])
      console.log(task)
    })
  }

  const handleChange = (e)=>{
    setNewTask(e.target.value)
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    post(newTask, csrfToken)
    setNewTask('')
  }
  const handleClick = (id)=>{
    deleteTask(id)
  }
  const handleCheck = (id, name, completed)=>{
    updateTask(id,{ name:name, completed:!completed})
    console.log(tasks)
  }
  
  
    return(
        <div className="container">
        <h1 className="title-page" >Tasks List</h1>
        <div id="task-container">
            <div  id="form-wrapper">
               <form onSubmit={handleSubmit} id="form">
                  <div className="flex-wrapper">
                      <div style={{flex: 6}}>
                          <input onChange={handleChange} className="form-control" id="title" type="text" name="newTask" value={newTask} placeholder="Add task.." />
                       </div>

                       <div style={{flex: 1}}>
                          <input disabled={!newTask} id="submit" className="btn btn-warning" value="Send" type="submit" name="Add" />
                        </div>
                    </div>
              </form>
           
            </div>

            <div  id="list-wrapper">
              {(tasks.filter(tasks => tasks.completed===false)).map((task, id)=>{
                return(
                    <div key={id} className="task-wrapper flex-wrapper">
                        <span>{task.name}</span>
                        <div>
                          <button onClick={()=> handleClick(task.id)} value={task.name} className="btn btn-outline-danger mr-3">Delete</button>
                          <button onClick={() => handleCheck(task.id, task.name, task.completed)} className="btn btn-outline-dark">Done</button>
                        </div>
                    </div>

                )
              }
              )}         
            </div>
        </div>
        
      </div>
    )
}

export default TaskList