// @deno-types="npm:@types/lodash"
import _ from "npm:lodash"
import { read } from "../utils/Reader.ts"
import { boolean, log } from "npm:mathjs"
import { wait } from "../utils/utils.ts"

type Puzzle = string[][]

const [task, sample] = read("day11").map((file) =>
  _.initial(file.split("\n").map((l) => l.split("")))
)

console.clear()
console.log("🎄 Day 11: Cosmic Expansion")

const runPart1 = true
const runPart2 = true
const runBoth = true

/// Part 1

const solve = (data: Puzzle, expasion: number) => {
  const [ym, xm] = [data.length, data[0].length]
  const empty = { row: {}, col: {} }

  for (let i = 0; i < data.length; i++) {
    if (data[i].every((t) => t == ".")) {
      empty.row[i] = true
    }
  }

  for (let i = 0; i < data[0].length; i++) {
    if (data.every((t) => t[i] == ".")) {
      empty.col[i] = true
    }
  }

  const galaxies = []
  let galaxyCounter = 0
  for (let y = 0; y < ym; y++) {
    for (let x = 0; x < xm; x++) {
      const pos = data[y][x]
      if (pos != "#") continue
      galaxies.push({ id: ++galaxyCounter, y, x })
    }
  }

  const pairs = _.flatMap(galaxies, (galaxy, idx) => {
    return _.map(
      _.slice(galaxies, idx + 1),
      (nextGalaxy) => [galaxy, nextGalaxy],
    )
  })

  const paths = []
  for (const [start, target] of pairs) {
    const { id: sid, y: sy, x: sx } = start
    const { id: tid, y: ty, x: tx } = target

    const yDiff = _.range(Math.min(sy, ty), Math.max(sy, ty))
    const xDiff = _.range(Math.min(sx, tx), Math.max(sx, tx))
    const mDiff = Math.abs(sy - ty) + Math.abs(sx - tx)

    const yr = _.range(_.min([sy, ty]), _.max([sy, ty]))
    const xr = _.range(_.min([sx, tx]), _.max([sx, tx]))

    let diff = 0
    diff += _.sum(yr.map((y) => empty.row[y] ? expasion : 1))
    diff += _.sum(xr.map((x) => empty.col[x] ? expasion : 1))

    paths.push(diff)
  }

  return _.sum(paths)
}

const solve1Sample = runPart1 ? solve(sample, 2) : "skipped"
const solve1Data = runPart1 && runBoth ? solve(task, 2) : "skipped"

console.log("\nPart 1:")
console.log("Sample:\t", solve1Sample)
console.log("Task:\t", solve1Data)

/// Part 2

const solve2Sample = runPart2 ? solve(sample, 10) : "skipped"
const solve2Data = runPart2 && runBoth ? solve(task, 1_000_000) : "skipped"

console.log("\nPart 2:")
console.log("Sample:\t", solve2Sample)
console.log("Task:\t", solve2Data)
console.log()
