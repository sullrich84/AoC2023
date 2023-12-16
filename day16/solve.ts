// @deno-types="npm:@types/lodash"
import _ from "npm:lodash"
import { read } from "../utils/Reader.ts"

type Puzzle = string[][]

const [task, sample] = read("day16").map((file) =>
  _.initial(file.split("\n").map((line) => line.split("")))
)

console.clear()
console.log("🎄 Day 16: The Floor Will Be Lava")

const runPart1 = true
const runPart2 = true
const runBoth = true

/// Part 1

type Coord = [number, number]
type Directions = { UP: Coord; DOWN: Coord; LEFT: Coord; RIGHT: Coord }
type Beams = { pos: Coord; mov: string }[]

const dir: Directions = {
  UP: [-1, 0],
  DOWN: [1, 0],
  LEFT: [0, -1],
  RIGHT: [0, 1],
}

function insideGrid(grid: Puzzle, y: number, x: number) {
  return _.inRange(y, 0, grid.length) && _.inRange(x, 0, grid[0].length)
}

const solve1 = (grid: Puzzle, pos: Coord = [0, -1], mov = "RIGHT") => {
  const seen = new Set()
  const energized = new Set()
  let beams: Beams = [{ pos, mov }]

  while (beams.length > 0) {
    const disabled = []

    for (const beam of beams) {
      const { pos, mov } = beam
      const [y, x] = pos
      const [dy, dx] = dir[mov]

      // Disable beam if path already covered before
      const key = [y, x, mov].join(":")
      if (seen.has(key)) {
        disabled.push(beam)
        continue
      } else {
        seen.add(key)
      }

      energized.add([y, x].join(":"))
      const [ny, nx] = [y + dy, x + dx]

      // Disable beam if next pos is out of bounds
      if (!insideGrid(grid, ny, nx)) {
        disabled.push(beam)
        continue
      }

      const nTile = grid[ny][nx]
      let nMov = mov

      // Check reflection
      if (nTile == "|" && (mov == "RIGHT" || mov == "LEFT")) {
        beams.push({ pos: [ny, nx], mov: "UP" })
        nMov = "DOWN"
      }

      if (nTile == "-" && (mov == "UP" || mov == "DOWN")) {
        beams.push({ pos: [ny, nx], mov: "RIGHT" })
        nMov = "LEFT"
      }

      if (nTile == "/") {
        if (mov == "UP") nMov = "RIGHT"
        if (mov == "DOWN") nMov = "LEFT"
        if (mov == "RIGHT") nMov = "UP"
        if (mov == "LEFT") nMov = "DOWN"
      }

      if (nTile == "\\") {
        if (mov == "UP") nMov = "LEFT"
        if (mov == "DOWN") nMov = "RIGHT"
        if (mov == "RIGHT") nMov = "DOWN"
        if (mov == "LEFT") nMov = "UP"
      }

      beam.pos = [ny, nx]
      beam.mov = nMov
    }

    // Remove all disabled beams
    beams = _.without(beams, ...disabled)
  }

  // Since we started outside the grid, we subtract by 1
  return energized.size - 1
}

const solve1Sample = runPart1 ? solve1(sample) : "skipped"
const solve1Data = runPart1 && runBoth ? solve1(task) : "skipped"

console.log("\nPart 1:")
console.log("Sample:\t", solve1Sample)
console.log("Task:\t", solve1Data)

/// Part 2

const solve2 = (grid: Puzzle) => {
  const [ym, xm] = [grid.length, grid[0].length]
  const up = _.range(0, xm).map((x) => solve1(grid, [-1, x], "DOWN"))
  const down = _.range(0, xm).map((x) => solve1(grid, [ym, x], "UP"))
  const left = _.range(0, ym).map((y) => solve1(grid, [y, -1], "RIGHT"))
  const right = _.range(0, ym).map((y) => solve1(grid, [y, xm], "LEFT"))
  return _.max(_.flatMap([up, down, left, right]))
}

const solve2Sample = runPart2 ? solve2(sample) : "skipped"
const solve2Data = runPart2 && runBoth ? solve2(task) : "skipped"

console.log("\nPart 2:")
console.log("Sample:\t", solve2Sample)
console.log("Task:\t", solve2Data)
console.log()
