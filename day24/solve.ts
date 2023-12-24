// @deno-types="npm:@types/lodash"
import _ from "npm:lodash"
import { read } from "../utils/Reader.ts"
import { init } from "npm:z3-solver"

type Puzzle = [number, number, number, number, number, number][]

const [task, sample] = read("day24").map((file) =>
  _.initial(file.split("\n").map((line) => line.replaceAll(" @ ", ", ").split(", ")))
    .map((e) => e.map((i) => parseInt(i)))
)

console.clear()
console.log("🎄 Day 24: Never Tell Me The Odds")

const runPart1 = true
const runPart2 = false
const runBoth = true

/// Part 1

// http://paulbourke.net/geometry/pointlineplane/
function intersect(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  x3: number,
  y3: number,
  x4: number,
  y4: number,
) {
  const denom = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1)
  if (denom == 0) return null

  const ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denom
  return [x1 + ua * (x2 - x1), y1 + ua * (y2 - y1)]
}

const solve1 = (data: Puzzle, sxy: number, exy: number) => {
  let intersections = 0

  for (let i = 0; i < data.length; i++) {
    const [apx, apy, _apz, avx, avy, _avz] = data[i]
    
    for (let ii = i + 1; ii < data.length; ii++) {
      const [bpx, bpy, _bpz, bvx, bvy, _bvz] = data[ii]

      const [x1, x2] = [apx, apx + avx]
      const [x3, x4] = [bpx, bpx + bvx]
      const [y1, y2] = [apy, apy + avy]
      const [y3, y4] = [bpy, bpy + bvy]

      const intersection = intersect(x1, y1, x2, y2, x3, y3, x4, y4)
      if (intersection == null) continue

      const [x, y] = intersection
      const validA = x > x1 == x2 - x1 > 0 && y > y1 == y2 - y1 > 0
      const validB = x > x3 == x4 - x3 > 0 && y > y3 == y4 - y3 > 0
      const inRange = _.inRange(x, sxy, exy + 1) && _.inRange(y, sxy, exy + 1)

      if (!validA || !validB || !inRange) continue
      intersections++
    }
  }

  return intersections
}

const solve1Sample = runPart1 ? solve1(sample, 7, 27) : "skipped"
const solve1Data = runPart1 && runBoth
  ? solve1(task, 200000000000000, 400000000000000)
  : "skipped"

console.log("\nPart 1:")
console.log("Sample:\t", solve1Sample)
console.log("Task:\t", solve1Data)

/// Part 2

// Couldn't get z3-solver to run.
// Solver caused runtime panic in deno :(
// https://github.com/denoland/deno/issues/17171

// Skipping over to python

const solve2Sample = runPart2 ? solve2(sample) : "skipped"
const solve2Data = runPart2 && runBoth ? solve2(task) : "skipped"

console.log("\nPart 2:")
console.log("Sample:\t", solve2Sample)
console.log("Task:\t", solve2Data)
console.log()
