import { TOGGLE_NAVBAR } from '../actions/types';

const initialState = {
  toggled: false
}

export default function(state=initialState, action) {
  switch(action.type) {
    case TOGGLE_NAVBAR:
      console.log("Toggling");
      return {
        ...state,
        toggled: !state.toggled
      };
    default:
      return state;
  }
}