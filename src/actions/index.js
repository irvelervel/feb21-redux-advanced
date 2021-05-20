export const addToCartAction = (book) => ({
  type: 'ADD_ITEM_TO_CART', // mandatory property
  payload: book, // not mandatory property, for additional information
})

export const setUserNameAction = (username) => ({
  type: 'SET_USERNAME',
  payload: username,
})

export const removeFromCartAction = (index) => ({
  type: 'REMOVE_ITEM_FROM_CART',
  payload: index,
})
