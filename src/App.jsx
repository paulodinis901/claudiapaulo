import React, { useEffect } from 'react';
import './App.css'; // Garante que este import existe, mesmo com o ficheiro vazio

function App() {
  useEffect(() => {
    // Muda o nome na aba do navegador
    document.title = "Casamento Cláudia & Paulo";
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh', border: 'none' }}>
      <iframe
        src="https://lp.closum.co/lp/claudia-e-paulo/cp-casamento"
        title="Convite de Casamento"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
        }}
        allow="autoplay; fullscreen"
      />
    </div>
  );
}

export default App;