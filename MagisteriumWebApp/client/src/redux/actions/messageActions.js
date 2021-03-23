import axios from 'axios';
import { 
    MESSAGE_LOADING,
    GET_MESSAGES,
    CLEAR_MESSAGES
} 
from './types';


// Create Message
export const createMessage = (bookingDetails, history) => dispatch => {
    axios.post('/api/message', bookingDetails)
        .catch(err => console.error(err));
}

// Get all messages of user
export const getMessages = (userId, isTutor) => dispatch => {
    dispatch(setMessageLoading());
    axios
      .post(`/api/message/${userId}/${isTutor}`)
      .then(res => {
            dispatch({
              type: GET_MESSAGES,
              payload: res.data
            })
        }
      )
      .catch(err =>
        dispatch({
          type: GET_MESSAGES,
          payload: null
        })
      );
}

// Clear messages
export const clearMessages = () => {
    return {
        type: CLEAR_MESSAGES
    };
}

// Message loading
export const setMessageLoading = () => {
    return {
        type: MESSAGE_LOADING
    };
}

// Decline Message
export const declineMessage = (message, user) => dispatch => {
    axios.post('api/message/deleteMessage', {id: message._id})
    .then(() => {
      axios.post('api/notification/createNotification', message)
      .then(() => {
        axios.
        post(`/api/message/${message.receiverId}/true`)
        .then(res => {
          dispatch({
            type: GET_MESSAGES,
            payload: res.data
          })
        })
        .catch(err =>
          dispatch({
            type: GET_MESSAGES,
            payload: null
          })
        );
      })
    })
    .catch(err => console.error(err));
}

// Accept Message
export const acceptMessage = (message, receiverId, senderId) => dispatch => {
    message.receiverId = senderId
    message.senderId = receiverId
    console.log(message)
    axios.post('api/message/deleteMessage', {id: message._id})
    .then(() => {
      axios.post('api/message', message)
      .then(() => {
        axios
        .post(`/api/message/${receiverId}/true`)
        .then(res => {
              dispatch({
                type: GET_MESSAGES,
                payload: res.data
              })
          }
        )
        .catch(err =>
          dispatch({
            type: GET_MESSAGES,
            payload: null
          })
        );
      })
    })
    .catch(err => console.error(err));
}