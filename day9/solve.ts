// @deno-types="npm:@types/lodash"
import _ from "npm:lodash"
import { data, Puzzle, sample } from "./data.ts"

console.clear()
console.log("🎄 Day 9: Mirage Maintenance")

const runPart1 = true
const runPart2 = true
const runBoth = true

/// Part 1

const solve = (data: Puzzle, backwards: boolean) =>
  data.map((row) => {
    const seq = [backwards ? row.reverse() : row]

    while (true) {
      const cur = _.first(seq)!
      seq.unshift(cur.slice(0, cur.length - 1).map((n, i) => cur[i + 1] - n))
      if (!cur.find((n) => n != 0)) break
    }

    for (let i = 0; i < seq.length - 1; i++) {
      const add = _.last(seq[i + 1])! + _.last(seq[i])!
      seq[i + 1].push(add)
    }

    return _.last(_.last(seq))
  }).reduce((p, c) => p! + c!, 0)

const solve1Sample = runPart1 ? solve(sample, false) : "skipped"
const solve1Data = runPart1 && runBoth ? solve(data, false) : "skipped"

console.log("\nPart 1:")
console.log("Sample:\t", solve1Sample)
console.log("Task:\t", solve1Data)

/// Part 2

const solve2Sample = runPart2 ? solve(sample, true) : "skipped"
const solve2Data = runPart2 && runBoth ? solve(data, true) : "skipped"

console.log("\nPart 2:")
console.log("Sample:\t", solve2Sample)
console.log("Task:\t", solve2Data)
console.log()
