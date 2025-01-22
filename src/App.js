import './App.css';
import {React, useState}from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Input from './Components/Input';

function App() {

  const [task, setTask]=useState([]);




  const pageStyle = {
    backgroundImage: "url('/d.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    color: "white",
  };
  const headingStyle = {
    fontFamily: "'Pacifico', cursive",  
    color:'rgb(186, 101, 148)',
    fontSize: '4rem',  
    textAlign: 'center',  
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',  
  };
  

  return (
    <>
    <Container fluid style={pageStyle} className="d-flex flex-column justify-content-between">
     
      <Row className="justify-content-center align-items-start">
        <Col xs="auto">
          <h1 className="text-center" style={headingStyle}>TO DO BOARD</h1>
        </Col>
      </Row>
    
      <Row className="justify-content-center align-items-center flex-grow-1">
        <Col xs="auto">
        
          <Input task={task} setTask={setTask}/>
        </Col>
      </Row>
      
    </Container>
    
    </>
  );
}

export default App;
