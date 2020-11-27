import {useState, useEffect} from "react";
import './css/App.css';
import { Button, FormControl, InputLabel, Input, IconButton} from '@material-ui/core';
import SendIcon from "@material-ui/icons/Send";
import {Message} from "./components/Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from 'react-flip-move';

function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  console.log(messages)

  useEffect(() => {
    db
    .collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map( doc =>
        ({id: doc.id, message: doc.data()})
      ))
    })
  }, [])

  useEffect(() => {
    setUsername(prompt('Enter your name'))
  }, [])
  
  const sendMessage = e => {
    e.preventDefault();
    
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
  }

  return (
    <div className="App">
      <img style={{width: 50, height: 50}}src="https://www.flaticon.com/svg/static/icons/svg/2111/2111402.svg"/>
      <h2>Welcome {username}</h2>
      <form className="app__form">
      <FormControl>
        <InputLabel >Enter a message...</InputLabel>
        <Input value={input} onChange={e => setInput(e.target.value)}/>
        <IconButton
          disabled={!input} 
          variant="outlined"
          color="primary" 
          type="submit" 
          onClick={sendMessage}
        >
          <SendIcon/>
        </IconButton>
      </FormControl>
      </form>

      <FlipMove>
      {messages.map(({id, message}) => {
        return (
        <Message key={id} message={message} username={username}/>
        )
      })}
      </FlipMove>
    </div>
  );
}

export default App;
