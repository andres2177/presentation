import React from 'react';
import './App.css';
import foto_personal from './images/mi_foto.jpg';
function Curriculum() {
  return (
    <div className="curriculum-container">
    <div className="header">
      <h1>Andrés Vela Ilafaya</h1>
      <h2>Desarrollador de Software</h2>
    </div>
    
    <div className="contact-info">
      <p><strong>Email:</strong> ilafayaandres@gmail.com</p>
      <p><strong>Teléfono:</strong> 74564025</p>
      <p><strong>Nivel de Inglés:</strong> B2</p>
    </div>
    
    <div className="hobbies">
      <h3>Hobbies</h3>
      <ul>
        <li>Deportes</li>
        <li>Videojuegos</li>
        <li>Series</li>
      </ul>
    </div>
  </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={foto_personal} alt="Mi foto" className="profile-photo" />
        <Curriculum />
      </header>
    </div>
  );
}

export default App;
