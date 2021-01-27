import './Form.css';
import { Button, Form, FormGroup, Input } from 'reactstrap';

const FormFields = props => {
    return <Form>
    <FormGroup className='form_wrapper'>
      <Input type="text" placeholder="Enter author" />
      <Button>Submit</Button>
    </FormGroup>
    <FormGroup>
      <Input type="text" name="message" placeholder="Enter message" />
    </FormGroup>  
  </Form>
}

export default FormFields;