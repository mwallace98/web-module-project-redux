import { combineReducers } from 'redux';


import movieReducer from './movieReducer';
import favoritesReducer from './Favorites'

const rootreducer = combineReducers({
    movieReducer,
    favoritesReducer
})
export default rootreducer;