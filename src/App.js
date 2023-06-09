import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = (props) => {
  // console.log(props.state);
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="content-wrapper">
          <Routes>
            <Route
              path="/profile/*"
              element={
                <Profile
                  stateProfile={props.state.profilePage}
                  /* addPost={props.addPost}
                  updateNewPostText={props.updateNewPostText} */
                  dispatch={props.dispatch}
                />
              }
            />
            <Route
              path="/dialogs/*"
              element={
                <Dialogs
                  stateDialogs={props.state.dialogsPage}
                  /* addMessage={props.addMessage}
                  updateNewMessageText={props.updateNewMessageText} */
                  dispatch={props.dispatch}
                />
              }
            />
            <Route path="/news/*" element={<News />} />
            <Route path="/music/*" element={<Music />} />
            <Route path="/settings/*" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
