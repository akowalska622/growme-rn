import { ENotificationTypes } from 'Enums/ENotificationTypes';
import {
  selectAreNotifications,
  selectFirstNotification,
} from './notificationsSelectors';

describe('Notifications selectors', () => {
  describe('selectAreNotifications', () => {
    it('should return true, when state.notifications is a Map of size at least 1', () => {
      const mockState = new Map([
        ['SOME_SUCCESS', { type: ENotificationTypes.success, message: 'Yay!' }],
      ]);
      expect(selectAreNotifications.resultFunc(mockState)).toBe(true);
    });

    it('should return false, when state.notifications is an empty Map', () => {
      const mockState = new Map();
      expect(selectAreNotifications.resultFunc(mockState)).toBe(false);
    });
  });

  describe('selectFirstNotification', () => {
    it('should return the first notification, when state.notifications is a Map of size at least 1', () => {
      const mockState = new Map([
        ['SOME_SUCCESS', { type: ENotificationTypes.success, message: 'Yay!' }],
        [
          'SOME_FAILURE',
          { type: ENotificationTypes.failure, message: 'Oops!' },
        ],
      ]);
      expect(selectFirstNotification.resultFunc(mockState)).toEqual([
        'SOME_SUCCESS',
        { type: ENotificationTypes.success, message: 'Yay!' },
      ]);
    });

    it('should return undefined, when state.notifications is an empty Map', () => {
      const mockState = new Map();
      expect(selectFirstNotification.resultFunc(mockState)).toBe(undefined);
    });
  });
});
