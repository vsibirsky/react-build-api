import React from "react"
import Header from "./components/ui/Header"
import './App.css';
import FindResource from "./components/np_grid/FindResource";



function App() {
  return (
    <div className="container">
    <Header />
    <FindResource />
    </div>
  );
}

export default App;
