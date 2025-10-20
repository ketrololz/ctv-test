<script setup lang="ts">
import { postService } from '~/services/postService';

async function getPosts() {
  const result = await postService.getPosts();
  return result;
}
</script>
<template>
  <div class="text-light-grey bg-background font-futura">index</div>
  <div class="text-light-grey bg-background font-source">index</div>
  <button @click="getPosts">get posts</button>
</template>
