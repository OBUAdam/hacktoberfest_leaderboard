import axios from 'axios';
import { GET_PARTICIPANTS } from './types';

export const getParticipants = () => dispatch => {
  axios
    .get('/api/participants')
    .then(res => dispatch({
        type: GET_PARTICIPANTS,
        payload: res.data
      }));
};