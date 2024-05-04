import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useDispatch} from 'react-redux'
import { addTask } from '../redux/slices/tasks';
import { useNavigate } from 'react-router-dom';

export default function TaskInput() {
    const navigate = useNavigate();
  const [id, setID] = useState(0);
  const [task, setTask] = useState('');
  
  const dispatch = useDispatch()

 

  const handleaddtask = () => {
       // Dispatch the addTask action with task details
       dispatch(addTask({ id: id, task: task }));
       // Reset input fields
       setID(id + 1); // Increment ID
       setTask(''); // Clear task input
   
  };
  const handlemove=()=>{
    navigate('/tasklist')

  }

  return (
    <div className="container d-flex justify-content-center mt-5">
      <form  className="w-50">
        <div className="mb-3">
          <label htmlFor="taskInput" className="form-label">Task</label>
          <input
            type="text"
            className="form-control"
            id="taskInput"
            placeholder="Enter task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          
        </div>
        <button onClick={handleaddtask} className="btn btn-primary me-2">Add task</button>
        <button  onClick={handlemove} className="btn btn-secondary" >Move to Another Component</button>
      </form>
    </div>
  );
}




