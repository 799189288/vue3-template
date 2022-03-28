<template>
  <div>{{ userStore.name }}</div>
  <a-button type="primary">Primary</a-button>
</template>

<script lang="ts" setup>
import { useUserStore } from "@/store/user";

const userStore = useUserStore();
</script>
