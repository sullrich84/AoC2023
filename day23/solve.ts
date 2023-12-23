// @deno-types="npm:@types/lodash"
import _ from "npm:lodash"
import { read } from "../utils/Reader.ts"

type Puzzle = string[][]

const [task, sample] = read("day23").map((file) =>
  _.initial(file.split("\n").map((line) => line.split("")))
)

console.clear()
console.log("🎄 Day 23: A Long Walk")

const runPart1 = false
const runPart2 = true
const runBoth = true

/// Part 1

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
  let maxSteps = Number.NEGATIVE_INFINITY

  const stack: Stack = []
  stack.push([0, 1, yLen - 1, xLen - 2, new Set()])

  while (stack.length > 0) {
    const [y, x, ty, tx, seen] = stack.pop()!

    // Check if target reached
    if (y == ty && x == tx) {
      maxSteps = Math.max(maxSteps, seen.size)
      continue
    }

    // Update state
    const key = [y, x].join(":")
    const nSeen = new Set(seen)
    nSeen.add(key)

    // Move
    const tile = data[y][x]
    const nDir = dir[tile]

    // No connection between waypoints found
    for (const [dy, dx] of nDir) {
      const [ny, nx] = [y + dy, x + dx]
      if (!_.inRange(ny, 0, yLen) || !_.inRange(nx, 0, xLen)) continue

      const nTile = data[ny][nx]
      if (nTile == "#") continue

      const nKey = [ny, nx].join(":")
      if (nSeen.has(nKey)) continue

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

type Path = { [key: string]: Map<string, number> }

const solve2 = (data: Puzzle) => {
  const [yLen, xLen] = [data.length, data[0].length]
  const waypoints = new Map<string, [number, number]>()

  const start = [0, data[0].indexOf(".")]
  const target = [data.length - 1, data[data.length - 1].indexOf(".")]

  const startKey = start.join(":")
  const targetKey = target.join(":")

  waypoints.set(startKey, start)
  waypoints.set(targetKey, target)

  // Find all intersections on the map
  for (let y = 0; y < yLen; y++) {
    for (let x = 0; x < xLen; x++) {
      const tile = data[y][x]
      if (tile == "#") continue

      const win = dir["."].map(([dy, dx]) => _.get(data, [y + dy, x + dx]))
      const walls = _.countBy(win, (t) => t == "#").true || 0
      if (walls >= 2) continue

      const pos = [y, x]
      waypoints.set(pos.join(":"), pos)
    }
  }

  // Build paths between waypoints
  const paths = {}
  for (const [wpKey, [wpy, wpx]] of waypoints.entries()) {
    const seen = new Set()
    const stack = [[wpy, wpx, 0]]

    while (stack.length > 0) {
      const [y, x, steps] = stack.pop()!
      const key = [y, x].join(":")

      if (steps > 0 && waypoints.has(key) && wpKey != key) {
        paths[key] = paths[key] || new Map()
        paths[key].set(wpKey, steps)
        continue
      }

      for (const [dy, dx] of dir["."]) {
        const [ny, nx] = [y + dy, x + dx]
        const nKey = [ny, nx].join(":")

        if (!_.inRange(ny, 0, yLen) || !_.inRange(nx, 0, xLen)) continue
        if (data[ny][nx] == "#") continue
        if (seen.has(nKey)) continue

        stack.push([ny, nx, steps + 1])
        seen.add(nKey)
      }
    }
  }

  // Find way
  const stack = [[startKey, targetKey, 0, new Set()]]
  let maxSteps = Number.NEGATIVE_INFINITY

  while (stack.length > 0) {
    const [key, dest, steps, seen] = stack.pop()!

    const nSeen = new Set(seen)
    if (nSeen.has(key)) continue
    nSeen.add(key)

    if (key == dest) {
      if (maxSteps < steps) {
        console.log("Target reached within", steps, "steps")
        maxSteps = steps
      }
      continue
    }

    const adj = paths[key]
    for (const next of adj) {
      const [nKey, nSteps] = next
      stack.push([nKey, dest, steps + nSteps, nSeen])
    }
  }

  return maxSteps
}

const solve2Sample = runPart2 ? solve2(sample) : "skipped"
const solve2Data = runPart2 && runBoth ? solve2(task) : "skipped"

console.log("\nPart 2:")
console.log("Sample:\t", solve2Sample)
console.log("Task:\t", solve2Data)
console.log()
