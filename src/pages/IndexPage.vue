<template>
  <q-page>
    <hero-main @refetch="fetchPipes" />
    <q-spinner-orbit
      v-if="isLoading"
      color="primary"
      size="4em"
      class="w-full mt-10 text-center"
    />
    <div v-else class="container mx-auto mt-10">
      <!-- search -->
      <div class="flex gap-10">
        <search-input @search="updateSearchQuery" />
      </div>

      <!-- Cards -->
      <transition-group
        tag="div"
        class="cards mt-10 mb-20 gap-10 justify-between"
        name="list"
      >
        <pipe-category-card
          v-for="pipe in filteredPipes"
          :key="pipe.id"
          :date="pipe.timestamp"
          :standart-id="pipe.id"
          :name="pipe.name"
          :pipes-count="10"
        />
      </transition-group>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import HeroMain from 'src/components/hero/HeroMain.vue'
import PipeCategoryCard from 'src/components/cards/PipeCategoryCard.vue'
import SearchInput from 'src/components/app/SearchInput.vue'
import { api } from 'src/boot/axios'
import { config } from 'src/appConfig'
import { apiPipesDto } from 'src/dto/pipesDto'

const isLoading = ref(false)
const searchQuery = ref('')
const pipes = ref<ReturnType<typeof apiPipesDto>>()

const filteredPipes = computed(() => {
  return pipes.value?.filter((pipe) => {
    return pipe.name.includes(searchQuery.value)
  })
})

onMounted(async () => {
  await fetchPipes()
})

async function fetchPipes() {
  searchQuery.value = ''
  try {
    isLoading.value = true
    const data = await api.get(config.endpoints.getPipes)
    pipes.value = apiPipesDto(data.data)
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
  }
}

function updateSearchQuery(query: string) {
  searchQuery.value = query
}
</script>

<style scoped lang="scss">
.cards {
  display: grid;
  grid-template-columns: repeat(4, 320px);
  @media (max-width: 1600px) {
    grid-template-columns: repeat(3, 320px);
  }
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
}

.list-leave-active {
  position: absolute;
}
</style>
