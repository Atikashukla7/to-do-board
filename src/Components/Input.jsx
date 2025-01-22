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
// style={{ marginBottom: '377px' }}
  return (
    <>
<Container fluid
      style={{
        minHeight: '100vh', // Ensure full page height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        overflowY: 'auto', // Allow vertical scrolling within the container
        padding: '0'}}  >
    <Form style={{ marginTop: '20px' }}>
      <Form.Group className="mb-3" >
        <Form.Control onChange={(e)=> setInput(e.target.value)} value={input} placeholder="Add a Task" />
      </Form.Group>
      </Form>

      <Button onClick={display} style={{ backgroundColor: 'pink', color: "white"}}>Add Task</Button>
      </Container>
     <div style={{color:'black', fontFamily: "'Pacifico', cursive",
          width: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginTop: '20px',
        }} >
           {task.map((i, index)=>
       <Board key={index} i={i}/>
     )}
         </div>
         </>
   
  )
}

export default Input
