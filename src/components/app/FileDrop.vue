<template>
  <div
    ref="dropZoneRef"
    class="w-[400px] h-full flex flex-col justify-center items-center border-4 border-dashed text-white border-white rounded-lg cursor-pointer transition-all z-[1000]"
    :class="{ dropzone: isOverDropZone }"
    @click="open"
  >
    <q-spinner-orbit
      v-if="isLoading"
      color="white"
      size="4em"
      class="w-full mt-10 text-center"
    />
    <q-icon
      v-else
      :name="
        props.type === 'collection'
          ? 'add_photo_alternate'
          : 'create_new_folder'
      "
      class="text-[60px]"
    />

    <p class="text-xl font-bold text-center drop-shadow-md">
      {{ props.type === 'pipe' ? 'Добавить трубу' : 'Добавить изображение' }}
    </p>
  </div>
  <q-linear-progress
    v-if="isLoading"
    :value="loadPercent"
    class="progress"
    color="positive"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useDropZone, useFileDialog } from '@vueuse/core'
import { api } from 'src/boot/axios'
import { config } from 'src/appConfig'
// import { sendPipeImgages } from 'src/helpers/sendFiles'
const props = defineProps<{
  label: string
  type: 'collection' | 'pipe'
}>()
const emit = defineEmits(['refetch'])

const isLoading = ref(false)
const loadPercent = ref(0)
const dropZoneRef = ref<HTMLDivElement>()

const { open, onChange } = useFileDialog({
  accept: 'image/*'
})

onChange(async (fileList) => {
  if (!fileList) return
  const files: File[] = new Array<File>()
  for (let i = 0; i < fileList.length; i++) {
    files.push(fileList.item(i) as File)
  }
  if (files.length === 0) return
  await sendPipeImgages(files)
})

async function onDrop(files: File[] | null) {
  await sendPipeImgages(files)
}

const { isOverDropZone } = useDropZone(dropZoneRef, {
  onDrop,
  dataTypes: ['image/png', 'image/jpeg', 'image/jpg', 'image/bmp']
})

async function sendPipeImgages(files: File[] | null) {
  let apiError: unknown | null = null
  isLoading.value = true
  try {
    if (files == null) return
    const formData = new FormData()
    for (let i = 0; i < files?.length; i++) {
      formData.append('files', files[i])
    }
    await api.post(config.endpoints.test, formData, {
      onUploadProgress(progressEvent) {
        const { loaded, total } = progressEvent
        if (total) {
          let percentage = Number((loaded / total).toFixed(2))
          loadPercent.value = percentage
        }
      }
    })
    emit('refetch')
  } catch (error) {
    console.log('Ошибочка', error)
    apiError = error
  } finally {
    isLoading.value = false
    loadPercent.value = 0
  }

  return { apiError }
}
</script>

<style scoped lang="scss">
.dropzone {
  background-color: rgba(0, 0, 255, 0.291);
  border-color: blue;
  color: blue;
}

.progress {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 10px;
}
</style>
