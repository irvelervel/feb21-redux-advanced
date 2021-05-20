import { initialState } from '../store'

const booksReducer = (state = initialState.books, action) => {
  switch (action.type) {
    case 'GET_BOOKS':
      return {
        ...state,
        stock: action.payload,
        error: false,
      }
    case 'GET_BOOKS_TOGGLE_ERROR':
      return {
        ...state,
        error: !state.error,
      }
    default:
      return state
  }
}

export default booksReducer
