import { GET_PARTICIPANTS } from '../actions/types';

const initialState = {
  participants: [],
  isloading: false
}

export default function(state=initialState, action) {
  switch(action.type) {
    case GET_PARTICIPANTS:
      return {
        ...state,
        participants: action.payload,
      };
    default:
      return state;
  }
}