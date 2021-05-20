import { createStore, combineReducers } from 'redux'
import cartReducer from '../reducers/cart'
import userReducer from '../reducers/user'

export const initialState = {
  cart: {
    products: [],
  },
  user: {
    firstName: '',
  },
}

const bigReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
})

export default function configureStore() {
  return createStore(
    bigReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
}
