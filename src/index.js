import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StoreProvider } from './context/Store';
import { ThemeProvider } from 'styled-components';

const theme = {
  primaryColor: '#FF6600',
  secondaryColor: '#FBAF7D',
  blackColor: '#000000',
  whiteColor: '#ffffff',
  grayColor: '#F7F8F9',
  liteprimaryColor: '#ff660061',
  liteBlackColor: '#00000026',
  litewhiteColor: '#ffffff9c',
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <App/>
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
