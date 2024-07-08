import './App.css';
import { useEffect, useState } from 'react';
import { deleteTask, getTasks, postTask, updateTask } from './api/tasks';
import useCsrf from './hook/useCsrf';

function App() {
  const {cookie:csrfToken} = useCsrf('csrftoken')
  const [check, setCheck] = useState('')
  const [task, setTask] = useState()
  const [newTask, setNewTask] = useState()
  
  useEffect(()=>{
    async function tasks(){
      const res = (await getTasks()).data.results
      setTask(res)
    } 
    tasks()
  }, [])
  


  const handleCheck = (e) => {
    const checked = task.find(t => t.id === parseInt(e.target.id));
    setCheck(checked);
  };

  useEffect(() => {
    const updateTaskCheck = async () => {
      if (check) {
        const updatedTask = { ...check, completed: !check.completed };
        const res = await updateTask(check.id, updatedTask, csrfToken);
        setTask(task.map(t => (t.id === check.id ? res.data : t)));
        setCheck(null);
      }
    };
    updateTaskCheck();
  }, [check, csrfToken, task]);

  const handleSubmit = async(e)=>{
      const res = await postTask({'name':newTask}, csrfToken)
      console.log(res)
    }
  const handleChange = (e)=>{
    setNewTask(e.target.value)
  }
  const handleDelete = async(e)=>{
      const id = e.target.id;
      await deleteTask(id, csrfToken)
      setTask(task.filter(task => task.id !== parseInt(id)));
    }

  
  

  return (
    <div className='container-task'>
      <h1>Todo list</h1>
      <div className='tasks'>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} className='form-control' placeholder='Create task'></input>
        </form>
        {newTask && 
          <div className='card mt-3'>
            <div className='card-body card-task'>
              <p>{newTask}</p>
            </div>
          </div>}
        {task ?.map((task) =>(
          <div key={task.id} className='card mt-3'>
            {task.completed !== true ?
              <div key={task.id} className='card-body card-task'>
                <p key={task.id}>{task.name}</p>
                <div className='container-button'>
                  <input onClick={handleCheck} id={task.id} value={task.name} type='checkbox'></input>
                  <button onClick={handleDelete} id={task.id} className='btn ml-3'>Delete</button>
                </div>
              </div>
              :
              <div key={task.id} className='card-body card-task'>
                <strike key={task.id}>{task.name}</strike>
                <div className='container-button'>
                  <input onClick={handleCheck} id={task.id} value={task.name} type='checkbox' defaultChecked={task.completed===true}></input>
                  <button onClick={handleDelete} id={task.id} className='btn ml-3'>Delete</button>
                </div>
              </div>

            }
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
