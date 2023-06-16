const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 5,
        message: state.newMessageText,
      };
      state.messages.push(newMessage);
      state.newMessageText = '';
      break;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      break;
    default:
      break;
  }
  return state;
};

export const addMessageActionCreator = () => ({ type: 'ADD-MESSAGE' });
export const updateNewMessageTextActionCreator = (newText) => ({
  type: 'UPDATE-NEW-MESSAGE-TEXT',
  newText: newText,
});

export default dialogsReducer;
