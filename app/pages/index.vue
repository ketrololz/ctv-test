<script setup lang="ts">
import type { Post } from '~/types/post.types';
import PostCard from '~/components/PostCard.vue';
import PlusIcon from '~/assets/svg/plus.svg';
import { postService } from '~/services/postService';

const postList = ref<Post[]>([]);

async function getPosts() {
  const data = await postService.getPosts();
  if (data) {
    const sortedPostList = data.sort(
      (a, b) => new Date(b.datetime).getTime() - new Date(a.datetime).getTime(),
    );
    postList.value = sortedPostList;
  }
}

onMounted(() => {
  getPosts();
});
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header
      ><NuxtLink to="/posts/create">
        <button
          class="font-futura text-primary-500 bg-primary-100 px-[24px] py-[13px] rounded-[13px] hover:bg-primary-300 disabled:opacity-60 transition-all ease-in-out hidden sm:block"
        >
          Создать материал
        </button>
        <button
          class="flex justify-center items-center font-futura text-primary-500 bg-primary-100 rounded-[13px] w-[48px] h-[48px] hover:bg-primary-300 disabled:opacity-60 transition-all ease-in-out sm:hidden"
        >
          <PlusIcon
            class="h-[16px]"
            :fontControlled="false"
            color="#00B2FF"
          ></PlusIcon>
        </button> </NuxtLink
    ></Header>
    <div class="bg-background flex justify-center flex-1">
      <div
        class="flex flex-col items-center w-full max-w-[1296px] px-[16px] py-[12px] md:px-[36px]"
      >
        <h1 class="text-[29px] md:text-[36px] font-source w-full my-[48px]">
          Материалы
        </h1>
        <div
          class="max-w-[1296px] grid grid-cols-1 lg:grid-cols-4 gap-[40px] sm:grid-cols-2"
        >
          <NuxtLink
            :to="`/posts/${post.id}`"
            v-for="post in postList"
            :key="post.id"
          >
            <PostCard
              :id="post.id"
              :title="post.title"
              :description="post.short_description"
              :datetime="post.datetime"
            ></PostCard>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
