import * as actionTypes from '../../utils/actionTypes';
import axios from 'axios';

export const setIssues = (issues) => {
  return {
    type: actionTypes.SET_ISSUES,
    error: false,
    issues: issues
  };
};

export const setIssuesFail = (errorMsg) => {
  return {
    type: actionTypes.SET_ISSUES_FAIL,
    error: true,
    errorMsg: errorMsg
  };
};

export const getIssues = (token) => {
  return async dispatch => {
    try {
      const header = {
        headers: { 'x-auth-token': token }
      }
      const res = await axios.get('/issues', header);
      dispatch(setIssues(res.data));

    } catch (error) {
      dispatch(setIssuesFail(error.message));
    };
  };
};

export const setIssue = (issue) => {
  return {
    type: actionTypes.SET_ISSUES,
    error: false,
    selected_issue: issue
  };
};

export const setIssueFail = (errorMsg) => {
  return {
    type: actionTypes.SET_ISSUES_FAIL,
    error: true,
    errorMsg: errorMsg
  };
};

export const getIssue = (token, id) => {
  return async dispatch => {
    try {
      const header = {
        headers: { 'x-auth-token': token }
      }
      const res = await axios.get('/issues/' + id, header);
      dispatch(setIssue(res.data));

    } catch (error) {
      dispatch(setIssueFail(error.message));
    };
  };
};


export const postIssue = (issues) => {
  return {
    type: actionTypes.POST_ISSUE
  };
};

export const postSuccess = (errorMsg) => {
  return {
    type: actionTypes.POST_ISSUE_SUCCESS,
    error: false
  };
};

export const postFail = (errorMsg) => {
  return {
    type: actionTypes.POST_ISSUE_FAIL,
    error: true,
    errorMsg: errorMsg
  };
};

export const createIssue = (token, session, form) => {
  return async dispatch => {
    try {
      dispatch(postIssue());
      const postData = {
        created_by_id: session.userId,
        created_by: session.name,
        description: form.description.value,
        priority: form.priority.value,
        status: 'open'
      }
      const header = {
        headers: { 'x-auth-token': token }
      }
      await axios.post('/issues', postData, header);
      dispatch(postSuccess());
      dispatch(getIssues(token));
      } catch (error) {
      dispatch(postFail(error.message));
    };
  };
};


export const removeIssue = (issues) => {
  return {
    type: actionTypes.DELETE_ISSUE
  };
};

export const removeSuccess = (errorMsg) => {
  return {
    type: actionTypes.DELETE_ISSUE_SUCCESS,
    error: false
  };
};

export const removeFail = (errorMsg) => {
  return {
    type: actionTypes.DELETE_ISSUE_FAIL,
    error: true,
    errorMsg: errorMsg
  };
};

export const deleteIssue = (token, id) => {
  return async dispatch => {
    try {
      dispatch(removeIssue());
      const header = {
        headers: { 'x-auth-token': token }
      }
      await axios.delete('/issues/' + id, header);
      dispatch(removeSuccess());
      dispatch(getIssues(token));
      } catch (error) {
      dispatch(removeFail(error.message));
    };
  };
};

export const updateIssue = (issues) => {
  return {
    type: actionTypes.UPDATE_ISSUE
  };
};

export const updateSuccess = (errorMsg) => {
  return {
    type: actionTypes.UPDATE_ISSUE_SUCCESS,
    error: false
  };
};

export const updateFail = (errorMsg) => {
  return {
    type: actionTypes.UPDATE_ISSUE_FAIL,
    error: true,
    errorMsg: errorMsg
  };
};

export const editIssue = (token, id, session, form) => {
  return async dispatch => {
    try {
      dispatch(updateIssue());
      const putData = {
        created_by_id: session.userId,
        created_by: session.name,
        description: form.description.value,
        priority: form.priority.value,
        status: form.status.value
      }
      const header = {
        headers: { 'x-auth-token': token }
      }
      await axios.put('/issues/' + id, putData, header);
      dispatch(updateSuccess());
      dispatch(getIssues(token));
      } catch (error) {
      dispatch(updateFail(error.message));
    };
  };
};
