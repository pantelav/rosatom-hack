<template>
  <q-input
    v-model="searchQuery"
    rounded
    outlined
    placeholder="Поиск коллекции по имени..."
    class="w-[320px]"
    @update:model-value="$emit('search', searchQuery)"
  >
    <template #append>
      <q-icon name="search" />
    </template>
  </q-input>
</template>

<script setup lang="ts">
import { ref } from 'vue'
defineEmits(['search'])
const searchQuery = ref('')
</script>

<style scoped lang="scss"></style>
