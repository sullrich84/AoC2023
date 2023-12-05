// @deno-types="npm:@types/lodash"
import _ from "npm:lodash"
import { data, Puzzle, sample } from "./data.ts"
import { debug, wait } from "../utils/utils.ts"
// const data = Deno.readTextFileSync("./day5/task.txt")
// const input = Deno.readTextFileSync("./day5/sample.txt")

console.clear()
console.log("🎄 Day 5: YYY")

const runPart1 = true
const runPart2 = false
const runBoth = true

/// Part 1

const conv = (
  input: number,
  dest: number,
  source: number,
  len: number,
) => {
  // console.log(input, ">", dest, source, len)
  if (!_.inRange(input, source, source + len)) return null
  return dest + (input - source)
}

const lookup = (
  input: number,
  check: { dest: number; source: number; len: number }[],
): number => {
  const res = []

  for (let i = 0; i < check.length; i++) {
    const c = conv(input, check[i].dest, check[i].source, check[i].len)
    // console.log(input, check[i].dest, check[i].source, check[i].len, c);
    res.push(c)
  }

  // console.log("res", res.find(e => _.isNumber(e)))
  const result = res.find((e) => _.isNumber(e))
  return _.isNumber(result) ? result : input
}

const solve1 = (data: Puzzle) => {
  console.log(79, ">", lookup(79, data.seed_to_soil), "=", 81)
  console.log(14, ">", lookup(14, data.seed_to_soil), "=", 14)
  console.log(55, ">", lookup(55, data.seed_to_soil), "=", 57)
  console.log(13, ">", lookup(13, data.seed_to_soil), "=", 13)

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

    // console.log({
    //   seed,
    //   soil,
    //   fertilizer,
    //   water,
    //   light,
    //   temperature,
    //   humidity,
    //   location,
    // })

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
}

const solve2Sample = runPart2 ? solve2(sample) : "skipped"
const solve2Data = runPart2 && runBoth ? solve2(data) : "skipped"

console.log("\nPart 2:")
console.log("Sample:\t", solve2Sample)
console.log("Task:\t", solve2Data)
console.log()
