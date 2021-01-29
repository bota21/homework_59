import './Message.css';
const Message = props => {
        return (
            <div style={{display: props.show ? 'block' : 'none'}}>
                First input           
            </div> 
            )
    };
    
    export default Message