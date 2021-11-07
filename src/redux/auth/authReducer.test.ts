import { authReducer } from 'Redux/auth/authReducer';
import {
  signInSuccessfullyAction,
  signInUnsuccessfullyAction,
} from 'Redux/auth/actions/signInActions';
import {
  signOutSuccessfullyAction,
  signOutUnsuccessfullyAction,
} from 'Redux/auth/actions/signOutActions';
import {
  signUpSuccessfullyAction,
  signUpUnsuccessfullyAction,
} from 'Redux/auth/actions/signUpActions';

describe('Auth reducer', () => {
  it('should authenticate user and save their data, when it handles SIGN_IN_SUCCESS', () => {
    const initialState = { isAuthenticated: false, user: null, error: '' };
    const mockAction = signInSuccessfullyAction({ name: 'Jane Doe' });
    const mockState = {
      isAuthenticated: true,
      user: { name: 'Jane Doe' },
      error: '',
    };
    expect(authReducer(initialState, mockAction)).toEqual(mockState);
  });

  it('should authenticate user and save their data, when it handles SIGN_UP_SUCCESS', () => {
    const initialState = { isAuthenticated: false, user: null, error: '' };
    const mockAction = signUpSuccessfullyAction({ name: 'Jane Doe' });
    const mockState = {
      isAuthenticated: true,
      user: { name: 'Jane Doe' },
      error: '',
    };
    expect(authReducer(initialState, mockAction)).toEqual(mockState);
  });

  it('should set sign-in error, when it handles SIGN_IN_FAILURE', () => {
    const initialState = { isAuthenticated: false, user: null, error: '' };
    const mockAction = signInUnsuccessfullyAction('An error occurred!');
    const mockState = {
      isAuthenticated: false,
      user: null,
      error: 'An error occurred!',
    };
    expect(authReducer(initialState, mockAction)).toEqual(mockState);
  });

  it('should set sign-up error, when it handles SIGN_UP_FAILURE', () => {
    const initialState = { isAuthenticated: false, user: null, error: '' };
    const mockAction = signUpUnsuccessfullyAction('An error occurred!');
    const mockState = {
      isAuthenticated: false,
      user: null,
      error: 'An error occurred!',
    };
    expect(authReducer(initialState, mockAction)).toEqual(mockState);
  });

  it('should sign user out, when it handles SIGN_OUT_SUCCESS', () => {
    const initialState = {
      isAuthenticated: true,
      user: { name: 'Jane Doe' },
      error: '',
    };
    const mockAction = signOutSuccessfullyAction();
    const mockState = { isAuthenticated: false, user: null, error: '' };

    expect(authReducer(initialState, mockAction)).toEqual(mockState);
  });

  it('should leave user authenticated, when it handles SIGN_OUT_FAILURE', () => {
    const initialState = {
      isAuthenticated: true,
      user: { name: 'Jane Doe' },
      error: '',
    };
    const mockAction = signOutUnsuccessfullyAction('An error occurred!');
    const mockState = {
      isAuthenticated: true,
      user: { name: 'Jane Doe' },
      error: 'An error occurred!',
    };

    expect(authReducer(initialState, mockAction)).toEqual(mockState);
  });
});
