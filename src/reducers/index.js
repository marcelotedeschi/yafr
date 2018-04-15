import { combineReducers } from 'redux';
import FeedReducer from './reducer-feed';

const rootReducer = combineReducers({
  feed: FeedReducer
});

export default rootReducer;
