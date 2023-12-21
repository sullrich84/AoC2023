// @deno-types="npm:@types/lodash"
import _ from "npm:lodash"
import { read } from "../utils/Reader.ts"

type Puzzle = string[][]

const [task, sample] = read("day21").map((file) =>
  _.initial(file.split("\n").map((line) => line.split("")))
)

console.clear()
console.log("🎄 Day 21: Step Counter")

const runPart1 = true
const runPart2 = true
const runBoth = true

/// Part 1

const dirs = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
]

function bfs(grid: Puzzle, sy: number, sx: number, remainingSteps: number) {
  const [yLen, xLen] = [grid.length, grid[0].length]

  const stack = [[sy, sx, remainingSteps]]
  const seen = new Set()
  const reachable = new Set()

  while (stack.length > 0) {
    const [y, x, steps] = stack.shift()!

    const key = [y, x].join(":")
    if (seen.has(key)) continue
    seen.add(key)

    // Even fields can only accessed by even number of steps
    if (steps % 2 == 0) reachable.add(key)

    // Stop when remaining steps exeeded
    if (steps <= 0) continue

    for (const [dy, dx] of dirs) {
      const [ny, nx] = [y + dy, x + dx]
      if (!_.inRange(ny, 0, yLen) || !_.inRange(nx, 0, xLen)) continue
      if (grid[ny][nx] == "#") continue
      stack.push([ny, nx, steps - 1])
    }
  }

  return reachable.size
}

const solve1 = (grid: Puzzle, maxSteps: number) => {
  const [sy, sx] = [_.floor(grid.length / 2), _.floor(grid[0].length / 2)]
  return bfs(grid, sy, sx, maxSteps)
}

const solve1Sample = runPart1 ? solve1(sample, 6) : "skipped"
const solve1Data = runPart1 && runBoth ? solve1(task, 64) : "skipped"

console.log("\nPart 1:")
console.log("Sample:\t", solve1Sample)
console.log("Task:\t", solve1Data)

/// Part 2

const solve2 = (grid: Puzzle, steps: number) => {
  const size = grid.length
  const [centerY, centerX] = [_.floor(size / 2), _.floor(size / 2)]

  const corners = [
    [0, 0], // top left
    [0, size - 1], // top right
    [size - 1, 0], // bottom left
    [size - 1, size - 1], // bottom right
  ]

  const centers = [
    [0, centerX], // top center
    [size - 1, centerX], // bottom center
    [centerY, 0], // Left center
    [centerY, size - 1], // Right center
  ]

  const gridSize = _.floor(steps / size) - 1
  const odd = Math.pow(_.floor(gridSize / 2) * 2 + 1, 2)
  const even = Math.pow(_.floor((gridSize + 1) / 2) * 2, 2)

  const oddPoints = bfs(grid, centerY, centerX, size * 2 + 1)
  const evenPoints = bfs(grid, centerY, centerX, size * 2)

  const cornerSteps = size - 1
  const cornerSum = _.sum(centers.map(([y, x]) => bfs(grid, y, x, cornerSteps)))

  const smallSteps = _.floor(size / 2) - 1
  const smallSum = _.sum(corners.map(([y, x]) => bfs(grid, y, x, smallSteps)))

  const largeSteps = _.floor(size * 3 / 2) - 1
  const largeSum = _.sum(corners.map(([y, x]) => bfs(grid, y, x, largeSteps)))

  return _.sum([
    odd * oddPoints,
    even * evenPoints,
    cornerSum,
    (gridSize + 1) * smallSum,
    gridSize * largeSum,
  ])
}

const solve2Data = runPart2 && runBoth ? solve2(task, 26501365) : "skipped"

console.log("\nPart 2:")
console.log("Task:\t", solve2Data)
console.log()
