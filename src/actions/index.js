// these are ACTION CREATORS
// they are just arrow functions that return actions (JS objects)

// redux-thunk is capable of ENRICHING your actions creators
// it will allow you to create ACTION CREATORS that not only return objects
// now they can return FUNCTIONS
// and the function that you will return out of an action creator
// will receive from redux TWO PARAMETERS: dispatch and getState

export const addToCartAction = (book) => ({
  type: 'ADD_ITEM_TO_CART', // mandatory property
  payload: book, // not mandatory property, for additional information
})

export const addToCartActionWithThunk = (book) => {
  return (dispatch, getState) => {
    // put here your logic!!
    console.log("I'm dispatching this out of a function!", getState())
    // fetches, api calls, etc.
    if (true) {
      dispatch({
        type: 'ADD_ITEM_TO_CART', // mandatory property
        payload: book, // not mandatory property, for additional information
      })
    }
  }
}

export const setUserNameAction = (username) => ({
  type: 'SET_USERNAME',
  payload: username,
})

export const removeFromCartAction = (index) => ({
  type: 'REMOVE_ITEM_FROM_CART',
  payload: index,
})

export const getBooksAction = (value) => {
  return async (dispatch, getState) => {
    if (value) {
      console.log('fetching the books...')
      try {
        let resp = await fetch('https://striveschool-api.herokuapp.com/food-bosoks')
        if (resp.ok) {
          let books = await resp.json()
          dispatch({
            type: 'GET_BOOKS',
            payload: books,
          })
        } else {
          console.log('error')
          setTimeout(() => {
            dispatch({
              type: 'GET_BOOKS_TOGGLE_ERROR',
            })
            setTimeout(() => {
              dispatch({
                type: 'GET_BOOKS_TOGGLE_ERROR',
              })
            }, 5000)
          }, 1000)
        }
      } catch (error) {
        console.log(error)
        setTimeout(() => {
          dispatch({
            type: 'GET_BOOKS_TOGGLE_ERROR',
          })
        }, 1000)
      }
    }
  }
}
