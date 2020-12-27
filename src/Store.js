import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/CombineReducer'

const Store = createStore(
  rootReducer, 
  composeWithDevTools(applyMiddleware(thunk)
));

export default Store;