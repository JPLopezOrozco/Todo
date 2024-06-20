import { createContext, useContext } from "react";
import { useTask } from "./TaskContext";
import { useCsrfToken } from "./CsrfContext";

const TaskUpdateContext = createContext()

export const useTaskUpdate = ()=>{
    return useContext(TaskUpdateContext)
}


export const TaskUpdateProvider = ({children})=>{
    const {tasks, setTasks}  = useTask()
    const csrfToken = useCsrfToken()
    const updateTask = (taskId, updatedData) => {
        const updatedTasks = tasks.map(task =>
          task.id === taskId ? { ...task, ...updatedData } : task
        );
        setTasks(updatedTasks);
    
        fetch(`http://127.0.0.1:8000/api/tasks/${taskId}/`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrfToken, 
          },
          body: JSON.stringify(updatedData),
        })
        .then(response => response.json())
        .catch(error => console.error('Error updating task:', error));
      };
      return (
        <TaskUpdateContext.Provider value={{ updateTask }}>
          {children}
        </TaskUpdateContext.Provider>
      );

}