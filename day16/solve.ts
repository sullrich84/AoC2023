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

function calcStart(data: Puzzle, pos: [number, number], mov: string) {
  const [y, x] = pos
  const tile = data[y][x]
  const starts = []

  if (tile == "|") {
    if (mov == "RIGHT" || mov == "LEFT") {
      starts.push({ pos, mov: "UP" })
      starts.push({ pos, mov: "DOWN" })
    } else {
      starts.push({ pos, mov})
    }
  }

  if (tile == "-") {
    if (mov == "UP" || mov == "DOWN") {
      starts.push({ pos, mov: "LEFT" })
      starts.push({ pos, mov: "RIGHT" })
    } else {
      starts.push({ pos, mov })
    }
  }

  if (tile == "/") {
    if (mov == "UP") starts.push({ pos, mov: "RIGHT" })
    if (mov == "DOWN") starts.push({ pos, mov: "LEFT" })
    if (mov == "RIGHT") starts.push({ pos, mov: "UP" })
    if (mov == "LEFT") starts.push({ pos, mov: "DOWN" })
  }

  if (tile == "\\") {
    if (mov == "UP") starts.push({ pos, mov: "LEFT" })
    if (mov == "DOWN") starts.push({ pos, mov: "RIGHT" })
    if (mov == "RIGHT") starts.push({ pos, mov: "DOWN" })
    if (mov == "LEFT") starts.push({ pos, mov: "UP" })
  }

  if (tile == ".") starts.push({ pos: [y, x], mov })

  if (y == 0 && x == 0) {
    console.log(starts)
  }

  return starts
}

const solve2 = (data: Puzzle) => {
  const [ym, xm] = [data.length, data[0].length]

  const upStarts = _.flatMap(
    _.range(0, xm).map((x) => calcStart(data, [0, x], "DOWN")),
  )
  const downStarts = _.flatMap(
    _.range(0, xm).map((x) => calcStart(data, [ym - 1, x], "UP")),
  )

  const rightStarts = _.flatMap(
    _.range(0, ym).map((y) => calcStart(data, [y, 0], "LEFT")),
  )

  const leftStarts = _.flatMap(
    _.range(0, ym).map((y) => calcStart(data, [y, xm - 1], "RIGHT")),
  )

  // console.log(upStarts)

  const starts = [...upStarts, ...downStarts, ...leftStarts, ...rightStarts]
  
  const config = starts.map((e) => solve1(data, e.pos, e.mov))
  return _.max(config)
}

// > 7753 > 7754

const solve2Sample = runPart2 ? solve2(sample) : "skipped"
const solve2Data = runPart2 && runBoth ? solve2(task) : "skipped"

console.log("\nPart 2:")
console.log("Sample:\t", solve2Sample)
console.log("Task:\t", solve2Data)
console.log()
