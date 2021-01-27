import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Message from './component/Message/Message';
import Form from './component/Form/Form';

function App() {
  
  return (
    <div className="App">
         <Form 
        />
        <Message 
        author="John" date='01/02/2021' message='hello'
        />
    </div>
  );
}

export default App;
