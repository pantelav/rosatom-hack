<template>
  <div
    class="w-[320px] p-4 flex flex-col items-center border border-gray-400 cursor-pointer"
    @click="$router.push(props.standartId.toString())"
  >
    <div class="row1 mb-2 w-full flex justify-between items-center">
      <div class="date grid grid-cols-2 grid-rows-2 text-gray-500 font-bold">
        <div class="day row-span-2 self-center justify-self-start text-3xl">
          {{ dateArr[0] }}
        </div>
        <div class="month">{{ dateArr[1] }}</div>
        <div class="year">{{ dateArr[2] }}</div>
      </div>
      <div
        class="gost w-[50%] p-1 border rounded-lg bg-slate-300 text-black font-bold text-center"
      >
        {{ props.standartId }}
      </div>
    </div>
    <div class="row2">
      <img
        :src="props.imgUrl || pipes"
        alt="pipe"
        class="w-full h-[150px] object-cover mb-3"
      />
    </div>
    <div class="row3 text-xl text-gray-800 font-semibold mb-3">
      {{ props.name }}
    </div>
    <div
      class="row4 px-3 py-1 border border-blue-800 text-blue-800 text-lg font-semibold"
    >
      {{ props.pipesCount }} дефектов
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { formatDate } from 'src/helpers/formatDate'
import { pipes } from 'src/assets'

const props = defineProps<{
  date: Date | number
  standartId: string | number
  imgUrl?: string
  name: string
  pipesCount: number
}>()

const dateArr = ref<string[]>(['17', 'декабря', '2023'])

onMounted(() => {
  dateArr.value = formatDate(props.date).split(' ')
})
</script>

<style scoped lang="scss"></style>
