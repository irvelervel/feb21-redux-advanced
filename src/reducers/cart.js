import { initialState } from '../store'

const cartReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case 'ADD_ITEM_TO_CART':
      return {
        ...state,
        products: [...state.products, action.payload],
      }
    case 'REMOVE_ITEM_FROM_CART':
      return {
        ...state,
        products: [...state.products.slice(0, action.payload), ...state.products.slice(action.payload + 1)],
        //   products: state.products.filter((p, i) => i !== action.payload),
      }
    default:
      return state
  }
}

export default cartReducer
