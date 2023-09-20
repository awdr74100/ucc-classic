interface Notification {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

export const useNotificationStore = defineStore('notification', () => {
  const notification = ref<Notification[]>([]);

  return { notification };
});
