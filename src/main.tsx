import WebApp from '@twa-dev/sdk'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'


WebApp.ready();
WebApp.expand()
WebApp.enableClosingConfirmation();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
