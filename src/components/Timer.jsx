import React from 'react';
import ProgressBar  from 'react-bootstrap/ProgressBar';
import { useState, useEffect } from "react";
import Button  from 'react-bootstrap/Button';

 const   Timer = ({ timeoutSec }) => {
  const [counter, setCounter] = useState(timeoutSec);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
   
    return () => clearInterval(timer);
  }, [counter]);

  const restartTimer=()=>{
    setCounter(60);
  }
  console.log(counter)

  return <div> <Button variant="warning" onClick={restartTimer}>Сброс времени</Button><ProgressBar now={counter} max={60}  label={counter}/></div>
};
export default Timer;
