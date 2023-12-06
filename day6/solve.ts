// @deno-types="npm:@types/lodash"
import _ from "npm:lodash"
import { data, Puzzle, sample } from "./data.ts"
import { ValueStore, wait } from "../utils/utils.ts"
// const data = Deno.readTextFileSync("./day6/task.txt")
// const input = Deno.readTextFileSync("./day6/sample.txt")

console.clear()
console.log("🎄 Day 6: YYY")

const runPart1 = true
const runPart2 = false
const runBoth = true

/// Part 1

const solve1 = (data: Puzzle) => {
  const results = []

  for (let race = 0; race < data.length; race++) {
    const ttb = data[race].ms
    const dtb = data[race].mm
    const wins = []

    for (let pushTime = 0; pushTime < ttb; pushTime++) {
      if (pushTime == 0) continue

      const distance = (ttb - pushTime) * pushTime
      if (distance <= dtb) continue

      wins.push(distance)
      console.log({ pushTime, distance, dtb })
    }

    const waysToWin = wins.length
    results.push(waysToWin)
  }

  return results.reduce((p, c) => p * c, 1)
}

const solve1Sample = runPart1 ? solve1(sample) : "skipped"
const solve1Data = runPart1 && runBoth ? solve1(data) : "skipped"

console.log("\nPart 1:")
console.log("Sample:\t", solve1Sample)
console.log("Task:\t", solve1Data)

/// Part 2

const solve2 = (data: Puzzle) => {
  const results = []

  for (let race = 0; race < data.length; race++) {
    const ttb = data[race].ms
    const dtb = data[race].mm
    const wins = []

    for (let pushTime = 0; pushTime < ttb; pushTime++) {
      if (pushTime == 0) continue

      const distance = (ttb - pushTime) * pushTime
      if (distance <= dtb) continue

      wins.push(distance)
      console.log({ pushTime, distance, dtb })
    }

    const waysToWin = wins.length
    results.push(waysToWin)
  }

  return results.reduce((p, c) => p * c, 1)
}

const solve2Sample = runPart2 ? solve2(sample) : "skipped"
const solve2Data = runPart2 && runBoth ? solve2(data) : "skipped"

console.log("\nPart 2:")
console.log("Sample:\t", solve2Sample)
console.log("Task:\t", solve2Data)
console.log()
