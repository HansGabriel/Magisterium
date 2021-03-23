import axios from 'axios';
import { 
    GET_STUDENT_PROFILE, 
    PROFILE_LOADING,
    CLEAR_STUDENT_PROFILE,
} 
from './types';

// Get current profile
export const getStudentProfile = () => dispatch => {
    dispatch(setProfileLoading());
    axios.get('/api/profile/student-profile')
        .then(res => 
            dispatch({
                type: GET_STUDENT_PROFILE,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: GET_STUDENT_PROFILE,
                payload: {}
            })
        );
}

// Profile loading
export const setProfileLoading = () => {
    return {
        type: PROFILE_LOADING
    };
}

// Clear profile
export const clearStudentProfile = () => {
    return {
        type: CLEAR_STUDENT_PROFILE
    };
}