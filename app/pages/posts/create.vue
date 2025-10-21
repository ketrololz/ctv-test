<script setup lang="ts">
import SendIcon from '~/assets/svg/send.svg';
import TiptapEditor from '~/components/TiptapEditor.vue';
import { postService } from '~/services/postService';

const { editor, clear } = useTiptap();

const title = ref('');
const short_description = ref('');

function save() {
  const body = {
    title: title.value,
    short_description: short_description.value,
    description_html: editor?.value?.getHTML() || '',
    description_json: editor?.value?.getJSON() || null,
  }

  postService.createPost(body);

  title.value = '';
  short_description.value = '';
  clear();
}
</script>
<template>
  <div class="flex flex-col min-h-screen">
    <Header>
      <button
        class="font-futura text-primary-500 bg-primary-100 px-[24px] py-[13px] rounded-[13px] hover:bg-primary-300 disabled:opacity-60 transition-all ease-in-out hidden sm:block"
        @click="save()"
      >
        Сохранить
      </button>
      <button
        class="flex justify-center items-center font-futura text-primary-500 bg-primary-100 rounded-[13px] w-[48px] h-[48px] hover:bg-primary-300 disabled:opacity-60 transition-all ease-in-out sm:hidden"
      >
        <SendIcon
          class="h-[28px]"
          :fontControlled="false"
          color="#00B2FF"
        ></SendIcon></button
    ></Header>
    <div class="bg-background flex justify-center flex-1">
      <div
        class="flex flex-col items-center w-full max-w-[1296px] px-[16px] py-[12px] md:px-[36px]"
      >
        <BackButton class="self-start mt-[48px]"></BackButton>
        <h1 class="text-[29px] md:text-[43px] font-source w-full my-[48px]">
          Создание материала
        </h1>
        <div
          class="bg-white flex flex-col gap-[20px] w-full h-full py-[32px] px-[24px] rounded-2xl transition-shadow ease-in-out cursor-pointer"
        >
          <div class="flex flex-col gap-3">
            <textarea
              name="title"
              type="text"
              maxlength="80"
              placeholder="Введите заголовок..."
              class="text-dark-grey resize-none font-source text-4xl w-full bg-transparent focus:outline-none placeholder:text-light-grey"
              rows="2"
              v-model="title"
            ></textarea>
            <textarea
              name="description"
              type="text"
              maxlength="255"
              placeholder="Введите краткое описание..."
              class="text-dark-grey resize-none font-futura text-[22px] w-full bg-transparent focus:outline-none placeholder:text-light-grey"
              rows="4"
              v-model="short_description"
            ></textarea>
            <TiptapEditor class="mt-10 font-futura" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
