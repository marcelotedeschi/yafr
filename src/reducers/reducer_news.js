import { FETCH_NEWS } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_NEWS:
      return action.payload.items;

    default:
      return state;
  }
}
