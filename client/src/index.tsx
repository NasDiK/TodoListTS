import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainMenu from './components/MainMenu';
import reportWebVitals from './reportWebVitals';
import AuthPage from './components/AuthPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthPage />
    <MainMenu test={'Hello'} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
