import axios from 'axios';
import { GET_PARTICIPANTS, TOGGLE_LEADERBOARD_LOADING } from './types';

export const getParticipants = () => dispatch => {
  axios
    .get('/api/participants')
    .then(res => {
      console.log(res);
      const sorted = res.data.sort((a, b) => b.numPullReq - a.numPullReq);
      dispatch({
        type: GET_PARTICIPANTS,
        payload: sorted
      })
    });
};

export const toggleLeaderboardLoading = () => {
  return {
    type: TOGGLE_LEADERBOARD_LOADING
  };
};