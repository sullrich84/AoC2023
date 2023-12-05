// @deno-types="npm:@types/lodash"
import _ from "npm:lodash"
import { data, Puzzle, sample } from "./data.ts"
import { debug, removeOverlappingRanges, wait } from "../utils/utils.ts"

console.clear()
console.log("🎄 Day 5: YYY")

const runPart1 = false
const runPart2 = true
const runBoth = true

/// Part 1

const conv = (
  input: number,
  dest: number,
  source: number,
  len: number,
) => {
  if (!_.inRange(input, source, source + len)) return null
  return dest + (input - source)
}

const lookup = (
  input: number,
  check: { dest: number; source: number; len: number }[],
): number => {
  const res = []

  for (let i = 0; i < check.length; i++) {
    res.push(conv(input, check[i].dest, check[i].source, check[i].len))
  }

  const result = res.find((e) => _.isNumber(e))
  return _.isNumber(result) ? result : input
}

const solve1 = (data: Puzzle) => {
  const locations = []

  for (let s = 0; s < data.seeds.length; s++) {
    const seed = data.seeds[s]
    const soil = lookup(seed, data.seed_to_soil)
    const fertilizer = lookup(soil, data.soil_to_fertilizer)
    const water = lookup(fertilizer, data.fertilizer_to_water)
    const light = lookup(water, data.water_to_light)
    const temperature = lookup(light, data.light_to_temperature)
    const humidity = lookup(temperature, data.temperature_to_humidity)
    const location = lookup(humidity, data.humidity_to_location)

    locations.push(location)
  }

  return _.min(locations)
}

const solve1Sample = runPart1 ? solve1(sample) : "skipped"
const solve1Data = runPart1 && runBoth ? solve1(data) : "skipped"

console.log("\nPart 1:")
console.log("Sample:\t", solve1Sample)
console.log("Task:\t", solve1Data)

/// Part 2

const solve2 = (data: Puzzle) => {
  const seeds = []

  // Get list of all seed ranges
  for (let i = 0; i < data.seeds.length; i += 2) {
    const seed = data.seeds[i]
    const seedLen = data.seeds[i + 1]
    seeds.push({ start: seed, end: seed + seedLen - 1 })
  }

  // Remove overlapping seed ranges
  const seedRange = removeOverlappingRanges(seeds)

  let minLocation = Number.POSITIVE_INFINITY
  let minSeed = Number.POSITIVE_INFINITY

  for (let i = 0; i < seedRange.length; i++) {
    const { start, end } = seedRange[i]

    // "... und bist du nicht willig, so brauch ich Gewalt" — Goethe
    const stepSize = 1_000

    for (let s = start; s < end; s += stepSize) {
      const seed = s
      const soil = lookup(seed, data.seed_to_soil)
      const fertilizer = lookup(soil, data.soil_to_fertilizer)
      const water = lookup(fertilizer, data.fertilizer_to_water)
      const light = lookup(water, data.water_to_light)
      const temperature = lookup(light, data.light_to_temperature)
      const humidity = lookup(temperature, data.temperature_to_humidity)
      const location = lookup(humidity, data.humidity_to_location)

      if (location < minLocation) {
        minLocation = location
        minSeed = seed
      }
    }

    const startSeed = minSeed - stepSize

    // Now, find the smallest location and check the 2000 neighbours as well
    for (let i = 0; i < stepSize * 2; i++) {
      const seed = startSeed + i
      const soil = lookup(seed, data.seed_to_soil)
      const fertilizer = lookup(soil, data.soil_to_fertilizer)
      const water = lookup(fertilizer, data.fertilizer_to_water)
      const light = lookup(water, data.water_to_light)
      const temperature = lookup(light, data.light_to_temperature)
      const humidity = lookup(temperature, data.temperature_to_humidity)
      const location = lookup(humidity, data.humidity_to_location)

      if (location < minLocation) {
        minLocation = location
        minSeed = seed
      }
    }
  }

  return minLocation
}

console.log("\nPart 2:")
console.log("Sample:\t", runPart2 ? solve2(sample) : "skipped")
console.log("Task:\t", runPart2 && runBoth ? solve2(data) : "skipped")
console.log()
