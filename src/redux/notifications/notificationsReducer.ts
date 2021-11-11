import { EDefaultNotificationMessages } from 'Enums/EDefaultNotificationMessages';
import { ENotificationTypes } from 'Enums/ENotificationTypes';
import { ENotificationsTypes } from './notificationsTypes';
import { getNotificationType } from './helpers';

export type NotificationsStateType = Map<
  string,
  { type: ENotificationTypes; message: string | EDefaultNotificationMessages }
>;

const initialState: NotificationsStateType = new Map();

export const notificationsReducer = (
  state = initialState,
  action: { [x: string]: any; type: string },
) => {
  const { type } = action;
  switch (action.type) {
    case ENotificationsTypes.dismissNotification:
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
