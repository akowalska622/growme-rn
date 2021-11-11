import { notificationsReducer } from './notificationsReducer';

describe('Notifications reducer', () => {
  it('should return state with a success notification, when it handles *_SUCCESS', () => {
    const initialState = new Map();
    const mockAction = { type: 'SOME_SUCCESS', success: 'Yay!' };
    const mockState = new Map([
      ['SOME_SUCCESS', { type: 'success', message: 'Yay!' }],
    ]);
    expect(notificationsReducer(initialState, mockAction)).toEqual(mockState);
  });

  it('should return state with a failure notification, when it handles *_FAILURE', () => {
    const initialState = new Map();
    const mockAction = { type: 'SOME_FAILURE', failure: 'Oops!' };
    const mockState = new Map([
      ['SOME_FAILURE', { type: 'failure', message: 'Oops!' }],
    ]);
    expect(notificationsReducer(initialState, mockAction)).toEqual(mockState);
  });

  it('should return state without the notification of passed id, when it handles DISMISS_NOTIFICATION', () => {
    const initialState = new Map([
      ['SOME_SUCCESS', { type: 'success', message: 'Yay!' }],
      ['SOME_FAILURE', { type: 'failure', message: 'Oops!' }],
    ]);
    const mockAction = { type: 'DISMISS_NOTIFICATION', id: 'SOME_FAILURE' };
    const mockState = new Map([
      ['SOME_SUCCESS', { type: 'success', message: 'Yay!' }],
    ]);
    expect(notificationsReducer(initialState, mockAction)).toEqual(mockState);
  });

  it('should return empty state, when it handles DISMISS_ALL_NOTIFICATIONS', () => {
    const initialState = new Map([
      ['SOME_SUCCESS', { type: 'success', message: 'Yay!' }],
      ['SOME_FAILURE', { type: 'failure', message: 'Oops!' }],
    ]);
    const mockAction = { type: 'DISMISS_ALL_NOTIFICATIONS' };
    const mockState = new Map();
    expect(notificationsReducer(initialState, mockAction)).toEqual(mockState);
  });
});
