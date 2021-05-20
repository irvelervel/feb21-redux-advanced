import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import cartReducer from '../reducers/cart'
import userReducer from '../reducers/user'
import booksReducer from '../reducers/books'

import thunk from 'redux-thunk'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
  cart: {
    products: [],
  },
  user: {
    firstName: '',
  },
  books: {
    stock: [],
    error: false,
  },
}

const bigReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  books: booksReducer,
})

export default function configureStore() {
  return createStore(bigReducer, initialState, composeEnhancers(applyMiddleware(thunk)))
}
