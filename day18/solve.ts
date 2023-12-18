// @deno-types="npm:@types/lodash"
import _ from "npm:lodash"
import { read } from "../utils/Reader.ts"
import * as c from "https://deno.land/std@0.209.0/fmt/colors.ts"

type Puzzle = string[][]
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
const runPart2 = false
const runBoth = true

/// Part 1

function drawGrid(lines: [number, number][]) {
  let count = 0

  const [minY, maxY] = [
    _.min(lines.map(([y]) => y)),
    _.max(lines.map(([y]) => y)),
  ]

  const [minX, maxX] = [
    _.min(lines.map(([_, x]) => x)),
    _.max(lines.map(([_, x]) => x)),
  ]

  for (const y of _.range(minY, maxY + 1)) {
    let line = ""
    let prevWasLine = false
    let inside = false

    for (const x of _.range(minX, maxX + 1)) {
      const isLine = _.some(lines, (line) => _.isEqual(line, [y, x]))
      line += isLine ? c.cyan("#") : c.gray(".")
    }

    console.log(line)
  }

  return count
}

const solve1 = (data: Puzzle) => {
  const points: Array<Coords> = [[0, 0]]
  const lines: Array<Array<Coords>> = []

  for (const [dir, steps] of data) {
    const lastPoint = points[points.length - 1]
    const nextPoint = [...lastPoint]

    switch (dir) {
      case "U":
        nextPoint[0] = nextPoint[0] - steps
        break
      case "D":
        nextPoint[0] = nextPoint[0] + steps
        break
      case "L":
        nextPoint[1] = nextPoint[1] - steps
        break
      case "R":
        nextPoint[1] = nextPoint[1] + steps
        break
    }

    if (lastPoint[0] != nextPoint[0]) {
      const yr = _.range(
        Math.min(lastPoint[0], nextPoint[0]),
        Math.max(lastPoint[0], nextPoint[0]) + 1,
      )
      lines.push([...yr.map((y) => [y, lastPoint[1]])])
    } else {
      const xr = _.range(
        Math.min(lastPoint[1], nextPoint[1]),
        Math.max(lastPoint[1], nextPoint[1]) + 1,
      )
      lines.push([...xr.map((x) => [lastPoint[0], x])])
    }

    points.push(nextPoint)
  }

  // console.log(lines)
  return drawGrid(_.flatMap(lines))
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
