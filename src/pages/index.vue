<script setup lang="ts" generic="T extends any, O extends any">
import { options } from '../data'

defineOptions({
  name: 'IndexPage',
})
const name = ref('')
const router = useRouter()
function go() {
  if (name.value)
    router.push(`/cal/${encodeURIComponent(name.value)}`)
}
</script>

<template>
  <div>
    <div i-carbon-campsite inline-block text-4xl />
    <p>
      <a rel="noreferrer" href="https://github.com/antfu/vitesse-lite" target="_blank">
        多云计算器
      </a>
      <a
        i-carbon-logo-github icon-btn
        rel="noreferrer"
        href="https://github.com/antfu/vitesse-lite"
        target="_blank"
        title="GitHub"
      />
    </p>

    <div py-4 />

    <!-- <TheInput
      v-model="name"
      placeholder="What's your name?"
      autocomplete="false"
      @keydown.enter="go"
    /> -->
    <div class="flex-wrap items-center gap-4">
      <el-select
        v-model="name"
        placeholder="Select"
        size="large"
        style="width: 240px"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>

    <div>
      <button
        class="m-3 text-sm btn"
        :disabled="!name"
        @click="go"
      >
        Go
      </button>
    </div>
  </div>
</template>
