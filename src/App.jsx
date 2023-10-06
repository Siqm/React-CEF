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
  const [requestedRoute, setRequestedRoute] = useState(null);



  useEffect(() => {
    console.log('visible', visible);
    if (isEnvBrowser()) {
      setVisible(true)
      setRequestedRoute(null)
    }
  }, [])

  if (visible) {
    return (
      <div className="App">
      <header className="App-header">
        <h1>Instalando projeto</h1>
      </header>
    </div>
    )
  } else {
    return (
      <>
        <h1>Loading</h1>
      </>
    )
  }
}

