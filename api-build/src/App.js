import React from "react"
import Header from "./components/ui/Header"
import './App.css';
import FindProgram from "./components/np_grid/FindProgram";


function App() {
  return (
    <div className="container">
    <Header />
    <FindProgram />
    </div>
  );
}

export default App;
