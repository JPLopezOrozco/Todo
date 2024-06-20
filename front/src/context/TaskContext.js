import { useState, createContext, useContext, useEffect } from "react";



const TaskContext = createContext()

export const useTask = ()=>{
    return useContext(TaskContext)
}

export const TaskProvider = ({children}) =>{
    const [tasks, setTasks] = useState([])


    useEffect(() => {
      fetch(`http://127.0.0.1:8000/api/tasks/`)
      .then(response => response.json())
      .then( data => setTasks(data))
      .catch(error => console.error('Error fetching data:', error));
    }, [])
    return(
        <TaskContext.Provider value={{ tasks, setTasks }}>
            {children}
        </TaskContext.Provider>
    )
}