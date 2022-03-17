// chat bubble that we will sent 
const MyMessage = ({message}) => {
    // to check if my message is an image or not
    if(message?.attachments?.lenght > 0 ){
        return(
            // method of returing the image
            <img src = {message.attachemnt[0].file} 
            alt="message-attachment"
            className = "message-image" 
            style = {{float: 'right'}}/>
        )
    }
    return(
      <div className="message" style = {{float: 'right', marginRight: '18px' ,
      color: 'white',backgroundColor: '#3B2A50'}}>
          {message.text}
      </div>
    );

}
export default MyMessage;