<script setup lang="ts">
import CalendarIcon from '~/assets/svg/calendar.svg';

interface Props {
  id: number;
  title: string;
  description: string;
  datetime: string;
}

const props = defineProps<Props>();

const date = new Date(props.datetime);

const time = date.toLocaleDateString('ru-RU', {
  day: 'numeric',
  month: 'long',
});
</script>
<template>
  <div class="bg-white flex flex-col gap-[20px]  hover:shadow-2xl hover:shadow-grey/15 w-full min-h-100 h-100 py-[32px] px-[24px] rounded-2xl transition-shadow ease-in-out cursor-pointer">
    <div class="flex gap-2 items-center">
      <CalendarIcon
        class="text-light-grey h-[20px]"
        :fontControlled="false"
      ></CalendarIcon
      ><span class="font-futura text-light-grey">{{ time }}</span>
    </div>
    <h3 class="font-source text-xl text-dark-grey">{{ title }}</h3>
    <p class="font-futura text-grey line-clamp-4">
      Известно, что совы — превосходные хищники. Причем они одинаково видят как
      днем, так и ночью. Известно, что совы — превосходные хищники. Причем они
      одинаково видят как днем, так и ночью.
    </p>
  </div>
</template>
