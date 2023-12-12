// @deno-types="npm:@types/lodash"
import _, { min } from "npm:lodash"

import { read } from "../utils/Reader.ts"
import { log } from "npm:mathjs"

type Puzzle = number[][]
type Coord = [number, number]

const [task, sample] = read("training").map((file) =>
  _.initial(file.split("\n").map((l) => l.split("")))
)

console.clear()
console.log("🎄 BFS Training")

const runPart1 = true
const runPart2 = false
const runBoth = false

/// Part 1

const solve1 = (data: Puzzle) => {
  const [ym, xm] = [data.length, data[0].length]

  // Find startnode
  let start: Coord = [0, 0]
  let target: Coord = [0, 0]

  for (const [y, row] of data.entries()) {
    for (const [x, tile] of row.entries()) {
      if (tile == "S") start = [y, x]
      else if (tile == "F") target = [y, x]
    }
  }

  const directions = [
    [-1, 0],  // Up
    [0, -1],  // Left
    [0, 1],   // Right
    [1, 0],   // Down
    // [-1, -1], // Diagonal Up-Left
    // [-1, 1],  // Diagonal Up-Right
    // [1, -1],  // Diagonal Down-Left
    // [1, 1],   // Diagonal Down-Right
  ]

  let minPath = []
  const visited = new Set()
  const queue: [Coord, Coord[]][] = [[start, []]]

  while (queue.length > 0) {
    // NOTE: This ensures that the earliest element gets pulled, so whenever 
    // the target is reached, we know it is the shortest possible way.
    const [pos, path] = queue.shift()
    const [y, x] = pos

    // Check if target is reached
    if (_.isEqual(pos, target)) {
      minPath = path
      console.log(`Found path with ${minPath.length} steps`, queue.length)
      break
    }

    for (const [dy, dx] of directions) {
      const [ny, nx] = [y + dy, x + dx]
      const nKey = [ny, nx].join(":")

      if (!_.inRange(ny, 0, ym) || !_.inRange(nx, 0, xm)) continue
      if (data[ny][nx] == "#" || visited.has(nKey)) continue

      visited.add(nKey)
      queue.push([[ny, nx], [...path, [ny, nx]]])
    }
  }

  minPath.forEach(([y, x]) => {
    data[y][x] = "X"
  })

  data.forEach((row) => console.log(row.join("")))
  return minPath.length
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
