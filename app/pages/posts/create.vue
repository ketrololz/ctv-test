<script setup lang="ts">
import SendIcon from '~/assets/svg/send.svg';
</script>
<template>
  <Header>
    <button
      class="font-futura text-primary-500 bg-primary-100 px-[24px] py-[13px] rounded-[13px] hover:bg-primary-300 disabled:opacity-60 transition-all ease-in-out hidden sm:block"
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
  <div>Создать пост</div>
</template>
