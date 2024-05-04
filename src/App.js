
import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
 <BrowserRouter>
      <Routes>
       
          <Route path="/" element={<TaskInput />} />
          <Route path="/tasklist" element={<TaskList/>} />
         
          
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
