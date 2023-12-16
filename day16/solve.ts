// @deno-types="npm:@types/lodash"
import _ from "npm:lodash"
import { read } from "../utils/Reader.ts"

type Puzzle = string[][]

const [task, sample] = read("day16").map((file) =>
  _.initial(file.split("\n").map((line) => line.split("")))
)

console.clear()
console.log("🎄 Day 16: The Floor Will Be Lava")

const runPart1 = false
const runPart2 = true
const runBoth = false

/// Part 1

const Dirs = "UP" | "DOWN" | "LEFT" | "RIGHT"

const dir: { [key: Dirs]: [number, number] } = {
  "UP": [-1, 0],
  "DOWN": [1, 0],
  "LEFT": [0, -1],
  "RIGHT": [0, 1],
}

const solve1 = (data: Puzzle, startPos: [number, number], startMov: string) => {
  const seen = new Set()
  const energized = new Set()

  const [ym, xm] = [data.length, data[0].length]
  let beams = [{ pos: startPos, mov: startMov }]

  while (beams.length > 0) {
    const disabled = []

    for (const beam of beams) {
      const { pos, mov } = beam
      const [y, x] = pos
      const [dy, dx] = dir[mov]
      console.log({ beam })

      // Disable beam if path already covered before
      const key = [y, x, mov].join(":")
      if (seen.has(key)) {
        disabled.push(beam)
        continue
      }

      // Memorize position
      seen.add(key)
      energized.add([y, x].join(":"))

      const [ny, nx] = [y + dy, x + dx]

      // Disable beam if next pos is out of bounds
      if (!(_.inRange(ny, 0, ym) && _.inRange(nx, 0, xm))) {
        disabled.push(beam)
        continue
      }

      const nTile = data[ny][nx]
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
    console.log({ beams: beams.length, disabled: disabled.length })
    beams = _.without(beams, ...disabled)
  }

  return energized.size
}

// > 7410

const solve1Sample = runPart1 ? solve1(sample, [0, 0], "RIGHT") : "skipped"
const solve1Data = runPart1 && runBoth
  ? solve1(task, [0, 0], "DOWN")
  : "skipped"

console.log("\nPart 1:")
console.log("Sample:\t", solve1Sample)
console.log("Task:\t", solve1Data)

/// Part 2

const solve2 = (data: Puzzle) => {
  return solve1(data, [0, 0], "RIGHT")
}

const solve2Sample = runPart2 ? solve2(sample) : "skipped"
const solve2Data = runPart2 && runBoth ? solve2(task) : "skipped"

console.log("\nPart 2:")
console.log("Sample:\t", solve2Sample)
console.log("Task:\t", solve2Data)
console.log()
