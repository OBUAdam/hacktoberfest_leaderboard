import { GET_PARTICIPANTS, TOGGLE_LEADERBOARD_LOADING } from '../actions/types';

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
    case TOGGLE_LEADERBOARD_LOADING:
      return {
        ...state,
        loading: !state.loading
      };
    default:
      return state;
  }
}