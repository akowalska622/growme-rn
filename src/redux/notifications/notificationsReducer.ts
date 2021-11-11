const initialState = new Map();

// TODO: move out
const notificationTypes = ['success', 'failure'] as const;
type NotificationType = typeof notificationTypes[number];

// TODO: move out
const defaultMessages = {
  failure: 'Oops, something went wrong!',
  success: 'Yay, action successful!',
};

// TODO: move out
const getNotificationType = (type: string): NotificationType | void =>
  notificationTypes.find((notificationType) =>
    type.toLowerCase().includes(notificationType),
  );

export const notificationsReducer = (
  state = initialState,
  action: { [x: string]: any; type: string },
) => {
  const { type } = action;
  switch (action.type) {
    case 'DISMISS_NOTIFICATION':
      state.delete(action.id);
      return state;
    case 'DISMISS_ALL_NOTIFICATIONS':
      state.clear();
      return state;
    default:
      const notificationType = getNotificationType(type);
      if (notificationType)
        state.set(type, {
          type: notificationType,
          message:
            action[notificationType] ?? defaultMessages[notificationType],
        });
      return state;
  }
};
