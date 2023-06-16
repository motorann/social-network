import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/reduxStore';
//import store from './redux/store';
/*  import state from './redux/state';
 import {
  addPost,
  updateNewPostText,
  addMessage,
  updateNewMessageText,
} from './redux/state'; 
import { subscribe } from './redux/state'; 
 */
const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = () => {
  root.render(
    <React.StrictMode>
      <App
        store={store}
        /*  state={state} */
        /*  addPost={addPost} */
        /*  updateNewPostText={updateNewPostText} */
        /*  addMessage={addMessage} */
        /*  updateNewMessageText={updateNewMessageText} */
        state={store.getState()}
        /* addPost={store.addPost.bind(store)}
        updateNewPostText={store.updateNewPostText.bind(store)}
        addMessage={store.addMessage.bind(store)}
        updateNewMessageText={store.updateNewMessageText.bind(store)} */
        dispatch={store.dispatch.bind(store)}
      />
    </React.StrictMode>
  );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

/* rerenderEntireTree(state);

subscribe(rerenderEntireTree); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
