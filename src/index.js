import React from "react";

import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import Login from "./Accounting/Login";
import SignUp from "./Accounting/SignUp";
import Account from "./Accounting/Account";
import ForgotPassword from "./Accounting/ForgotPassword";
import Support from "./Accounting/Support";
import Chat_me from "./Components/Chat_me";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Route,BrowserRouter, Routes} from "react-router-dom";
export default function App() {

 // const token = localStorage.getItem("authKey");
 
 const token =null;
 
  const [isAuth, setIsAuth] = React.useState(token !== null && token !== undefined);
  var userRole ;

  if (isAuth) 
     userRole = localStorage.getItem("userRole");
 
 
  return (
    //Usare il Router per consentire la navigazione tra le pagine all'interno della piattaforma
      
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout isAuth={isAuth}/>}>
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/Chat_me" element={<Chat_me />} />
          <Route path="/Support" element={<Support />} />
          <Route path="/Account" element={<Account />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
reportWebVitals();