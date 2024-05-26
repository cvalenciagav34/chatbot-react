import React, { useState } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const simulateResponse = (message) => {
    const responses = {
      'hello': 'Hi! How can I help you today?',
      'how are you?': 'I am just a bot, but I am functioning as expected!',
      'bye': 'Goodbye! Have a great day!',
    };

    return responses[message.toLowerCase()] || "I'm sorry, I don't understand that.";
  };

  const handleSend = () => {
    if (input.trim()) {
      const newMessage = { text: input, sender: 'user' };
      setMessages([...messages, newMessage]);

      const response = simulateResponse(input);
      const botMessage = { text: response, sender: 'bot' };
      setMessages((prevMessages) => [...prevMessages, botMessage]);

      setInput('');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Chatbot Interface</h1>
        <div className="chat-window">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              {message.text}
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message"
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </header>
    </div>
  );
}

export default App;
