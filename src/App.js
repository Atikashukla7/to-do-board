import './App.css';
import Input from './Input';
import { useState } from 'react';
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [task,setTask]=useState([])
 
  return (
    <>
    
      <h1> To do board</h1>
      <Input task={task} setTask={setTask}/>
      <div className="App">
      {task.map((i,index)=>
             <li key={index}>{i}</li>
        )}
    </div>
    </>
  );
}

export default App;
