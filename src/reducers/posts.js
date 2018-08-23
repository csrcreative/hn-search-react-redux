import { REQUEST_POSTS } from '../actions';

const initialState =  {
  data: []
};

export default function posts(state = initialState, action) {

  switch (action.type) {
    case REQUEST_POSTS:
      return {
        ...state, data: action.payload.body.hits
      };
    default:
      return state;
  }

}