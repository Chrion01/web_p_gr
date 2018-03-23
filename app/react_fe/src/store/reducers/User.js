import * as actionTypes from '../utils/actionTypes';
import { update } from '../utils/update';

const initialState = {
    userId: null,
    token: null,
    name: null,
    usertype: null,
    isAdmin: false,
    error: null,
    errorMsg: ''
};

const reducer = ( state = initialState, action ) => {

    switch ( action.type ) {

        case actionTypes.AUTH_USER:
            return state;

        case actionTypes.AUTH_SUCCESS:
            return update(state, {
              token : action.token,
              userId : action.userId,
              name: action.name,
              usertype: action.usertype,
              isAdmin: action.isAdmin,
              error : false});

        case actionTypes.AUTH_FAIL:
            return update(state, {
              error : true,
              errorMsg : action.errorMsg});

        case actionTypes.AUTH_LOGOUT:
            return update(state, {
              token : null,
              userId : null,
              name: null,
              usertype: null,
              isAdmin: false,
              error : null});
        default:
            return state;
    }
};

export default reducer;