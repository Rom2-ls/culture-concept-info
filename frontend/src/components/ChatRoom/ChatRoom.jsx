import React, { useState } from 'react';

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const messageInput = event.target.elements.message;
    const newMessage = messageInput.value;
    setMessages([...messages, newMessage]);
    messageInput.value = '';
  };
  
  return (

    <form>
      <label htmlFor="message">Message:</label>
      <input type="text" id="message" name="message" />
      <button type="submit">Send</button>
    </form>
  );
};

export default ChatRoom;