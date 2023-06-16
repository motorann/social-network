const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [
    { id: 1, message: 'kek1', likes: 15 },
    { id: 2, message: 'kek2', likes: 5 },
    { id: 3, message: 'kek3', likes: 3 },
    { id: 4, message: 'kek4', likes: 12 },
  ],
  newPostText: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likes: 0,
      };
      state.posts.push(newPost);
      state.newPostText = '';
      break;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      break;
    default:
      break;
  }
  return state;
};

export const addPostActionCreator = () => ({ type: 'ADD-POST' });
export const updateNewPostTextActionCreator = (newText) => ({
  type: 'UPDATE-NEW-POST-TEXT',
  newText: newText,
});

export default profileReducer;
