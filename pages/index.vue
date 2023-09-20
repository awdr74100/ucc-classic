<template>
  <div>
    <h1 class="text-3xl text-gray-700">Notification: {{ notification.length }}</h1>
  </div>
</template>

<script setup lang="ts">
const notificationStore = useNotificationStore();

const { notification } = storeToRefs(notificationStore);
</script>
