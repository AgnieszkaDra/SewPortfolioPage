import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import store from './store/store.tsx'
import App from './App.tsx'
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/globalStyle.ts';
import theme from './styles/themes.ts'

const rootElement = document.getElementById('root');
  ReactDOM.createRoot(rootElement!).render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <GlobalStyle />
          <App />
        </Provider>
      </ThemeProvider>
  </React.StrictMode>,
  );