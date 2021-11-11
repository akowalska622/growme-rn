import { ENotificationTypes } from 'Enums/ENotificationTypes';

const notificationTypes = [
  ENotificationTypes.success,
  ENotificationTypes.failure,
];

export const getNotificationType = (type: string): ENotificationTypes | void =>
  notificationTypes.find((notificationType) =>
    type.toLowerCase().includes(notificationType),
  );
