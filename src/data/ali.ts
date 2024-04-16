import type { CostResult } from './type'

const standardStoreUnitPrice = 0.12
const requestTimesUnitPrice = 0.05

function getTrafficUnitPrice(traffic: number) {
  if (traffic > 0 && traffic < 10000)
    return 0.24
  else if (traffic > 10000 && traffic < 50000)
    return 0.23
  else if (traffic > 50000 && traffic < 100000)
    return 0.18
  return 0.15
}

function getStandardStoreCost(size: number) {
  return standardStoreUnitPrice * size
}

function getRequestTimesCost(times: number) {
  return requestTimesUnitPrice * times
}

function getTrafficCost(traffic: number) {
  let sum = 0
  if (traffic > 0 && traffic < 10000)
    sum = getTrafficUnitPrice(traffic) * traffic
  if (traffic > 10000 && traffic < 50000)
    sum += getTrafficUnitPrice(traffic - 10000) * (traffic - 10000)
  if (traffic > 50000 && traffic < 100000)
    sum += getTrafficUnitPrice(traffic - 50000) * (traffic - 50000)
  if (traffic > 100000)
    sum += getTrafficUnitPrice(traffic - 100000) * (traffic - 100000)
  return sum
}

export function aliTotalCost(size: number, times: number, traffic: number): CostResult {
  return {
    standardStoreCost: getStandardStoreCost(size),
    requestTimesCost: getRequestTimesCost(times),
    trafficCost: getTrafficCost(traffic),
  }
}
