import React from 'react';
import Ready from './components/Ready';
import CountAnswer from './components/CountAnswer';
import text from './question';
import Button  from 'react-bootstrap/Button';
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import Timer from './components/Timer';

function randomSentence(str){
  
 return text[0];

 }
let time,finalTime;
function App() {
 
  const [words,setWords]=React.useState(randomSentence());
  const [started,setStarted]=React.useState(false);
  const [counter,setCounter]=React.useState(0);
  const [counterFalse,setCounterFalse]=React.useState(0);
  const [counterTrue,setCounterTrue]=React.useState(0);
  const [ready,setReady]=React.useState(false);
  const [bank,bankUpdate]=React.useState(0);
  const [summ,setSumm]=React.useState(0);

const [timeoutSec,timeoutSecUpdate]=React.useState(60);


  const start=()=>{
    
    setStarted(true);
    time= new Date();
  }
  const AnswerTrue=()=>{
    text.shift();
    bankUpdate((bank+200)*1.5)
    setCounter(counter+1);
    setCounterTrue(counterTrue+1);
    setWords(randomSentence());
   
  }
  const AnswerFalse=()=>{
    text.shift();
    bankUpdate(0)
    setCounter(counter+1);
    setCounterFalse(counterFalse+1);
    setWords(randomSentence());
   
  }
 const newStart=()=>{
  
  setReady(false);
  setStarted(true);
  setWords(randomSentence());
  time= new Date();
 }
 
  React.useEffect(()=>{
    if(text.length===0){
      setReady(true);
      setStarted(false);
      finalTime= new Date();
    }
  },[words])
  

  
 const bankAdd=()=>{
    setSumm(summ+bank);
    bankUpdate(0);
  }

 



  return (
   
     <div className="app ">
      
        {ready ? <Ready time={time} finalTime={finalTime} newStart={newStart}/>:
        !started ?(
          <button type="button" className="btn btn-primary btn-lg" 
          onClick={start}>Начать</button>
        
       )
         :(
           <div className="center">
           <h1 className={`display-4 mb-4 `}>{words} </h1>
           <div className="input-group-lg place">
           <Row>
    <Col> <Button variant="success" onClick={AnswerTrue}>Правильно</Button></Col>
    <Col> <Button variant="danger" onClick={AnswerFalse}>Ошибка</Button></Col>
  </Row>
  <Button variant="light" onClick={bankAdd} >Банк</Button>
          
          
            
           </div>
           
           <h1 className={`display-8 mb-3 `}> Всего ответов: {counter}</h1>
           <h1 className={`display-7 mb-3 `}> Правильных ответов:{counterTrue} </h1>
           <h1 className={`display-8 mb-3 `}> Неправильных ответов:{counterFalse} </h1>
         <Timer  timeoutSec ={ timeoutSec } newStart={newStart}/>
           </div>
         )
        }
    
    <div className="center">
    <h1 className={`display-8 mb-3 `}> Ставка:{bank}</h1>
    <h1 className={`display-8 mb-3 `}> Банк:{summ}</h1>
     </div>
     </div>

     
    
     
      
      
   
  );
}

export default App;
