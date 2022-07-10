

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
	  userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}

			
			projectID='cb335cd3-4675-4aa2-bc31-f5119b19fe17'
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
