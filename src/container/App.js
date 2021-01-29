import { useState } from 'react';
import Message from '../component/Message/Message';
import './App.css';


const App = () => {
  const [show, setShow] = useState(false);
  let changeInput = (num) => {
    num === 1 ? setShow(false) : setShow(true)
  } 
  return (
    <div className="App">    
    <label>
    <input type="radio" name='input' onChange={() => changeInput(0)}/>
    input1
      </label>  
      <label>
    <input type="radio" name='input' onChange={() => changeInput(1)}/>
    input2
    </label>


<Message show={show}/>

    {/* <div style={{display: show ? 'block' : 'none'}}>First input</div> */}
    <div style={{display: !show ? 'block' : 'none'}}>Secont input</div>
    </div>
    );
  }
  
  export default App;
  