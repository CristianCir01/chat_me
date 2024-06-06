import React, { useEffect, useState } from 'react';
import '../Assets/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Chat_me from '../Components/Chat_me';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState("");

  const endpoint = 'http://127.0.0.1:5000';
  const navigate = useNavigate();

  const handleLogin = async() => {

    try {
      if(username!=="" && password!==""){
      var response = await axios.post(`${endpoint}/login`, {  email:username,password:password }).then(response=>{
        localStorage.setItem("id",response.data.id)
        localStorage.setItem("email",response.data.email)
        localStorage.setItem("password",response.data.password)
        localStorage.setItem("username",response.data.username) 

      })
      setPassword('')
      setUsername('');
      navigate("/chat_me")
      window.location.reload()
    }
    } catch (error) {
      console.error('Errore durante la login', error);
      setMsg("Errore durante la login "+error)
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
           <div style={{textAlign:"right", padding:"1px"}}>
      <i>Forgot Password? </i>
            <Link style={{color:"black"}} to={"/ForgotPassword"}>Here</Link>
         </div>
      <button onClick={async()=>{await handleLogin()}}>Login</button>
      <div>
      <i>Not Signed yet? Join Us!</i>
      <button
           
            style={{
                background:"#333333",
                color: "white",
                textDecoration: "none",
                display: "block",
                margin: "10px auto",
                padding: "8px 16px",
                width:"30%",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
          >
            <Link style={{color:"white"}} to={"/Signup"}>SignUp</Link>
          </button></div>
          <br/>
          {msg!==""&&<p >{msg}</p>}
    </div>
  );
};

