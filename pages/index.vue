<template>
  <div>
    <h1 class="text-3xl text-gray-700">Notification: {{ notification.length }}</h1>
    <button
      class="ml-6 mt-4 rounded-md bg-gray-700 px-3 py-1 text-white hover:bg-gray-900"
      @click.prevent="fet"
    >
      獲取用戶
    </button>
    <pre>{{ user }}</pre>
  </div>
</template>

<script setup lang="ts">
const notificationStore = useNotificationStore();

const { notification } = storeToRefs(notificationStore);

const { $client } = useNuxtApp();

interface User {
  id: number;
  name: string;
}

const user = ref<User | null>(null);

const fet = async () => {
  const { data } = await $client.user.useQuery({ id: 1 });

  user.value = data.value;

  console.log(data.value);
};
</script>
