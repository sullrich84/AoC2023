// @deno-types="npm:@types/lodash"
import _ from "npm:lodash"
import { data, Puzzle, sample } from "./data.ts"

console.clear()
console.log("🎄 Day 2: Cube Conundrum")
 
const runPart1 = true
const runPart2 = true
const runBoth = true

/// Part 1

const solve1 = (data: Puzzle) => {
  let possible = _.map(data, "id")
  const lmt = { r: 12, g: 13, b: 14 }

  data.forEach(({ id, rounds }) => {
    rounds.forEach(({ red, green, blue }) => {
      if (
        red && red > lmt.r || blue && blue > lmt.b || green && green > lmt.g
      ) {
        possible = _.pull(possible, id)
      }
    })
  })

  return _.sum(possible)
}

const solve1Sample = runPart1 ? solve1(sample) : "skipped"
const solve1Data = runPart1 && runBoth ? solve1(data) : "skipped"

console.log("\nPart 1:")
console.log("Sample:\t", solve1Sample)
console.log("Task:\t", solve1Data)

/// Part 2

const solve2 = (data: Puzzle) => {
  const powers = [] as number[]

  data.forEach((game) => {
    const max = { red: 1, green: 1, blue: 1 }

    game.rounds.forEach(({ red, blue, green }) => {
      max.red = _.max([red, max.red]) as number
      max.green = _.max([green, max.green]) as number
      max.blue = _.max([blue, max.blue]) as number
    })

    powers.push(max.red * max.blue * max.green)
  })

  return _.sum(powers)
}

const solve2Sample = runPart2 ? solve2(sample) : "skipped"
const solve2Data = runPart2 && runBoth ? solve2(data) : "skipped"

console.log("\nPart 2:")
console.log("Sample:\t", solve2Sample)
console.log("Task:\t", solve2Data)
console.log()
