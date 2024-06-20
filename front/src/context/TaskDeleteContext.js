import { createContext, useContext } from "react";
import { useTask } from "./TaskContext";
import { useCsrfToken } from "./CsrfContext";

const TaskDeleteContext = createContext()

export const useTaskDelete = ()=>{
    return useContext(TaskDeleteContext)
}

export const TaskDeleteProvider = ({children})=>{
    const {tasks, setTasks} = useTask()
    const csrfToken = useCsrfToken()
    const deleteTask = (taskId)=>{

        fetch(`http://127.0.0.1:8000/api/tasks/${taskId}/`, {
            method:'DELETE',
            headers:{
                'Content-Type': 'application/json',
                'X-CSRFToken': csrfToken, 
              },
        })
        .then(response => {
            if (response.ok) {
              console.log('Task deleted successfully');

                setTasks(tasks.filter((task) => task.id !== taskId));
            } else {
              throw new Error('Failed to delete task');
            }
          })
          .catch(error => console.error('Error deleting task:', error));


    }
    return (
        <TaskDeleteContext.Provider value={{ deleteTask }}>
          {children}
        </TaskDeleteContext.Provider>
      );
}