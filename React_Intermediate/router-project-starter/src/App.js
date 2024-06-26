import "./App.css";
import Navbar from "./components/Navbar";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";

function App() {
  // isme tailwind wala code added nhi hai to
 //isko dekhne k bajay same name wala dusra code 
//  dekho, jisme tailwind bhi added hai

  const[isLoggedIn, setIsLoggedIn] = useState(false);
  return <div>
    <Navbar isLoggedIn = {isLoggedIn} setIsLoggedIn/>

    {/* have to create the routes */}
    <Routes>

      <Route path="/" element = {<Home/>} />
      <Route path ="/login" element = {<Login/>} />
      <Route path="/signup" element = {<Signup/>} />
      <Route path ="/dashboard" element = {<Dashboard/>} />
    </Routes>
  </div>
}

export default App;
