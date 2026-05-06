import React, { useEffect, useState } from 'react';
import './App.css';

/**
 * Main Application Component for the Wedding Invitation
 * Corrected the state setter name to avoid ReferenceError.
 */
function App() {
  // Define the state and its setter function correctly
  const [closumUrl, setClosumUrl] = useState("https://lp.closum.co/lp/claudia-e-paulo/cp-casamento/");

  useEffect(() => {
    // Set the browser tab title
    document.title = "Casamento Cláudia & Paulo";

    // Detect the current URL path from the browser
    const path = window.location.pathname;

    // Use setClosumUrl consistently to update the iframe source
    if (path === "/success" || path === "/success/") {
      setClosumUrl("https://lp.closum.co/lp/claudia-e-paulo/cp-casamento/success");
    } else {
      setClosumUrl("https://lp.closum.co/lp/claudia-e-paulo/cp-casamento");
    }
  }, []);

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      margin: 0,
      padding: 0,
      overflow: 'hidden',
      backgroundColor: '#fff'
    }}>
      <iframe
        src={closumUrl}
        title="Convite de Casamento"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
        }}
        // Necessary permissions for the Closum invitation features
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
      />
    </div>
  );
}

export default App;