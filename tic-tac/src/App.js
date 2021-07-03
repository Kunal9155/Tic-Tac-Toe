
import React , {useState}from "react";
import { useEffect } from 'react'
import Aos from "aos"
import "aos/dist/aos.css"


import Icon from "./components/Icon"

// TOASTIFY 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

//COMPONENT FROM REACT STRAP
import {Card , CardBody ,Container ,Button , Col,Row} from "reactstrap"
import { directive } from "@babel/types";

const itemArray = new Array(9).fill("empty")




const App=() => {

  useEffect(() => {
    Aos.init({duration:2000});
  }, [])
  // useEffect(() =>{
  //    Aos.init({duration:2000});
  // } ,[]);

const [isCross , setIsCross] = useState(false)

const [winMessage , setWinMessage] = useState ("")

const reloadGame =() => {
  setIsCross(false)
  setWinMessage("")
  itemArray.fill("empty",0,9);
}

const checkIsWinner =() =>{
  if(itemArray[0] ===itemArray[1] && itemArray[0] ===itemArray[2] && itemArray[0] !== "empty"){
    setWinMessage(`${itemArray[0]} wins `)
  }
  else if(
    itemArray[3] ===itemArray[4] && itemArray[3] ===itemArray[5] && itemArray[3] !== "empty"
  ){
    setWinMessage(`${itemArray[3]} wins `)
  }
  else if(itemArray[6] ===itemArray[7] && 
    itemArray[7] ===itemArray[8] && 
    itemArray[6] !== "empty"){
    setWinMessage(`${itemArray[6]} wins `)
  }
  else if(itemArray[0] ===itemArray[3] && 
    itemArray[3] ===itemArray[6] && 
    itemArray[0] !== "empty"){
    setWinMessage(`${itemArray[0]} wins `)
  }
  else if(itemArray[1] ===itemArray[4] && 
    itemArray[4] ===itemArray[7] && 
    itemArray[1] !== "empty"){
    setWinMessage(`${itemArray[1]} wins `)
  }
  else if(itemArray[2] ===itemArray[5] && 
    itemArray[5] ===itemArray[8] && 
    itemArray[2] !== "empty"){
    setWinMessage(`${itemArray[2]} wins `)
  }
  else if(itemArray[0] ===itemArray[4] && 
    itemArray[4] ===itemArray[8] && 
    itemArray[0] !== "empty"){
    setWinMessage(`${itemArray[0]} wins `)
  }
  else if(itemArray[2] ===itemArray[4] && 
    itemArray[4] ===itemArray[6] && 
    itemArray[2] !== "empty"){
    setWinMessage(`${itemArray[6]} wins  `)
  }
}

const changeItem =itenNumber =>{

if(winMessage){
  return toast(winMessage, {type:"success"});
}

if(itemArray[itenNumber] === "empty"){
  itemArray[itenNumber] = isCross ? "cross" : "circle"
  setIsCross(!isCross)
}

else{
  return toast("already filled", {type:"error"});
}

checkIsWinner();

};

  return (
<React.Fragment>
  <div>
    <h1 data-aos="fade-down" className="text-white mt-3 text-center fw-bold  intro">
      Let's Play Tic-Tac-Toe Game ! By KunaL :)</h1>
  </div>
<Container className ="p-5">
 <ToastContainer position="bottom-center"/>
 <Row>
   <Col md={6} className="offset-md-3">
     {winMessage ? (
       <div className="mb-3 mt-2 ">
         <h1 className="text-center wins text-warning text-uppercase">{winMessage}
         </h1>
         <Button className="w-100 btn"   onClick = {reloadGame}>Start a New Game</Button>
       </div>
     ): (
       <h1 data-aos="fade-down"  className = "text-center  turn">
      {isCross ? "Cross" : "Circle"} turns  
       </h1>
     )}
     <div data-aos="fade-up"  className="grid">
    {itemArray.map((item,index) => (
      <Card data-aos="flip-up" className="card"
        onClick = {() => {changeItem(index)}}>
        <CardBody className="box">
                 <Icon name={item}/>
        </CardBody>
      </Card>
    ))}
     </div>
   </Col>
 </Row>
 </Container>
</React.Fragment>

  );
}

export default App;

