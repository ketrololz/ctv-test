<script setup lang="ts">
import ArrowIcon from '~/assets/svg/arrow.svg';
</script>
<template>
  <NuxtLink to="/">
    <div class="flex gap-2 cursor-pointer">
      <ArrowIcon
        class="h-[24px]"
        :fontControlled="false"
        color="#14142A"
      ></ArrowIcon>
      <span class="text-dark-grey">Назад</span>
    </div>
  </NuxtLink>
</template>
