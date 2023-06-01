//create global state
let state = {
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

export default state;
