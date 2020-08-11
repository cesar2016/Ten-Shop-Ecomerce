import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar"

function handleSubmit(e) {
    e.preventDefault()
};

function App() {
    return (
        <div className="App jumbotron">
            <NavBar handleSubmit={handleSubmit}/>
        </div>
    );
}

export default App;
