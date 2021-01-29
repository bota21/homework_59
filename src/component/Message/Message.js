import './Message.css';
import { React } from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const Message = props => {
    let changeFormat = datetime => {
        let date = new Date(datetime).toLocaleString();
        return date
    }
    let printMessages = props.array.map(data => {
        return (
            <div className="my-2 rounded" key={data._id}>
            <Toast>
            <ToastHeader>
            <h5 className='title'>{data.author}</h5>
            <h5 className='title_date'>{changeFormat(data.datetime)}</h5> 
            </ToastHeader>
            <ToastBody className='text_wrapper'> 
            {data.message}
            </ToastBody>
            </Toast>
            </div> 
            )
        })
        return <div>
        {printMessages}
        </div>
    };
    
    export default Message
