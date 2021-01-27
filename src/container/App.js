import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Message from '../component/Message/Message';
import ChatForm from '../component/ChatForm/ChatForm';

function App() {
  let urlForSend = 'http://146.185.154.90:8000/messages';
  const [messages, setMessages] = useState([]);
  
  useEffect(async() => {
    try{
      let getUrl = axios.get(urlForSend);
      await getUrl.then(res => {
        setMessages(res.data)
      })
    } catch(error) {
      console.error(error);
    }   
  }, [messages])

  return (
    <div className="App">      
    <ChatForm />
    <Message array={messages} /> 
    </div>
    );
  }
  
  export default App;
  