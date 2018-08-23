import { combineReducers } from 'redux';
import PostsReducer from './posts';
import TermsReducer from './terms';

const rootReducer = combineReducers({
  posts: PostsReducer,
  terms: TermsReducer,
});

export default rootReducer;