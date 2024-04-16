<script setup lang="ts">
import { aliTotalCost, bitifulTotalCost } from '~/data'

defineOptions({
  name: 'CalPage',
})
const params = useRoute('/cal/[name]').params
const router = useRouter()

const storeSize = ref(1)
const times = ref(1)
const traffic = ref(1)
const cost = ref({
  standardStoreCost: 0,
  requestTimesCost: 0,
  trafficCost: 0,
})
const isCal = ref(false)
function cal() {
  isCal.value = true
  if (params.name === 'ali')
    cost.value = aliTotalCost(storeSize.value, times.value, traffic.value)
  if (params.name === 'bitiful')
    cost.value = bitifulTotalCost(storeSize.value, times.value, traffic.value)
}
</script>

<template>
  <div>
    <div i-carbon-pedestrian inline-block text-4xl />
    <p>
      当前正在预估 {{ params.name }} 的花费
    </p>

    预计存储空间：<el-input-number v-model="storeSize" :min="1" />G
    <br>
    预计请求次数：<el-input-number v-model="times" :min="0" />万次
    <br>
    预计使用流量：<el-input-number v-model="traffic" :min="0" />G

    <br>
    <div v-if="isCal">
      预计每月花费{{ cost.standardStoreCost }}+{{ cost.requestTimesCost }}+{{ cost.trafficCost }}={{ (cost.standardStoreCost * 100 + cost.requestTimesCost * 100 + cost.trafficCost * 100) / 100 }}元
    </div>
    <div>
      <button m-3 mt-8 text-sm btn @click="cal">
        计算
      </button>
      <button m-3 mt-8 text-sm btn @click="router.back()">
        返回
      </button>
    </div>
  </div>
</template>
