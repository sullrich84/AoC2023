// @deno-types="npm:@types/lodash"
import _ from "npm:lodash"
// import {data, sample, Puzzle } from "./data.ts"

import { read } from "../utils/Reader.ts"

type Puzzle = string[][]

const [task, sample] = read("day{DAY}").map((file) =>
  _.initial(file.split("\n").map(line => line.split("")))
)


console.clear()
console.log("🎄 Day {DAY}: YYY")

const runPart1 = true
const runPart2 = false
const runBoth = false

/// Part 1

const solve1 = (data: Puzzle) => {
  // TEMPLATE
  for(const row of data) {
    console.log(row.join(""))
  }
}

const solve1Sample = runPart1 ? solve1(sample) : "skipped"
const solve1Data = runPart1 && runBoth ? solve1(task) : "skipped"

console.log("\nPart 1:")
console.log("Sample:\t", solve1Sample)
console.log("Task:\t", solve1Data)

/// Part 2

const solve2 = (data: Puzzle) => {
  // TEMPLATE
}

const solve2Sample = runPart2 ? solve2(sample) : "skipped"
const solve2Data = runPart2 && runBoth ? solve2(task) : "skipped"

console.log("\nPart 2:")
console.log("Sample:\t", solve2Sample)
console.log("Task:\t", solve2Data)
console.log()
