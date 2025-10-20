<script setup lang="ts">
import PostCard from '~/components/PostCard.vue';
import { postService } from '~/services/postService';

async function getPosts() {
  const result = await postService.getPosts();
  return result;
}
</script>
<template>
  <Header></Header>
  <div class="text-light-grey bg-background font-futura">index</div>
  <div class="text-light-grey bg-background font-source">index</div>
  <PostCard></PostCard>
  <button @click="getPosts">get posts</button>
</template>
