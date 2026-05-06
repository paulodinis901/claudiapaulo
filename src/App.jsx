import React, { useEffect } from 'react';

/**
 * Main Application Component
 * Handles immediate redirection to Closum to bypass iframe security issues.
 */
function App() {
  useEffect(() => {
    // Determine the destination based on the current path
    const path = window.location.pathname;

    // Base URL for the wedding invitation
    const baseUrl = "https://lp.closum.co/lp/claudia-e-paulo/cp-casamento";

    if (path === "/success" || path === "/success/") {
      // Redirect to the success/thank you page
      window.location.replace(`${baseUrl}/success`);
    } else {
      // Redirect to the main invitation page
      window.location.replace(baseUrl);
    }
  }, []);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'sans-serif'
    }}>
      <p>A redirecionar para o convite de Cláudia & Paulo...</p>
    </div>
  );
}

export default App;