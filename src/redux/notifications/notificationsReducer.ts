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

export const notificationsReducer = (
  state = initialState,
  action: { [x: string]: any; type: string },
) => {
  const { type } = action;
  switch (action.type) {
    case ENotificationsTypes.dismissNotificationById:
      state.delete(action.id);
      return state;
    case ENotificationsTypes.dismissAllNotifications:
      state.clear();
      return state;
    default:
      const notificationType = getNotificationType(type);
      if (notificationType)
        state.set(type, {
          type: notificationType,
          message:
            action[notificationType] ??
            EDefaultNotificationMessages[notificationType],
        });
      return state;
  }
};
