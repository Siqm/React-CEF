import React, { createContext, useEffect, useState } from 'react';

export const AppVisibility = createContext(null);

/**
     * isEnvBrowser()
     * @returns true se estiver no navegador, false se estiver usando o CEF.
     */
export function isEnvBrowser() {
  return !(window.invokeNative)
}
/**
 * App
 * 
 * @returns void
 */
export default function App() {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isEnvBrowser) {
      setVisible(true)
    }
  }, [visible])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Instalando projeto</h1>
      </header>
    </div>
  );
}

