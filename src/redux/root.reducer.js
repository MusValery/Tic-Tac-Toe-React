import { combineReducers } from 'redux';
import cartReducer from './cart/card.reduce';

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;