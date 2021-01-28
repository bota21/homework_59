import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Message from '../component/Message/Message';
import ChatForm from '../component/ChatForm/ChatForm';

function App() {
  let url = 'http://146.185.154.90:8000/messages';
  const [messages, setMessages] = useState([]);
  
  useEffect(async() => {
    try{
      let getUrl = axios.get(url);
      await getUrl.then(res => {
        setMessages(res.data)
      })
    } catch(error) {
      console.error(error);
    }   
  }, [messages])

  let submitMessage = (async(e, data) => {  
    e.preventDefault();
    const newValue = new URLSearchParams();
    newValue.set('author', data.author);
    newValue.set('message', data.message);
    await axios({
      method: 'post',
      url: url,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      data: newValue
    })
    .then(res => console.log(res))
    .catch(error => console.log(error))
  });
  return (
    <div className="App">      
    <ChatForm submit={submitMessage}  />
    <Message array={messages} /> 
    </div>
    );
  }
  
  export default App;
  