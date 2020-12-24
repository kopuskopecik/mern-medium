import { createStore } from 'redux';
import reducer from './reducer';

const initialState = {
    modal: false,
    secondModal: {
        nestedModal:false,
        closeAll: false,
    },
    modalSignup: false,
    signupModal: {
        nestedModal:false,
        closeAll: false,
    },
    isLogged: false,
}

const store = createStore(reducer, initialState);

export default store;


// const rootReducer = combineReducers({
//     todos: todos,
//     visibilityFilter: visibilityFilter
//   });
  
//   const initialState = { 
//     todos: [{id:123, text:'hello', completed: false}] 
//   };
//   const store = createStore(
//     rootReducer, 
//     initialState
//   );