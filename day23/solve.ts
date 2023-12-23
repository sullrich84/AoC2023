// @deno-types="npm:@types/lodash"
import _ from "npm:lodash"
import { read } from "../utils/Reader.ts"
import * as c from "https://deno.land/std@0.210.0/fmt/colors.ts"
import { wait } from "../utils/utils.ts"

type Puzzle = string[][]

// sample.txt
// task.txt
const [task, sample] = read("day23").map((file) =>
  _.initial(file.split("\n").map((line) => line.split("")))
)

console.clear()
console.log("🎄 Day 23: A Long Walk")

const runPart1 = true
const runPart2 = false
const runBoth = true

/// Part 1

function draw(data: Puzzle, sy: number, sx: number, ty: number, tx: number) {
  console.log()
  console.log()
  console.log()
  data.forEach((row, y) => {
    let line = ""
    row.forEach((col, x) => {
      if (col == "^" || col == "<") throw "Unexpected slope"

      if (y == sy && x == sx) line += c.cyan("S")
      else if (y == ty && x == tx) line += c.red("T")
      else line += col
    })
    console.log(line)
  })
  wait()
}

const dir = {
  ".": [
    [-1, 0], // Up
    [0, -1], // Left
    [0, 1], // Right
    [1, 0], // Down
  ],
  ">": [
    [0, 1], // Right
  ],
  "v": [
    [1, 0], // Down
  ],
}

type Stack = [number, number, number, number, Set<string>][]

const solve1 = (data: Puzzle) => {
  const [yLen, xLen] = [data.length, data[0].length]

  const stack: Stack = []
  stack.push([0, 1, yLen - 1, xLen - 2, new Set()])

  let maxSteps = Number.NEGATIVE_INFINITY
  while (stack.length > 0) {
    const [y, x, ty, tx, seen] = stack.shift()!
    // draw(data, y, x, ty, tx)

    // Check if target reached
    if (y == ty && x == tx) {
      console.log(`Target Reached with ${seen.size} steps`)
      maxSteps = Math.max(maxSteps, seen.size)
      continue
    }

    // Update state
    const nSeen = new Set(seen)
    const key = [y, x].join(":")
    nSeen.add(key)

    // Move
    const tile = data[y][x]
    const nDir = dir[tile]

    for (const [dy, dx] of nDir) {
      const [ny, nx] = [y + dy, x + dx]
      if (!_.inRange(ny, 0, yLen) || !_.inRange(nx, 0, xLen)) continue // out of bounds

      const nTile = data[ny][nx]
      if (nTile == "#") continue // skip forest

      const nKey = [ny, nx].join(":")
      if (nSeen.has(nKey)) continue // already entered

      stack.push([ny, nx, ty, tx, nSeen])
    }
  }

  return maxSteps
}

const solve1Sample = runPart1 ? solve1(sample) : "skipped"
const solve1Data = runPart1 && runBoth ? solve1(task) : "skipped"

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
