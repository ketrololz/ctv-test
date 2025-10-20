<script setup lang="ts">
import Logo from '~/assets/svg/logo.svg';
</script>
<template>
  <div class="flex justify-center w-full">
    <div
      class="flex w-full justify-between max-w-[1296px] px-[16px] py-[12px] md:px-[36px]"
    >
      <NuxtLink to="/" class="cursor-pointer">
        <Logo class="h-[44px]" :fontControlled="false" color="#00B2FF"></Logo>
      </NuxtLink>
      <slot></slot>
    </div>
  </div>
</template>
