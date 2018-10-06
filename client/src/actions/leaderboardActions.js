import axios from 'axios';
import { GET_POINTS } from './types';

export const getPoints = () => dispatch => {
  axios
    .get('/api/points')
    .then(res =>
      dispatch({
        type: GET_POINTS,
        payload: res.data
      })
    );
};