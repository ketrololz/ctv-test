<script setup lang="ts">
const router = useRouter();
</script>
<template>
  <div>{{ router.currentRoute.value.path }}</div>
</template>
