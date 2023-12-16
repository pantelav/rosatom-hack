<template>
  <div class="w-[320px] p-4 flex flex-col items-center border border-gray-400">
    <div class="text-center">
      <p class="text-xl font-bold">{{ props.filename }}</p>
    </div>
    <div class="row2">
      <img
        :src="props.imgUrl || pipePhoto"
        alt="pipe"
        class="w-full h-[150px] object-cover mb-3"
      />
    </div>
    <div class="flex gap-2">
      <CardBadge
        v-for="defect in props.defects"
        :key="defect.id"
        :title="defect.title"
        :color="defect.color"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import CardBadge from 'src/components/app/CardBadge.vue'
import { pipePhoto } from 'src/assets'
import type { IPipeProps } from '../models'

const props = defineProps<IPipeProps>()
</script>

<style scoped lang="scss"></style>
