import { createSelector } from 'reselect';

import { NotificationType } from './notificationsReducer';
import { RootStateType } from 'Redux/store';

const selectNotifications = (state: RootStateType) => state.notifications;

export const selectFirstNotification = createSelector(
  selectNotifications,
  (notifications) =>
    notifications.entries().next().value as [string, NotificationType],
);
