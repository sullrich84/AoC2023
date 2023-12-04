// @deno-types="npm:@types/lodash"
import _ from "npm:lodash"
import { data, Puzzle, sample } from "./data.ts"

console.clear()
console.log("🎄 Day 4: Scratchcards")

const runPart1 = true
const runPart2 = true
const runBoth = true

/// Part 1

const solve1 = (data: Puzzle) => {
  const points = data.map(({ win, play }) => {
    const wins = play.filter((p) => win.find((w) => w == p))
    if (wins.length == 0) return 0
    return _.times(wins.length - 1).reduce((p, _) => p * 2, 1)
  })

  return _.sum(points)
}

const solve1Sample = runPart1 ? solve1(sample) : "skipped"
const solve1Data = runPart1 && runBoth ? solve1(data) : "skipped"

console.log("\nPart 1:")
console.log("Sample:\t", solve1Sample)
console.log("Task:\t", solve1Data)

/// Part 2

const solve2 = (data: Puzzle) => {
  const instances: { [key: number]: number } = {}

  for (let i = 0; i < data.length; i++) {
    const { win, play } = data[i]
    const wins = play.filter((p) => win.find((w) => w == p))
    if (wins.length == 0) continue

    const pts = wins.length
    const runs = instances[i] + 1 || 1

    for (let r = 0; r < runs; r++) {
      for (let p = 0; p < pts; p++) {
        const nc = i + p + 1
        instances[nc] = instances[nc] ? instances[nc] + 1 : 1
      }
    }
  }

  return _.sum(data.map((_, i) => instances[i] + 1 || 1))
}

const solve2Sample = runPart2 ? solve2(sample) : "skipped"
const solve2Data = runPart2 && runBoth ? solve2(data) : "skipped"

console.log("\nPart 2:")
console.log("Sample:\t", solve2Sample)
console.log("Task:\t", solve2Data)
console.log()
