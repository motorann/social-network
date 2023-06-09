//create global const, store and state

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'kek1', likes: 15 },
        { id: 2, message: 'kek2', likes: 5 },
        { id: 3, message: 'kek3', likes: 3 },
        { id: 4, message: 'kek4', likes: 12 },
      ],
      newPostText: '',
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Anna' },
        { id: 2, name: 'Katherine' },
        { id: 3, name: 'Alex' },
        { id: 4, name: 'Ben' },
        { id: 5, name: 'Bill' },
      ],
      messages: [
        { id: 1, message: "Hello, what's your name?" },
        { id: 2, message: 'I am Katherine' },
        { id: 3, message: 'How are you?' },
        { id: 4, message: 'I am fine' },
      ],
      newMessageText: '',
    },
  },

  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log('State changed');
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    switch (action.type) {
      case ADD_POST:
        this.addPost();
        break;
      case UPDATE_NEW_POST_TEXT:
        this.updateNewPostText(action.newText);
        break;
      case ADD_MESSAGE:
        this.addMessage();
        break;
      case UPDATE_NEW_MESSAGE_TEXT:
        this.updateNewMessageText(action.newText);
        break;
      default:
        break;
    }
  },

  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likes: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },

  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  addMessage() {
    let newMessage = {
      id: 5,
      message: this._state.dialogsPage.newMessageText,
    };

    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageText = '';
    this._callSubscriber(this._state);
  },

  updateNewMessageText(newText) {
    this._state.dialogsPage.newMessageText = newText;
    this._callSubscriber(this._state);
  },
};

export const addPostActionCreator = () => ({ type: 'ADD-POST' });
export const updateNewPostTextActionCreator = (newText) => ({
  type: 'UPDATE-NEW-POST-TEXT',
  newText: newText,
});
export const addMessageActionCreator = () => ({ type: 'ADD-MESSAGE' });
export const updateNewMessageTextActionCreator = (newText) => ({
  type: 'UPDATE-NEW-MESSAGE-TEXT',
  newText: newText,
});

export default store;

//old version

/* let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'kek1', likes: 15 },
      { id: 2, message: 'kek2', likes: 5 },
      { id: 3, message: 'kek3', likes: 3 },
      { id: 4, message: 'kek4', likes: 12 },
    ],
    newPostText: '',
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: 'Anna' },
      { id: 2, name: 'Katherine' },
      { id: 3, name: 'Alex' },
      { id: 4, name: 'Ben' },
      { id: 5, name: 'Bill' },
    ],
    messages: [
      { id: 1, message: "Hello, what's your name?" },
      { id: 2, message: 'I am Katherine' },
      { id: 3, message: 'How are you?' },
      { id: 4, message: 'I am fine' },
    ],
    newMessageText: '',
  },
};

// rerender App when every change
let rerenderEntireTree;

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

// for Profile section

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likes: 0,
  };
  state.profilePage.posts.push(newPost);
  updateNewPostText('');
  rerenderEntireTree(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

//for Dialogs section

export const addMessage = () => {
  let newMessage = {
    id: 5,
    message: state.dialogsPage.newMessageText,
  };

  state.dialogsPage.messages.push(newMessage);
  updateNewMessageText('');
  rerenderEntireTree(state);
};

export const updateNewMessageText = (newText) => {
  state.dialogsPage.newMessageText = newText;
  rerenderEntireTree(state);
};

// export default state;
 */
