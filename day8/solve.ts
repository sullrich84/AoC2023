// @deno-types="npm:@types/lodash"
import _ from "npm:lodash"
import { lcm } from "npm:mathjs"
import { data, Puzzle, sample1, sample2 } from "./data.ts"

console.clear()
console.log("🎄 Day 8: Haunted Wasteland")

const runPart1 = true
const runPart2 = true
const runBoth = true

/// Part 1

const solve1 = ({ move, network }: Puzzle) => {
  let steps = 0
  let pos = "AAA"

  while (pos !== "ZZZ") {
    const nMove = move[steps++ % move.length]
    pos = network[pos][nMove]
  }

  return steps
}

const solve1Sample = runPart1 ? solve1(sample1) : "skipped"
const solve1Data = runPart1 && runBoth ? solve1(data) : "skipped"

console.log("\nPart 1:")
console.log("Sample:\t", solve1Sample)
console.log("Task:\t", solve1Data)

/// Part 2

const solve2 = ({ move, network }: Puzzle) => {
  const starts = _.keys(network).filter((key) => key.charAt(2) == "A")
  const steps = starts.map((_) => 0)

  for (let [idx, aPos] of starts.entries()) {
    while (aPos.charAt(2) !== "Z") {
      const nMove = move[steps[idx]++ % move.length]
      aPos = network[aPos][nMove]
    }
  }

  return _.values(steps).reduce((c, p) => lcm(c, p), 1)
}

const solve2Sample = runPart2 ? solve2(sample2) : "skipped"
const solve2Data = runPart2 && runBoth ? solve2(data) : "skipped"

console.log("\nPart 2:")
console.log("Sample:\t", solve2Sample)
console.log("Task:\t", solve2Data)
console.log()
