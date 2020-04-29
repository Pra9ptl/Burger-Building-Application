import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('Auth Reducer', () => {
    it('should return the inital state', () => {
        expect(reducer(undefined, {})).toEqual({
            idToken: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: "/"
        });
    });

    it('should store token on login', () => {
        expect(reducer({
            idToken: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: "/"
        }, {
            type: actionTypes.AUTH_SUCCESS,
            idToken: 'some-token',
            userId : 'some-user-id'
        })).toEqual({
            idToken: 'some-token',
            userId: 'some-user-id',
            error: null,
            loading: false,
            authRedirectPath: "/"
        });
    })
});