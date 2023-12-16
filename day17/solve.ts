// @deno-types="npm:@types/lodash"
import _, { sortBy } from "npm:lodash"
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

const solve1 = (data: Puzzle) => {
  const [ym, xm] = [data.length, data[0].length]

  // Find startnode
  const start: Coord = [0, 0]
  const target: Coord = [ym - 1, xm - 1]

  let minPath = []
  let minHeatLoss = 0
  const seen = new Set()

  const directions = {
    U: [-1, 0], // Up
    L: [0, -1], // Left
    R: [0, 1], // Right
    D: [1, 0], // Down
  }

  type Queue = {
    pos: Coord
    heatLoss: number
    lastMoves: Coord[]
    lastDirs: string[]
  }[]
  let queue: Queue = [{
    pos: start,
    heatLoss: 0,
    lastMoves: [],
    lastDirs: [],
  }]

  while (queue.length > 0) {
    const { pos, heatLoss, lastMoves, lastDirs } = queue.shift()
    const [y, x] = pos

    // Check if target is reached
    if (_.isEqual(pos, target)) {
      minPath = lastMoves
      minHeatLoss = heatLoss
      console.log(`Found path with ${minPath.length} steps`, queue.length)
      break
    }

    for (const nDir in directions) {
      // Prevent going back the field we came from
      const lastDir = _.slice(lastDirs, -1)[0]
      if (
        (lastDir == "D" && nDir == "U") || (lastDir == "U" && nDir == "D") ||
        (lastDir == "L" && nDir == "R") || (lastDir == "R" && nDir == "L")
      ) continue

      // Prevent 3 steps into the same direction in a row
      const lastThreeDirs = _.slice(lastDirs, -3)
      const nDirCount = _.countBy(lastThreeDirs)[nDir] || 0
      if (nDirCount >= 3) continue

      const [dy, dx] = directions[nDir]
      const [ny, nx] = [y + dy, x + dx]
      if (!_.inRange(ny, 0, ym) || !_.inRange(nx, 0, xm)) continue
      
      const nKey = [y, x, nDir, nDirCount].join(":")
      if (seen.has(nKey)) continue
      seen.add(nKey)

      const nPos: Coord = [ny, nx]
      queue.push({
        pos: nPos,
        heatLoss: heatLoss + data[ny][nx],
        lastMoves: [...lastMoves, nPos],
        lastDirs: [...lastDirs, nDir],
      })
    }

    queue = _.sortBy(queue, "heatLoss")
    // console.log("pq", queue.map(e => e.heatLoss))
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
