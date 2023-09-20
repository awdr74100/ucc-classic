<template>
  <h1 class="text-3xl text-gray-700">Notification: {{ notification.length }}</h1>
</template>

<script setup lang="ts">
const notificationStore = useNotificationStore();

const { notification } = storeToRefs(notificationStore);
</script>
