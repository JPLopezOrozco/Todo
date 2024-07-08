import axios from "axios";


const url = axios.create({
    baseURL:'http://127.0.0.1:8000/api/tasks/'
  })
export const getTasks = () => url.get('/')
export const postTask = (task, csrfToken)=> url.post('/', task,{
    headers: {
        'X-CSRFToken': csrfToken,
        'Content-Type': 'application/json'
    }
})
export const deleteTask = (id, csrfToken)=> url.delete(`${id}/`, {
    headers: {
        'X-CSRFToken': csrfToken,
        'Content-Type': 'application/json'
    }
})

export const updateTask = (id, task, csrfToken)=> url.put(`${id}/`, task,{
    headers:{
        'X-CSRFToken': csrfToken,
        'Content-Type': 'application/json'
    }
})