import React from 'react'
import { Col, Row , Container, Button} from 'react-bootstrap'

const Board = ({i,task,setTask,index}) => {

  const handleDelete = () => {
    setTask((current) => current.filter((_, taskIndex) => taskIndex !== index));
  };

  return (
<>
<Container className='col-3  me-1 mt-1 p-1 pt-2 pb-2 mb-3' style={{ maxWidth: '100%', padding: 0 , }}>
      <Row >
      <Col  md={{span:12}}className="d-flex flex-column align-items-center p-2 pt-2 pb-2" style={{ maxWidth: '100%', padding: 0 }}>
    
        <p style={taskItemStyle}>{i}</p> 
        
        <Button  onClick={handleDelete} style={{ fontWeight: 'bold' }}size="sm" variant='outline-danger'>Delete</Button>
        </Col>
        
        
       
      
        
      </Row>
      
    </Container>
    </>
    
    
  )
}

const taskItemStyle = {
    backgroundColor: 'rgba(194, 144, 171)',  
    color: 'white',  
  
    
    borderRadius: '8px',
    wordWrap: 'break-word',// Prevent line breaks
    overflow: 'hidden',   // Hide overflow text
    textOverflow: 'ellipsis',
       border: '1px solid grey',
    
    
  };
export default Board
