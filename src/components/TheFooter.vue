<script setup lang="ts" generic="T extends any, O extends any">
import { desc } from '~/data/desc'

const descList = ref(Object.values(desc))
</script>

<template>
  <nav mt-6 inline-flex gap-2 text-xl>
    <ul>
      <li v-for="(i, index) in descList" :key="index" text-sm op70>
        {{ i }}
      </li>
    </ul>
  </nav>
</template>
