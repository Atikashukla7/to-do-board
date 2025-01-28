import{ React, useState} from 'react'
import { Form,Button,Container } from 'react-bootstrap'
import Board from './Board';

const Input = ({task,setTask}) => {
    const [input, setInput]=useState("");

const display = (e)=>{
    e.preventDefault();
setTask([...task,input]);
setInput("");
}

  return (
    <>
<Container fluid
      style={{
       
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
      
        padding: '0'}}  >
    <Form style={{ marginTop: '20px' }}>
      <Form.Group className="mb-3" >
        <Form.Control onChange={(e)=> setInput(e.target.value)} value={input} placeholder="Add a Task" />
      </Form.Group>
      </Form>

      <Button   size="lg" onClick={display} style={{ backgroundColor: 'pink', color: "white"}}>Add Task</Button>
      </Container>
     <div  style={{color:'black', fontFamily: "'Pacifico', cursive",
      
          display: 'flex',
          flexWrap: 'wrap',
        
        
        }} >
           {task.map((i, index)=>
       <Board index={index} task={task} setTask={setTask} key={index} i={i}/>
     )}
         </div>    
         </>
   
  )
}

export default Input
