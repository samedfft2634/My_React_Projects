import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {
  const [tasks, setTasks] = useState([])
  const createTask = async (title,area) => {

    const response = await axios.post('http://localhost:3004/tasks',{title,area});
    const createdTask = [...tasks,response.data]
      /*
      {
         id: Math.round(Math.random()*999999),
         title,
         area,
      }
      */
    setTasks(createdTask)
  }

  //! Get Data-------------------!
  const fetchTasks = async()=>{
    const response = await axios.get('http://localhost:3004/tasks')
    setTasks(response.data)
  }
  useEffect(()=>{
    fetchTasks()
  },[])
  //------------------------------!



  const deleteTaskById = async (id)=>{
    await axios.delete(`http://localhost:3004/tasks/${id}`)
    const afterDeletedTasks = tasks.filter((tasks)=>{
      return tasks.id !== id;
    })
    setTasks(afterDeletedTasks)
  }


  const editTaskById = async(id, updatedTitle, updatedArea)=>{
    await axios.put(`http://localhost:3004/tasks/${id}`,{
      title:updatedTitle,
      area: updatedArea
    })
    const updatedTasks = tasks.map((task)=>{
      if(task.id === id){
        return {id:id ,title:updatedTitle , area:updatedArea}
      }
      return task;
    })
    setTasks(updatedTasks)
  }
  return (
    <div className="App">
     <TaskCreate onCreate={createTask}/>  
      <h1>Tasks</h1>
      <TaskList tasks={tasks} onDelete={deleteTaskById} onUpdate={editTaskById}/>
    </div>
  );
}

export default App;