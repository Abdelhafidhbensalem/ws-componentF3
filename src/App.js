import './App.css';
import React from "react";
import CardList from './Components/CardList/CardList';
import { NavBar } from "./Components/NavBar/NavBar"

function App() {

  return (
    <div className="App">
      <NavBar />
      <CardList />
    </div>

  );
}

export default App;

