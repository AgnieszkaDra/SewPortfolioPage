import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { GlobalStyle } from './styles/globalStyle.ts';

const rootElement = document.getElementById('root');
  ReactDOM.createRoot(rootElement!).render(
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>,
  );