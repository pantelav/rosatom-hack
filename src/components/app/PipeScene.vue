<template>
  <div ref="container" class="w-full h-[700px] relative">
    <TresCanvas clear-color="#FFF" alpha class="w-full h-full">
      <TresPerspectiveCamera
        ref="camera"
        :position="[0, 0, 20]"
        :look-at="vec3"
      />
      <OrbitControls />
      <TresGridHelper :position="[0, 0, 0]" :args="[20, 20]" />
      <Suspense>
        <GLTFModel ref="pipemodel" path="/pipe2/pipe.gltf" />
      </Suspense>
      <TresMesh
        v-for="mesh in meshes"
        :key="mesh.id"
        :position="mesh.pos"
        @click="test"
        @mouse-over="test"
      >
        <!-- args: radius, widthSegments, heightSegments, поворот, цельность (можно сделать полусферу)   -->
        <TresSphereGeometry :args="[0.1, 32, 16]" />
        <TresMeshBasicMaterial :color="mesh.color" />
      </TresMesh>
      <TresDirectionalLight :intensity="4" :position="[3, 3, 3]" />
      <TresDirectionalLight :intensity="2" :position="[-3, -3, -3]" />
      <TresAmbientLight :intensity="10" />
      <TresRaycaster />
    </TresCanvas>
    <div
      v-if="popOver"
      ref="target"
      class="popover absolute bg-slate-700 text-2xl text-white"
    >
      Helo
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TresCamera, TresCanvas } from '@tresjs/core'
import { OrbitControls, GLTFModel } from '@tresjs/cientos'
import * as THREE from 'three'
import { useMouse, onClickOutside } from '@vueuse/core'
import type { UseMouseEventExtractor } from '@vueuse/core'

const container = ref<HTMLDivElement>()
const target = ref<HTMLDivElement>()
onClickOutside(target, hidePopover)
const extractor: UseMouseEventExtractor = (event) => {
  // @ts-ignore
  return [event.offsetX, event.offsetY]
}
const { x, y } = useMouse({ target: container, type: extractor })
const popX = ref('0px')
const popY = ref('0px')
const vec3 = new THREE.Vector3(100, 100, 100)
const camera = ref<TresCamera>()
const pipemodel = ref<typeof GLTFModel>()
const popOver = ref(false)

// x: -10:10  y: -1.2:1.35    z: -1.3:1.3
const meshes = [
  { pos: [0, 1.35, 0], color: 'red', id: 1 },
  { pos: [0, 1.25, 0.6], color: 'red', id: 2 },
  { pos: [0, 0.9, 1], color: 'red', id: 3 },
  { pos: [0, 0.5, 1.2], color: 'red', id: 3 },
  { pos: [0, 0.1, 1.3], color: 'red', id: 4 },
  { pos: [0, -0.5, 1.15], color: 'red', id: 5 },
  { pos: [0, -0.9, 0.8], color: 'red', id: 5 },
  { pos: [0, -1.2, 0], color: 'red', id: 5 },
  { pos: [0, -0.9, -0.8], color: 'red', id: 2 },
  { pos: [0, -0.5, -1.15], color: 'red', id: 5 },
  { pos: [0, 0.1, -1.3], color: 'red', id: 4 },
  { pos: [0, 0.5, -1.2], color: 'red', id: 3 },
  { pos: [0, 0.9, -1], color: 'red', id: 3 },
  { pos: [0, 1.25, -0.6], color: 'red', id: 2 },
  { pos: [3, 1, 1], color: 'red', id: 6 },
  { pos: [2, 0, 1.3], color: 'orange', id: 7 },
  { pos: [4, -1.1, 0.7], color: 'green', id: 8 }
]

function test(e) {
  console.log(e)
  popOver.value = true
  popX.value = `${x.value}px`
  popY.value = `${y.value}px`
  console.log(popX.value, popY.value)
  setTimeout(() => {
    if (!popOver.value) popOver.value = true
  }, 50)
}

function hidePopover() {
  popOver.value = false
}
</script>

<style scoped lang="scss">
.popover {
  top: v-bind(popY);
  left: v-bind(popX);
}
</style>
