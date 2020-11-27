import react, {useState, useEffect} from "react";
import './App.css';
import { Button, FormControl, InputLabel, Input} from '@material-ui/core';
import {Message} from "./components/Message";

function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{username: "Kuba", text: "Hello"}]);
  const [username, setUsername] = useState('');

  console.log(messages)

  useEffect(() => {
    setUsername(prompt('Enter your name'))
  }, [])
  
  const sendMessage = e => {
    e.preventDefault();
    setMessages([...messages, {username: username, text: input}]);
    setInput('');
  }

  return (
    <div className="App">
      <h2>Welcome {username}</h2>
      <form>
      <FormControl>
        <InputLabel >Enter a message...</InputLabel>
        <Input value={input} onChange={e => setInput(e.target.value)}/>
        <Button disabled={!input} variant="outlined" color="primary" type="submit" onClick={sendMessage}>Send Message</Button>
      </FormControl>
      </form>

      {messages.map(message => {
        return (
        <Message message={message} username={username}/>
        )
      })}
    </div>
  );
}

export default App;
