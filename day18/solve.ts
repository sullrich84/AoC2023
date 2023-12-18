// @deno-types="npm:@types/lodash"
import _ from "npm:lodash"
import { read } from "../utils/Reader.ts"

type Direction = "U" | "D" | "L" | "R"
type Puzzle = [Direction, number, string][]
type Coords = [number, number]

const [task, sample] = read("day18").map((file) =>
  file
    .split("\n")
    .map((line) => line.split(" "))
    .slice(0, -1)
    .map(([d, a, c]) => [d, parseInt(a), c.substring(1, c.length - 1)])
)

console.clear()
console.log("🎄 Day 18: Lavaduct Lagoon")

const runPart1 = true
const runPart2 = true
const runBoth = true

/// Part 1

const solve1 = (data: Puzzle) => {
  let borderLength = 0
  const points: Array<Coords> = [[0, 0]]
  const dirs: { U: Coords; D: Coords; L: Coords; R: Coords } = {
    U: [-1, 0],
    D: [1, 0],
    L: [0, -1],
    R: [0, 1],
  }

  for (const [dir, steps] of data) {
    const [y, x]: Coords = points[points.length - 1]
    const [dy, dx]: Coords = dirs[dir!]
    borderLength += steps!
    points.push([y + dy * steps!, x + dx * steps!])
  }

  let gaussArea = 0
  for (let i = 0; i < points.length; i++) {
    // Do the "shoelace" like calculation
    const prev = _.defaults(points[i - 1], _.last(points))
    const next = _.defaults(points[i + 1], _.first(points))
    const cur = points[i]
    gaussArea += (cur[0] * (prev[1] - next[1])) / 2
  }

  gaussArea = Math.abs(gaussArea)

  // Since the Gauß area centers each point in the middle, we have to
  // subtract the outer half "offset" of the the outline border and
  // add the "offset" for the corners.
  gaussArea -= borderLength / 2
  gaussArea += 1

  return gaussArea + borderLength
}

const solve1Sample = runPart1 ? solve1(sample) : "skipped"
const solve1Data = runPart1 && runBoth ? solve1(task) : "skipped"

console.log("\nPart 1:")
console.log("Sample:\t", solve1Sample)
console.log("Task:\t", solve1Data)

/// Part 2

const solve2 = (data: Puzzle) => {
  const dirs = ["R", "D", "L", "U"]
  const dataPart2: Puzzle = []

  for (const [_a, _b, color] of data) {
    const steps = parseInt(color.substring(1, 6), 16)
    const dir = dirs[parseInt(color.substring(6))]
    dataPart2.push([dir, steps, color])
  }

  return solve1(dataPart2)
}

const solve2Sample = runPart2 ? solve2(sample) : "skipped"
const solve2Data = runPart2 && runBoth ? solve2(task) : "skipped"

console.log("\nPart 2:")
console.log("Sample:\t", solve2Sample)
console.log("Task:\t", solve2Data)
console.log()
