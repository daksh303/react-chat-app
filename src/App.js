

import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

import './App.css';
function App() {
  if(!localStorage.getItem('username')) 
   return <LoginForm/>
  return (

   
// make the data static
    <div className="App">
   <ChatEngine height="100vh"
    projectID = "78fee5b7-c6ec-477c-bf61-b11dfc4e0109" 
    userName= {localStorage.getItem('username')}

    userSecret= {localStorage.getItem('password')}
    //render our own chat props
    // editing out the main chat Feed using this syntax check in docs

    // Chat Feed <ChatFeed {...props} /> receives all Chat Engine props, 
    // and will render a chat feed for the active chat.
    renderChatFeed = {(chatAppProps)=> <ChatFeed {... chatAppProps} />} />
    onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    </div>
  );
}

export default App;
