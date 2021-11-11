import produce from 'immer';

import { EDefaultNotificationMessages } from 'Enums/EDefaultNotificationMessages';
import { ENotificationTypes } from 'Enums/ENotificationTypes';
import { ENotificationsTypes } from './notificationsTypes';
import { getNotificationType } from './helpers';

export type NotificationType = {
  type: ENotificationTypes;
  message: string | EDefaultNotificationMessages;
};

export type NotificationsStateType = Map<string, NotificationType>;

const initialState: NotificationsStateType = new Map();

export const notificationsReducer = produce(
  (draftState, action: { [x: string]: any; type: string }) => {
    const { type } = action;
    const notificationType = getNotificationType(type);
    if (notificationType)
      draftState.set(type, {
        type: notificationType,
        message:
          action[notificationType] ??
          EDefaultNotificationMessages[notificationType],
      });

    switch (action.type) {
      case ENotificationsTypes.dismissNotificationById:
        draftState.delete(action.id);
        return;
      case ENotificationsTypes.dismissAllNotifications:
        draftState.clear();
        return;
    }
  },
  initialState,
);
