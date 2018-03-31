import * as actionTypes from '../../utils/actionTypes';
import axios from 'axios';

const setTickets = (tickets) => {
  return {
    type: actionTypes.SET_TICKETS,
    error: false,
    tickets: tickets
  };
};

const setTicketsFail = (errorMsg) => {
  return {
    type: actionTypes.SET_TICKETS_FAIL,
    error: true,
    errorMsg: errorMsg
  };
};

export const getTickets = (token) => {
  return async dispatch => {
    try {
      const header = {
        headers: { 'x-auth-token': token }
      }
      const res = await axios.get('/tickets', header);
      dispatch(setTickets(res.data));

    } catch (error) {
      dispatch(setTicketsFail(error.message));
    };
  };
};

const setTicket = (ticket) => {
  return {
    type: actionTypes.SET_TICKET,
    error: false,
    ticket: ticket
  };
};

const setTicketFail = (errorMsg) => {
  return {
    type: actionTypes.SET_TICKET_FAIL,
    error: true,
    errorMsg: errorMsg
  };
};

export const getTicket = (token, id) => {
  return async dispatch => {
    try {
      const header = {
        headers: { 'x-auth-token': token }
      }
      console.log('/tickets/' + id);
      const res = await axios.get('/tickets/' + id, header);
      console.log(res.data);
      dispatch(setTicket(res.data));
    } catch (error) {
      dispatch(setTicketFail(error.message));
    };
  };
};


const postTicket = (tickets) => {
  return {
    type: actionTypes.POST_TICKET
  };
};

const postSuccess = (errorMsg) => {
  return {
    type: actionTypes.POST_TICKET_SUCCESS,
    error: false
  };
};

const postFail = (errorMsg) => {
  return {
    type: actionTypes.POST_TICKET_FAIL,
    error: true,
    errorMsg: errorMsg
  };
};

export const createTicket = (token, session, form) => {
  return async dispatch => {
    try {
      dispatch(postTicket());
      const postData = {
        //post data
      }
      const header = {
        headers: { 'x-auth-token': token }
      }
      const res = await axios.post('/tickets', postData, header);
      dispatch(postSuccess());
      dispatch(getTickets(token));
      } catch (error) {
      dispatch(postFail(error.message));
    };
  };
};


const removeTicket = (tickets) => {
  return {
    type: actionTypes.DELETE_TICKET
  };
};

const removeSuccess = (errorMsg) => {
  return {
    type: actionTypes.DELETE_TICKET_SUCCESS,
    error: false
  };
};

const removeFail = (errorMsg) => {
  return {
    type: actionTypes.DELETE_TICKET_FAIL,
    error: true,
    errorMsg: errorMsg
  };
};

export const deleteTicket = (token, id) => {
  return async dispatch => {
    try {
      dispatch(removeTicket());
      const header = {
        headers: { 'x-auth-token': token }
      }
      const res = await axios.delete('/tickets/' + id, header);
      dispatch(removeSuccess());
      dispatch(getTickets(token));
      } catch (error) {
      dispatch(removeFail(error.message));
    };
  };
};

const updateTicket = (tickets) => {
  return {
    type: actionTypes.UPDATE_TICKET
  };
};

const updateSuccess = (errorMsg) => {
  return {
    type: actionTypes.UPDATE_TICKET_SUCCESS,
    error: false
  };
};

const updateFail = (errorMsg) => {
  return {
    type: actionTypes.UPDATE_TICKET_FAIL,
    error: true,
    errorMsg: errorMsg
  };
};

export const editTicket = (token, id, session, form) => {
  return async dispatch => {
    try {
      dispatch(updateTicket());
      const putData = {
        //put data
      }
      const header = {
        headers: { 'x-auth-token': token }
      }
      const res = await axios.put('/tickets/' + id, putData, header);
      dispatch(updateSuccess());
      dispatch(getTickets(token));
      } catch (error) {
      dispatch(updateFail(error.message));
    };
  };
};
