<template>
  <div class="w-full h-[600px] mt-10 flex gap-10 flex-nowrap border">
    <div class="h-full basis-[70%] relative">
      <img
        ref="mainImg"
        :src="setImgUrl(activeImg.url)"
        alt="pipe"
        class="h-full object-contain"
      />
      <svg
        v-if="bbox"
        class="absolute svg z-50"
        :width="width"
        :height="height"
      >
        <polygon
          points="100 100, 200 100, 200 10, 100 10"
          stroke="red"
          stroke-width="5"
          fill="none"
        />
      </svg>
    </div>
    <div class="h-full w-[450px] border">
      <div
        class="h-[10%] px-5 flex justify-between items-center bg-slate-800 text-white font-bold text-lg"
      >
        <p>Всего изображений: {{ props?.images?.length }}</p>
        <q-toggle v-model="bbox" label="Разметка" color="green" />
      </div>
      <div class="h-[90%] w-[450px] overflow-y-scroll">
        <div
          v-for="image in props?.images"
          :key="image.id"
          class="cont h-[180px] flex items-center border-b cursor-pointer transition-all"
          :class="{ activeImg: activeImg == image }"
          @click="activeImg = image"
        >
          <img
            :src="setImgUrl(image.url)"
            alt="pipe"
            class="w-[180px] h-[180px] object-cover"
          />
          <div>
            <p class="desc">
              {{ cutFileName(image.name) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="stats p-3 bg-slate-800">
    <h2 class="text-2xl font-semibold text-white">Статистика</h2>
    <div class="flex gap-x-5 text-lg">
      <p
        v-for="filter in filterOptions"
        :key="filter.id"
        :style="{ color: filter.color }"
        class="drop-shadow-sm"
      >
        {{ filter.title }}: 2
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { filterOptions } from 'src/data/filter'
import { config } from 'src/appConfig'
import { useElementBounding } from '@vueuse/core'
import type { IApiImage } from 'src/types/apiResponse'

const props = defineProps<{
  images: IApiImage[]
}>()

const mainImg = ref<HTMLImageElement | null>(null)
const { top, left, width, height } = useElementBounding(mainImg)

const activeImg = ref(props.images[0])
const bbox = ref(true)

function cutFileName(name: string) {
  if (name.length > 15) return name.slice(0, 25) + '...'
  return name
}

function setImgUrl(url: string) {
  return config.server + config.endpoints.getPhoto + url
}
</script>

<style scoped lang="scss">
.svg {
  top: 0;
  left: 0;
}
.stats {
  border-radius: 0 0 8px 8px;
}

.cont {
  flex-wrap: nowrap;
}

.desc {
  text-overflow: ellipsis;
}

.activeImg {
  background: #99d2f5;
}
</style>
