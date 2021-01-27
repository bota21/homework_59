import './Message.css';
import { React } from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const Message = props => {
    return <div>
      <div className="p-3 my-2 rounded">
        <Toast>
          <ToastHeader>
              <h5>{props.author}</h5>
              <h5>{props.date}</h5> 
          </ToastHeader>
          <ToastBody className='text_wrapper'> 
            {props.message}
          </ToastBody>
        </Toast>
      </div> 
    </div>
};

export default Message