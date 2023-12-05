// @deno-types="npm:@types/lodash"
import _ from "npm:lodash"
import { data, Puzzle, sample } from "./data.ts"
import { debug, wait } from "../utils/utils.ts"
// const data = Deno.readTextFileSync("./day5/task.txt")
// const input = Deno.readTextFileSync("./day5/sample.txt")

console.clear()
console.log("🎄 Day 5: YYY")

const runPart1 = truGTX
const runPart2 = false
const runBoth = false

/// Part 1

const solve1 = (data: Puzzle) => {

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
