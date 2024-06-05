import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Assets/Chat_me.css'; 

const endpoint = 'http://127.0.0.1:5000'; // URL dell'API


function Chat_me() {
  const [user, setUser] = useState(null);
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([{}]);
  const [message, setMessage] = useState('');
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      // Mock response
       const response = await axios.get(`${endpoint}/users/1`);
      //const response = { data: mockUser };
      setUser(response.data);
      fetchChats(response.data.id);
    } catch (error) {
      console.error('Errore durante il recupero dell\'utente:', error);
    }
  };

  const fetchChats = async (userId) => {
    try {
      // Mock response
     const response = await axios.get(`${endpoint}/users/${userId}/chats`);
      //const response = { data: mockChats };
      setChats(response.data);
    } catch (error) {
      console.error('Errore durante il recupero delle chat dell\'utente:', error);
    }
  };

  const fetchMessages = async (selectedChat) => {
    try {
      const chat = chats.find(c => c.chatid === selectedChat.chatid);
      if (chat) {
        // Mock response
       const response = await axios.get(`${endpoint}/chats/1/${selectedChat.userId2}`);
        //  const response = { data: chat.list };
        setMessages(response.data.list);
        setConnected(true);
      }
    } catch (error) {
      console.error('Errore durante il recupero dei messaggi della chat:', error);
    }
  };

  const sendMessage = async (mess) => {
    try {
      if(mess!==""){
      await axios.post(`${endpoint}/send_message/${user.id}/${selectedChat.userId2}`, { sender: user.id, message:mess });
      fetchMessages(selectedChat);
      setMessage('');}
    } catch (error) {
      console.error('Errore durante l\'invio del messaggio:', error);
    }
  };

  const handleChatSelection = (chat) => {
    setSelectedChat(chat);
    fetchMessages(chat);
  };

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (user === null ? "Utente non trovato." :
    <div className="chatme">
      <div className="chat-list">
        <h3>Chat List</h3>
        <ul>
          {chats.map((chat) => (
            <li key={chat.chatid} onClick={() => handleChatSelection(chat)}>Chat with {chat.userId1 === user.id ? `User ${chat.userId2}` : `User ${chat.userId1}`}</li>
          ))}
        </ul>
      </div>
      <div className="chatbox">
        {selectedChat && (
          <>
            <h3>Chat with {selectedChat.userId1 === user.id ? `User ${selectedChat.userId2}` : `User ${selectedChat.userId1}`}</h3>
            <ul>
              {messages.map((msg, index) => (
                <li key={index} align={msg.sender !== user.id ? "left" : "right"}>
                  <div style={{ borderRadius: "20px", padding: "1rem", backgroundColor: msg.sender !== user.id ? "#fff" : "#dcf8c6", marginLeft: msg.sender !== user.id ? "" : "auto" }}>
                    <h4>{msg.sender}</h4>
                    <p>{msg.message}</p>
                  </div>
                </li>
              ))}
            </ul>
            <input
              type="text"
              className="input"
              placeholder="Inserisci il messaggio"
              disabled={!connected}
              value={message}
              onChange={handleChange}
            />
            <button disabled={!connected} className="button" onClick={()=>sendMessage(message)}>Invia</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Chat_me;
