<script setup lang="ts">
import Logo from '~/assets/svg/logo.svg';
import Plus from '~/assets/svg/plus.svg';
</script>
<template>
  <div>
    <div
      class="flex justify-between max-w-[1296px] px-[16px] py-[12px] md:px-[36px]"
    >
      <Logo class="h-[44px]" :fontControlled="false" color="#00B2FF"></Logo>
      <NuxtLink to="posts/create">
        <button
          class="font-futura text-primary-500 bg-primary-100 px-[24px] py-[13px] rounded-[13px] hover:bg-primary-300 disabled:opacity-60 transition-all ease-in-out hidden sm:block"
        >
          Создать материал
        </button>
        <button
          class="flex justify-center items-center font-futura text-primary-500 bg-primary-100 rounded-[13px] w-[48px] h-[48px] hover:bg-primary-300 disabled:opacity-60 transition-all ease-in-out sm:hidden"
        >
          <Plus class="h-[16px]" :fontControlled="false" color="#00B2FF"></Plus>
        </button>
      </NuxtLink>
    </div>
  </div>
</template>
