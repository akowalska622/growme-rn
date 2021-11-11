import { createSelector } from 'reselect';

import { RootStateType } from 'Redux/store';

const selectNotifications = (state: RootStateType) => state.notifications;

export const selectAreNotifications = createSelector(
  selectNotifications,
  (notifications) => notifications.size > 0,
);

export const selectFirstNotification = createSelector(
  selectNotifications,
  (notifications) => notifications.entries().next().value,
);
