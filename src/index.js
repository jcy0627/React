import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NotificationList from './Lifecycle/NotificationList';
import Clock from './Element/Clock';


const root = ReactDOM.createRoot(document.getElementById("root"));

setInterval(()=> {

  root.render(<App />);
  
}, 1000);
reportWebVitals();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
