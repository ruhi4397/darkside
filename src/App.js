import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

function App() {
  const [mode, setMode] = useState("light");
  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#283a4d";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Navbar mode={mode} togglemode={togglemode} />
      <Home mode={mode} />
    </>
  );
}

export default App;
