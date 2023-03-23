// import logo from './logo.svg';
import './App.css';
import React from 'react'
// import Navbar from './components/Navbar';
import Team1 from './components/Team-1.js'
import Team2 from './components/Team-2.js'
import Team3 from './components/Team-3.js'
import Team4 from './components/Team-4.js'
import Navbar from './components/Navbar.jsx'
function App() {
  return (
    <>
    <div>
      <Navbar/>
      <Team1/>
      <Team2/>
      <Team3/>
      <Team4/>
      </div>
    </>
  );
}

export default App;
