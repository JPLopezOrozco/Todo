import './App.css';
import TaskList from './components/TaskList';
import TaskCompleted from './components/TaskCompleted';
import {Routes, Route, Link} from 'react-router-dom'


function App(){
  return(
    <div className='App'>
      <nav className='nav'>
        <Link to='/' className='nav-item'>Tasks list</Link>
        <Link to='/completed' className='nav-item'>Tasks completed</Link>
      </nav>
      <Routes>
          <Route path='/' element={<TaskList />} />
          <Route path='/completed' element={<TaskCompleted />} />
      </Routes>

    </div>
      )
    }
  
  
  
  export default App;