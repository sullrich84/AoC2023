// @deno-types="npm:@types/lodash"
import _ from "npm:lodash"
// import {data, sample, Puzzle } from "./data.ts"

import { read } from "../utils/Reader.ts"
import { wait } from "../utils/utils.ts"

type Puzzle = string[][]

const [task, sample] = read("day21").map((file) =>
  _.initial(file.split("\n").map((line) => line.split("")))
)

console.clear()
console.log("🎄 Day 21: Step Counter")

const runPart1 = true
const runPart2 = false
const runBoth = true

/// Part 1

const dirs = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
]

function draw(grid, seen) {
  const [ym, xm] = [grid.length, grid[0].length]
  console.log()

  for (let y = 0; y < ym; y++) {
    let row = ""
    for (let x = 0; x < xm; x++) {
      const tile = grid[y][x]
      const key = [y, x].join(":")
      row += seen.has(key) ? "O" : tile
    }
    console.log(row)
  }

  wait()
}

const solve1 = (grid: Puzzle, maxSteps: number) => {
  const [ym, xm] = [grid.length, grid[0].length]

  let [sy, sx] = [0, 0]
  for (let y = 0; y < ym; y++) {
    for (let x = 0; x < xm; x++) {
      if (grid[y][x] == "S") [sy, sx] = [y, x]
    }
  }

  const stack = [[sy, sx, maxSteps]]
  const seen = new Set()
  const reachable = new Set()

  while (stack.length > 0) {
    const [y, x, steps] = stack.shift()!

    const key = [y, x].join(":")
    if (seen.has(key)) continue
    seen.add(key)

    // Add event remaining steps to reachable fields
    if (steps % 2 == 0) reachable.add(key)

    // Stop when remaining steps exeeded
    if (steps <= 0) continue

    for (const [dy, dx] of dirs) {
      const [ny, nx] = [y + dy, x + dx]
      if (!_.inRange(ny, 0, ym) || !_.inRange(nx, 0, xm)) continue
      if (grid[ny][nx] == "#") continue
      stack.push([ny, nx, steps - 1])
    }
  }

  return reachable.size
}

const solve1Sample = runPart1 ? solve1(sample, 6) : "skipped"
const solve1Data = runPart1 && runBoth ? solve1(task, 64) : "skipped"

console.log("\nPart 1:")
console.log("Sample:\t", solve1Sample)
console.log("Task:\t", solve1Data)

/// Part 2

const solve2 = (data: Puzzle) => {
}

const solve2Sample = runPart2 ? solve2(sample) : "skipped"
const solve2Data = runPart2 && runBoth ? solve2(task) : "skipped"

console.log("\nPart 2:")
console.log("Sample:\t", solve2Sample)
console.log("Task:\t", solve2Data)
console.log()
