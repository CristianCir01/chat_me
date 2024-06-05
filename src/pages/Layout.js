import { Outlet } from "react-router";
import "../App.css";
import Footer from "./Footer";
import Header from "./Header";
export default function Layout  (props)  {
  console.log("LAYOUT: " + props.isAuth);

  return (
    <div className="App">
      <Header isAuth={props.isAuth}/>
      <div style={{margin:"1rem"}}>
      <Outlet />
      </div>
 
    </div>
  );
};