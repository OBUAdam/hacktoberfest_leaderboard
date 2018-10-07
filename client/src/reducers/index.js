import { combineReducers } from 'redux';

import navBarReducer from './navBarReducer';
import leaderboardReducer from './leaderboardReducer';

export default combineReducers({
    leaderboard: leaderboardReducer
});