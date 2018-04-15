import { combineReducers } from 'redux';
import NewsReducer from './reducer-news';

const rootReducer = combineReducers({
  news: NewsReducer
});

export default rootReducer;
