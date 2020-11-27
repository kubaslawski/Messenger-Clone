import react, {useState} from "react";
import './App.css';
import { Button, FormControl, InputLabel, Input} from '@material-ui/core';

function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  console.log(input)
  
  const sendMessage = e => {
    e.preventDefault();
    setMessages([...messages, input]);
    setInput('');
  }

  return (
    <div className="App">
      <form>
      <FormControl>
        <InputLabel >Enter a message...</InputLabel>
        <Input value={input} onChange={e => setInput(e.target.value)}/>
        <Button disabled={!input} variant="outlined" color="primary" type="submit" onClick={sendMessage}>Send Message</Button>
      </FormControl>
      </form>

      {messages.map(message => {
        return (
          <p key={message.id}>{message}</p>
        )
      })}
    </div>
  );
}

export default App;
