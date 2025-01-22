import React from 'react'
import { Col, Row , Container} from 'react-bootstrap'
const Board = ({i}) => {
  return (
<>
<Container className='flex'>
      <Row>
        <Col >
        <li style={{taskItemStyle}}>{i}</li>
        </Col>
        
      </Row>
      
    </Container>
    </>
    
    
  )
}
const taskItemStyle = {
    backgroundColor: 'rgba(194, 144, 171)',  
    color: 'white',  
    padding: '10px',
    margin: '7px',
    borderRadius: '8px',
    display:"grid",
     width: '100%',     
     justifyContent: 'center',
    listStyleType: 'none',  
  };
export default Board
