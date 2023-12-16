<template>
  <!-- <q-badge outline :color="props.color" :label="props.title" /> -->
  <div class="badge">{{ props.title }}</div>
</template>

<script setup lang="ts">
const props = defineProps<{
  color: string
  title: string
}>()
</script>

<style scoped lang="scss">
.badge {
  color: v-bind('props.color');
  border: 1px solid v-bind('props.color');
  border-radius: 8px;
  padding: 1px 4px;
  font-weight: 600;
}
</style>
