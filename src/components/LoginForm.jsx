import {useState} from 'react';
import axios from 'axios';

const LoginForm = () => {
    

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [error, setError] = useState('');
    
    const handleSubmit = async (e) => {
       e.preventDefault();
        
    const authObject = {'Project-ID': "78fee5b7-c6ec-477c-bf61-b11dfc4e0109" , 'User-Name': username, 'User-Secret': password}
    
    // try and catch block 
    //DOUBT
    try{
        // username / password => chatengine -> give messages
        
         axios.get('https://api.chatengine.io/chats', { headers: authObject });

     // if that works out -> successfully logged in

     localStorage.setItem('username',username);
     localStorage.setItem('password',password);

     window.location.reload();

    }
    catch(error){
       // else error -> try with new credentials or username
       setError('Ops incorrect credentials.')
    }

       
       
       
    }
    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">
                    <form onSubmit={handleSubmit} >
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required  />
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required  />
                        <div align="center">
                            <button type="submit" className="button">
                                <span>Start Chatting</span>
                            </button>
                            
                        </div>
                        <h2 className="error">{error}</h2>
                    </form>
                </h1>
            </div>
        </div>
    )
};

export default LoginForm;
