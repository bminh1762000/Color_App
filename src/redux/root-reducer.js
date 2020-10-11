import ColorReducer from './colors/colors.reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
   data : ColorReducer
});

export default rootReducer;