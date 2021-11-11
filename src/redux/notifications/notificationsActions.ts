import { ENotificationsTypes } from './notificationsTypes';

export const dismissNotificationById = (id: string) => ({
  type: ENotificationsTypes.dismissNotificationById,
  id,
});

export const dismissAllNotifications = () => ({
  type: ENotificationsTypes.dismissAllNotifications,
});
