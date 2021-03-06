import { 
    GET_STUDENT_PROFILE, 
    PROFILE_LOADING, 
    CLEAR_STUDENT_PROFILE,
} from '../actions/types';

const initialState = {
    profile: null,
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case PROFILE_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_STUDENT_PROFILE:
            return {
                ...state,
                profile: action.payload,
                loading: false
            };
        case CLEAR_STUDENT_PROFILE:
            return {
                ...state,
                profile: null
            };
        default:
            return state;
    }
}