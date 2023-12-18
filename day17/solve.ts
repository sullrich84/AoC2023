// @deno-types="npm:@types/lodash"
import _ from "npm:lodash"
import { read } from "../utils/Reader.ts"

type Puzzle = number[][]

const [task, sample] = read("day17").map((file) =>
  _.initial(
    file.split("\n").map((line) => line.split("").map((e) => parseInt(e))),
  )
)

console.clear()
console.log("🎄 Day 17: Clumsy Crucible")

const runPart1 = false
const runPart2 = true
const runBoth = false

/// Part 1
console.time("p1")

const solve = (
  grid: Puzzle,
  minConsecutiveSteps = 0,
  maxConsecutiveSteps = 3,
) => {
  const [ym, xm] = [grid.length, grid[0].length]

  const start = [0, 0]
  const target = [ym - 1, xm - 1]

  function insideGrid(y: number, x: number) {
    return _.inRange(y, 0, grid.length) && _.inRange(x, 0, grid[0].length)
  }

  const directions = [
    [-1, 0], // Down
    [0, 1], // Right
    [1, 0], // Up
    [0, -1], // Left
  ]

  const queue = [[0, start, [0, 0], 0]]
  const seen = new Set()

  while (queue.length) {
    queue.sort(([ahl], [bhl]) => ahl - bhl)
    const [heatMap, pos, delta, consecutiveSteps] = queue.shift()
    const [y, x] = pos
    const [dy, dx] = delta

    if (_.isEqual([y, x], target) && consecutiveSteps >= minConsecutiveSteps) {
      return heatMap
    }

    const key = _.flatMap([pos, delta, consecutiveSteps]).join(":")
    if (seen.has(key)) continue
    seen.add(key)

    // Follow current direction for 3 steps in a row
    if (consecutiveSteps < maxConsecutiveSteps || (dy != 0 && dx != 0)) {
      const ny = y + dy
      const nx = x + dx

      if (insideGrid(ny, nx)) {
        const nHeatMap = heatMap + grid[ny][nx]
        const nPos = [ny, nx]
        queue.push([nHeatMap, nPos, delta, consecutiveSteps + 1])
      }
    }

    if (consecutiveSteps >= minConsecutiveSteps || (dy == 0 && dx == 0)) {
      for (const [ndy, ndx] of directions) {
        const nDelta = [ndy, ndx]

        // Skip going same direction
        if (_.isEqual(nDelta, delta)) continue

        // Skip going back
        if (_.isEqual(nDelta, [-dy, -dx])) continue

        const [ny, nx] = [y + ndy, x + ndx]

        // Skip steps outside
        if (!insideGrid(ny, nx)) continue
        const nHeatMap = heatMap + grid[ny][nx]
        const nPos = [ny, nx]
        queue.push([nHeatMap, nPos, nDelta, 1])
      }
    }
  }

  return 0
}

const solve1Sample = runPart1 ? solve(sample, 0, 3) : "skipped"
const solve1Data = runPart1 && runBoth ? solve(task, 0, 3) : "skipped"

console.log("\nPart 1:")
console.log("Sample:\t", solve1Sample)
console.log("Task:\t", solve1Data)
console.timeEnd("p1")

/// Part 2
console.time("p2")
const solve2 = (data: Puzzle) => {
}

const solve2Sample = runPart2 ? solve(sample, 4, 10) : "skipped"
const solve2Data = runPart2 && runBoth ? solve(task, 4, 10) : "skipped"

console.log("\nPart 2:")
console.log("Sample:\t", solve2Sample)
console.log("Task:\t", solve2Data)
console.timeEnd("p2")
console.log()
