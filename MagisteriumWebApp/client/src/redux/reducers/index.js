import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import profileReducer from './profileReducer';
import subjectReducer from './subjectReducer';
import studentProfileReducer from './studentProfileReducer';
import messageReducer from './messageReducer';

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    profile: profileReducer,
    subjects: subjectReducer,
    studentprofile: studentProfileReducer,
    message: messageReducer
});