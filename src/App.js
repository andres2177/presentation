import React from 'react';
import './App.css';
import foto_personal from './images/foto.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mi Presentación</h1> 
        <img src={foto_personal} alt="perfil" />
        <p>
    Andres Vela Ilafaya
        </p>
        <h2>Educacion</h2>
        <ul>
          <li>colegio U.E. Republica de Venezuela</li>
          <li>tecnico superior en sistemas informaticos</li>
          
        </ul>
      </header>
    </div>
  );
}

export default App;
