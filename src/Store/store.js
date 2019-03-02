import { createStore } from 'redux';
import tasksReducer from '../Reducers/tasksReducer';

const store = createStore(tasksReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
  console.log(store.getState());
});



export default store;