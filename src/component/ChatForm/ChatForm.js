import './ChatForm.css';
import {useState} from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

const ChatForm = props => {
  const [formFields, setFormFields] = useState({
    author: '',
    message: ''
  });
  let inputHandler = e => {
    setFormFields({...formFields, [e.target.name]: e.target.value})
  }
  return (
  <Form onSubmit={e => props.submit(e, ...formFields)}>
  <FormGroup className='form_wrapper'>
  <Input type="text" placeholder="Enter author"
  name='author' onChange={inputHandler} value={formFields.author}/>
  <Button>Submit</Button>
  </FormGroup>
  <FormGroup>
  <Input type="text" name="message" placeholder="Enter message" 
  name='message' onChange={inputHandler} value={formFields.message} />
  </FormGroup>  
  </Form>
  )
}

export default ChatForm;