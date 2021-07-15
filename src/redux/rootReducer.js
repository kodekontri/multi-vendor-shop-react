import { combineReducers } from 'redux';
import counterReducer from './reducers/countReducer';
import userReducer from './reducers/userReducer';


const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer
});

export default rootReducer;