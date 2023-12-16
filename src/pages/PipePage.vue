<template>
  <q-spinner-orbit
    v-if="isLoading"
    color="primary"
    size="4em"
    class="w-full mt-10 text-center"
  />
  <q-page v-else class="container mx-auto py-10">
    <h1 class="text-2xl font-bold text-center">{{ pipe?.name }}</h1>
    <div class="w-full pt-5 flex justify-between">
      <div v-for="filter in filterOptions" :key="filter.id">
        {{ filter.title }}: <b>2</b>
      </div>
    </div>
    <GallerySlider v-if="pipe?.images" :images="pipe?.images" />
    <PipeScene />
  </q-page>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { filterOptions } from 'src/data/filter'
import GallerySlider from 'src/components/app/GallerySlider.vue'
import PipeScene from 'src/components/app/PipeScene.vue'
import { api } from 'src/boot/axios'
import { config } from 'src/appConfig'
import type { IApiPipe } from 'src/types/apiResponse'

const route = useRoute()
const pipeId = route.params.id
const pipe = ref<IApiPipe>()
const isLoading = ref(false)

onMounted(async () => {
  try {
    isLoading.value = true
    const data = await api.get(config.endpoints.getPipe + pipeId)
    pipe.value = data.data.data
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
  }
})
</script>

<style scoped lang="scss"></style>
