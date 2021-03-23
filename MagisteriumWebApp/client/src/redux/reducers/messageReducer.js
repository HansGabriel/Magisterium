import { 
    MESSAGE_LOADING,
    GET_MESSAGES,
    CLEAR_MESSAGES
} from '../actions/types';

const initialState = {
    messages: null,
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case MESSAGE_LOADING:
            return {
                ...state,
                loading: true
            };
        case GET_MESSAGES:
            return {
                ...state,
                loading: false,
                messages: action.payload
            }
        case CLEAR_MESSAGES:
            return {
                ...state,
                messages: null
            };
        default:
            return state;
    }
}