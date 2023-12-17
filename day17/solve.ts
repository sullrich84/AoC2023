// @deno-types="npm:@types/lodash"
import _, { functions, sortBy } from "npm:lodash"
import { read } from "../utils/Reader.ts"
import { wait } from "../utils/utils.ts"

type Puzzle = number[][]
type Coord = [number, number]

const [task, sample] = read("day17").map((file) =>
  _.initial(
    file.split("\n").map((line) => line.split("").map((e) => parseInt(e))),
  )
)

console.clear()
console.log("🎄 Day 17: Clumsy Crucible")

const runPart1 = true
const runPart2 = false
const runBoth = false

/// Part 1

function insideGrid(data: Puzzle, pos: Coord) {
  return _.inRange(pos[0], 0, data.length) &&
    _.inRange(pos[1], 0, data[0].length)
}

const solve1 = (data: Puzzle) => {
  const [ym, xm] = [data.length, data[0].length]

  // Find startnode
  const start: Coord = [0, 0]
  const target: Coord = [ym - 1, xm - 1]

  let minPath = []
  let minHeatLoss = Number.POSITIVE_INFINITY
  const seen = new Set()

  const directions = [
    [0, 1], 
    [1, 0],
    [0, -1],
    [-1, 0],
  ]

  type Queue = {
    hl: number
    pos: Coord
    dir: Coord
    cs: number
    path: Coord[]
  }[]
  let queue: Queue = [{
    hl: 0,
    pos: start,
    dir: [0, 0],
    cs: 0,
    path: [],
  }]

  while (queue.length > 0) {
    const { hl, pos, dir, cs, path } = queue.shift()
    const [y, x] = pos
    const [dy, dx] = dir

    // Skip out of grid
    if (!insideGrid(data, pos)) continue

    // Skip if target reached
    if (_.isEqual(pos, target)) {
      minPath = path
      minHeatLoss = hl
      break
    }

    // Skip already visited from same previous path
    const key = [y, x, dy, dx, cs].join(":")
    if (seen.has(key)) continue
    seen.add(key)

    if (cs < 3 && dy != 0 && dx != 0) {
      // Go into same direction
      const npos = [y + dy, x + dx]
      const [ny, nx] = npos

      if (insideGrid(data, npos)) {
        const nhl = hl + data[ny][nx]
        const ncs = cs + 1
        const nPath = [...path, pos]
        queue.push({ hl: nhl, pos: npos, dir, cs: ncs, path: nPath })
      }
    }

    for (const [ndy, ndx] of directions) {
      // Skip moving into same direction
      if (ndy == dy && ndx == dx) continue
      // Skip going back
      if (ndy == -dy && ndx == -dx) continue

      const npos = [y + ndy, x + ndx]
      if (!insideGrid(data, npos)) continue
      const [ny, nx] = npos

      const nhl = hl + data[ny][nx]
      const ndir = [ndy, ndx]
      const nPath = [...path, pos]
      queue.push({ hl: nhl, pos: npos, dir: ndir, cs: 1, path: nPath })
    }

    queue = _.sortBy(queue, "hl")
    // console.log(queue.map(e => JSON.stringify(e)))
    // wait()
  }

  minPath.forEach(([y, x]) => {
    data[y][x] = "•"
  })

  data.forEach((row) => console.log(row.join("").replaceAll(".", " ")))
  return [minPath.length, minHeatLoss]
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
