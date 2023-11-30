// @deno-types="npm:@types/lodash@^4.14"
import _ from "npm:@types/lodash@^4.14"
import {data, sample, Puzzle } from "./data.ts"

console.clear()
console.log("🎄 Day XXX: YYY")

const runPart1 = true
const runPart2 = false

/// Part 1

const solve1 = (data: Puzzle) => {
  // TEMPLATE 
}

const solve1Sample = runPart1 ? solve1(sample) : "skipped"
const solve1Data = runPart1 ? solve1(data) : "skipped"

console.log("\nPart 1:")
console.log("Sample:\t", solve1Sample)
console.log("Task:\t", solve1Data)

/// Part 2

const solve2 = (data: Puzzle) => {
  // TEMPLATE
}

const solve2Sample = runPart2 ? solve2(sample) : "skipped"
const solve2Data = runPart2 ? solve2(data) : "skipped"

console.log("\nPart 2:")
console.log("Sample:\t", solve2Sample)
console.log("Task:\t", solve2Data)

