import { useState, useEffect } from "react";
import Navbar from "../templates/Navbar";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
//import ".../src/App.css"

const Home = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    setName("Dass TAs");
  }, []);

  return (
    //<div style={{margin:"0% 0% 0% 0%"}}>
    <div xs={0}>
      <Navbar />
      <h1>welcome to SPR</h1>

    </div>




  );
};

export default Home;
