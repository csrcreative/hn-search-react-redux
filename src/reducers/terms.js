import { SAVE_TERM } from '../actions';

const initialState =  {
  term: []
};

export default function terms(state = initialState, action) {

  switch (action.type) {
    case SAVE_TERM:
      return {
        ...state, term: [...state.term, action.payload]
      };
    default:
      return state;
  }

}
