<template>
  <div class="h-[320px] w-full relative flex items-center">
    <img
      :src="metal"
      alt="pipes"
      class="w-full h-[320px] absolute object-cover z-0"
    />
    <div class="absolute w-full h-full bg-blue-700 bg-opacity-30 z-[1]"></div>
    <div class="container h-full mx-auto py-7 flex justify-center gap-28 z-10">
      <!-- <FileDrop type="collection" label="Добавить коллекцию изображений" /> -->
      <FileDrop
        :type="dropZoneType"
        label="Добавить трубу"
        @refetch="$emit('refetch')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { metal } from 'src/assets'
import FileDrop from '../app/FileDrop.vue'

defineEmits(['refetch'])

const dropZoneType = ref<'pipe' | 'collection'>('pipe')
const route = useRoute()

if (route.path === '/test') dropZoneType.value = 'collection'
</script>

<style scoped lang="scss"></style>
