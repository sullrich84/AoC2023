// @deno-types="npm:@types/lodash"
import _, { countBy } from "npm:lodash"
import { data1, data2, Puzzle, sample1, sample2 } from "./data.ts"
import { ValueStore, wait } from "../utils/utils.ts"
import { Counter } from "../utils/counter.ts"
// const data = Deno.readTextFileSync("./day6/task.txt")
// const input = Deno.readTextFileSync("./day6/sample.txt")

console.clear()
console.log("🎄 Day 6: Wait For It")

const runPart1 = true
const runPart2 = true
const runBoth = true

/// Part 1

const solve = (data: Puzzle) => {
  const results = []
  const counter = new Counter

  for (let race = 0; race < data.length; race++) {
    const ttb = data[race].ms
    const dtb = data[race].mm
    
    let wins = 0
    for (let pushTime = 0; pushTime < ttb; pushTime++) {
      if (pushTime == 0) continue
      const distance = (ttb - pushTime) * pushTime
      if (distance <= dtb) continue
      results[race] = ++wins
    }
  }

  return results.reduce((p, c) => p * c, 1)
}

const solve1Sample = runPart1 ? solve(sample1) : "skipped"
const solve1Data = runPart1 && runBoth ? solve(data1) : "skipped"

console.log("\nPart 1:")
console.log("Sample:\t", solve1Sample)
console.log("Task:\t", solve1Data)

/// Part 2

const solve2Sample = runPart2 ? solve(sample2) : "skipped"
const solve2Data = runPart2 && runBoth ? solve(data2) : "skipped"

console.log("\nPart 2:")
console.log("Sample:\t", solve2Sample)
console.log("Task:\t", solve2Data)
console.log()
