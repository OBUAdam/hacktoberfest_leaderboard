import { TOGGLE_NAVBAR } from './types';

const toggleNavBar = () => dispatch => {
  dispatch({
    type: TOGGLE_NAVBAR
  });
};