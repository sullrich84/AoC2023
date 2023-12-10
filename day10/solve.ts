// @deno-types="npm:@types/lodash"
import _ from "npm:lodash"
import { read } from "../utils/Reader.ts"

type Puzzle = string[][]

const [task, sample] = read("day10").map((file) =>
  file.split("\n").map((row) => row.split(""))
)

console.clear()
console.log("🎄 Day 10: Pipe Maze")

const runPart1 = true
const runPart2 = false
const runBoth = true

const dirs = { T: [-1, 0], B: [1, 0], L: [0, -1], R: [0, 1] }
const link = {
  "|": { T: "T", B: "B" },
  "-": { L: "L", R: "R" },
  "L": { B: "R", L: "T" },
  "J": { B: "L", R: "T" },
  "7": { T: "L", R: "B" },
  "F": { T: "R", L: "B" },
}

/// Part 1

const solve1 = (data: Puzzle) => {
  const [ym, xm] = [data.length, data[0].length]
  let start = [0, 0]

  for (let y = 0; y < ym; y++) {
    for (let x = 0; x < xm; x++) {
      if (data[y][x] == "S") start = [y, x]
    }
  }

  let [cy, cx] = start
  let steps = 0

  let seen = {}
  let stack = []

  for (const [dir, [dy, dx]] of _.entries(dirs)) {
    const [ny, nx] = [cy + dy, cx + dx]
    const nt = data[cy + dy][cx + dx]
    if (link[nt] && link[nt][dir]) {
      stack.push({ lastPos: [cy, cx], lastDir: dir, pos: [ny, nx], steps: 1 })
    }
  }

  while (stack.length > 0) {
    const { lastPos, lastDir, pos, steps } = stack.pop()
    const [lpy, lpx] = lastPos
    const [cy, cx] = pos

    // Check if field has been entered before
    const key = cy + ":" + cx
    if (seen[key]) break
    seen[key] = true
    const t = data[cy][cx]

    // Move on
    const dir = link[t][lastDir]
    const [dy, dx] = dirs[dir]
    const [ny, nx] = [cy + dy, cx + dx]

    stack.unshift({
      lastPos: pos,
      lastDir: dir,
      pos: [ny, nx],
      steps: steps + 1,
    })
  }

  return stack.pop().steps - 1
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
