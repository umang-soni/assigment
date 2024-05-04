import React ,{useState}from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useSelector, useDispatch } from 'react-redux';
import { addTask,removeTask } from '../redux/slices/tasks';

export default function TaskList() {
    const myState = useSelector(state => state.r1.tasksById);
  return (
    <div>
      {myState}
   

    </div>
  )
}
