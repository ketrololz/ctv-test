<script setup lang="ts">
import { postService } from '~/services/postService';
import PlusIcon from '~/assets/svg/plus.svg';
import CalendarIcon from '~/assets/svg/calendar.svg';
import DOMPurify from 'dompurify';

const time = ref('');

const router = useRouter();
const id = Number(router.currentRoute.value.params.id);

const post = ref();

const sanitizedHTML = ref('');

async function getPost() {
  const data = await postService.getPosts();
  if (data) {
    const postData = data.find((el) => el.id === id);
    post.value = postData;
  }
}

onMounted(async () => {
  await getPost();

  if (!post.value) {
    router.push('/404');
    return;
  }

  const date = new Date(post.value.datetime);

  time.value = date.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
  });

  sanitizedHTML.value = DOMPurify.sanitize(post.value.description_html);
});
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Header
      ><NuxtLink to="/posts/create">
        <button
          class="font-futura text-primary-500 bg-primary-100 px-[24px] py-[13px] rounded-[13px] hover:bg-primary-300 disabled:opacity-60 transition-all ease-in-out hidden sm:block"
        >
          Создать историю
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
        class="flex flex-col items-center w-full max-w-[1086px] px-[16px] py-[12px] md:px-[36px]"
      >
        <BackButton class="self-start mt-[48px]"></BackButton>
        <div v-if="post" class="w-full my-[43px]">
          <div
            class="bg-white flex flex-col gap-[10px] w-full h-full py-[24px] px-[24px] md:p-[64px] rounded-2xl"
          >
            <div class="flex gap-2 items-center">
              <CalendarIcon
                class="text-light-grey h-[24px]"
                :fontControlled="false"
              ></CalendarIcon
              ><span class="font-futura text-light-grey text-xl">{{
                time
              }}</span>
            </div>
            <h1 class="font-source text-4xl text-dark-grey">
              {{ post.title }}
            </h1>
            <p class="font-futura text-dark-grey line-clamp-4 text-[22px]">
              {{ post.short_description }}
            </p>
            <div
              v-html="sanitizedHTML"
              class="text-xl font-futura my-[20px]"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.editor-content ul {
  @apply list-disc ml-6 mb-2;
}

ol {
  @apply list-decimal ml-6 mb-2;
}

blockquote {
  @apply border-l-4 border-gray-300 pl-4 italic text-gray-600 mb-2;
}

h1 {
  @apply text-3xl font-bold mt-6 mb-4;
}

h2 {
  @apply text-2xl font-semibold mt-5 mb-3;
}

h3 {
  @apply text-xl font-semibold mt-4 mb-2;
}

h4 {
  @apply text-lg font-medium mt-3 mb-2;
}

h5 {
  @apply text-base font-medium mt-2 mb-1;
}

h6 {
  @apply text-sm font-medium mt-1 mb-1;
}
</style>
