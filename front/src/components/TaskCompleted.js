import { useTask } from "../context/TaskContext"
import { useTaskUpdate } from "../context/TaskUpdateContext"
import { useTaskDelete } from "../context/TaskDeleteContext"

function TaskCompleted(){
    const {tasks} = useTask()
    const {updateTask} = useTaskUpdate()
    const {deleteTask} = useTaskDelete()

    const handleClick = (id)=>{
      deleteTask(id)
    }
    const handleCheck = (id, name, completed)=>{
        updateTask(id,{ name:name, completed:!completed})
      }
    return(

        <div className="container">
            <h1 className="title-page">Tasks completed</h1>
            <div id="task-container">

            <div  id="list-wrapper">
              {(tasks.filter(tasks => tasks.completed===true)).map((task, id)=>{
                  return(
                      <div key={id} className="task-wrapper flex-wrapper">
                      <span>{task.name}</span>
                      <div>
                        <button onClick={() => handleClick(task.id)} value={task.name} className="btn btn-outline-danger mr-3">Delete</button>
                        <button onClick={() => handleCheck(task.id, task.name, task.completed)} className="btn btn-outline-dark">Not finished</button>
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
export default TaskCompleted