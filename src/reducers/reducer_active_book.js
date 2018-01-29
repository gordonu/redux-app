//State argument is not application state, only the state this reducer is responsible for.
export default function (state = null, action) {
  //two arguments, the current state and action
  //must always return an not undefined value. state = null. if state is undefined set it equal to null.

  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
      //object returned from reduce must always be fresh and clean
  }
  //If you don't care about the action, need a base case to return the current state.
  return state;
}