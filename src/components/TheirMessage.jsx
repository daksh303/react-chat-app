const TheirMessage = ({lastMessage,message}) => {

    // to check if it is the first message by the user 
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
    return(
      <div className = "message-row">

      {
          isFirstMessageByUser && (
              <div className="message-avatar"
              style = {{backgroundImage: `url(${message?.sender?.avatar})`}}/>
          )
      }
          {
              message?.attachments?.lenght > 0 
                ? (
                    // method of returing the image
                    <img src = {message.attachemnt[0].file} 
                    alt="message-attachment"
                    className = "message-image" 
                    style = {{marginLeft: isFirstMessageByUser ? '4px' : '48px'}}/>
                ) : (
                    <div className="message" style = {{float: 'left'
                  ,backgroundColor: '#CABCDC',marginLeft: isFirstMessageByUser ? '4px' : '48px'}}>
                    {message.text}
                    </div>
                )
            
          }
      </div>
    );

}
export default TheirMessage;