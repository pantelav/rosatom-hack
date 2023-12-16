<template>
  <q-layout view="lHh Lpr lFf">
    <q-header bordered class="h-[100px] bg-white text-black">
      <q-toolbar
        class="container h-full mx-auto flex justify-between items-center"
      >
        <img src="/logo.svg" alt="logo" class="h-20" />
        <nav
          class="px-10 flex justify-evenly items-center grow text-gray-600 font-bold text-xl"
        >
          <router-link
            v-for="item in links"
            :key="item.title"
            class="transition-all hover:text-indigo-700"
            :to="item.to"
            >{{ item.title }}</router-link
          >
        </nav>
        <img src="/logo-transparent.png" alt="dober" class="h-20" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
const links = [
  { title: 'Изделия', to: '/' },
  { title: 'Тест работы модели', to: '/test' },
  { title: 'Скринкаст', to: '/' },
  { title: 'Презентация', to: '/' },
  { title: 'Команда', to: '/' }
]
</script>
