import { FETCH_FEED } from '../actions';

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_FEED:
      return action.payload.item;

    default:
      return state;
  }
}
