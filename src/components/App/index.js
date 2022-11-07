import {useState} from "react";

import './App.css';

function App() {
  const [message, setMessage] = useState("");

  return (
    <div className="App">
      <textarea placeholder="Digite o seu texto aqui..." rows={10} onChange={(e) => setMessage(e.target.value.toUpperCase())}></textarea>
      <h2>Texto em CAIXA ALTA:</h2>      
      <p>{message}</p>      
    </div>
  );
}

export default App;
