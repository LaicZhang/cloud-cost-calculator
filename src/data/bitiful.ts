import type { CostResult } from './type'

const requestTimesUnitPrice = 0

function getStandardStoreUnitPrice(size: number): number {
  if (size < 100)
    return 0
  else if (size > 100 && size < 1000)
    return 0.065
  else if (size > 1000 && size < 10000)
    return 0.055
  else if (size > 10000 && size < 100000)
    return 0.045
  return 0.040
}

function getStandardStoreCost(size: number) {
  let sum = 0
  if (size < 100)
    return 0
  if (size >= 100 && size < 1000)
    sum = (size - 100) * getStandardStoreUnitPrice(size - 100)
  if (size >= 1000 && size < 10000)
    sum += (size - 1000) * getStandardStoreUnitPrice(size - 1000)
  if (size >= 10000 && size < 100000)
    sum += (size - 10000) * getStandardStoreUnitPrice(size - 10000)
  if (size >= 100000)
    sum += (size - 100000) * getStandardStoreUnitPrice(size - 100000)
  return sum
}

function getTrafficUnitPrice(traffic: number) {
  if (traffic > 0 && traffic < 20)
    return 0
  else if (traffic > 20 && traffic < 1000)
    return 0.12
  else if (traffic > 1000 && traffic < 10000)
    return 0.1
  else if (traffic > 10000 && traffic < 100000)
    return 0.09
  return 0.08
}

function getTrafficCost(traffic: number) {
  let sum = 0
  if (traffic > 0 && traffic < 20)
    return 0
  if (traffic >= 20 && traffic < 1000)
    sum = (traffic - 20) * getTrafficUnitPrice(traffic - 20)
  if (traffic >= 1000 && traffic < 10000)
    sum += (traffic - 1000) * getTrafficUnitPrice(traffic - 1000)
  if (traffic >= 10000 && traffic < 100000)
    sum += (traffic - 10000) * getTrafficUnitPrice(traffic - 10000)
  return sum
}

function getRequestTimesCost(times: number) {
  return requestTimesUnitPrice * times
}

export function bitifulTotalCost(size: number, times: number, traffic: number): CostResult {
  return {
    standardStoreCost: getStandardStoreCost(size),
    requestTimesCost: getRequestTimesCost(times),
    trafficCost: getTrafficCost(traffic),
  }
}
