import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';

/* let dialogsData = [
  { id: 1, name: 'Anna' },
  { id: 2, name: 'Katherine' },
  { id: 3, name: 'Alex' },
  { id: 4, name: 'Ben' },
  { id: 5, name: 'Bill' },
];

let messagesData = [
  { id: 1, message: "Hello, what's your name?" },
  { id: 2, message: 'I am Katherine' },
  { id: 3, message: 'How are you?' },
  { id: 4, message: 'I am fine' },
];

let postsData = [
  { id: 1, message: 'kek1', likes: 15 },
  { id: 2, message: 'kek2', likes: 5 },
  { id: 3, message: 'kek3', likes: 3 },
  { id: 4, message: 'kek4', likes: 12 },
  { id: 5, message: 'kek5', likes: 9 },
]; */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App state={state} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
