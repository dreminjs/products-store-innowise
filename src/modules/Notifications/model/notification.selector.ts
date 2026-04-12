import { RootState } from "@app/store/store";

export const selectNotifications = (state: RootState) =>
  state.notifications.notifications;
