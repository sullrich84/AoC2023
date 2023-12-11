// @deno-types="npm:@types/lodash"
import _ from "npm:lodash"
import { read } from "../utils/Reader.ts"
import { boolean, log } from "npm:mathjs"
import { wait } from "../utils/utils.ts"

type Puzzle = string[][]

const [task, sample] = read("day11").map((file) =>
  _.initial(file.split("\n").map((l) => l.split("")))
)
const data = Deno.readTextFileSync("./day11/task.txt")
const input = Deno.readTextFileSync("./day11/sample.txt")

console.clear()
console.log("🎄 Day 11: Cosmic Expansion")

const runPart1 = true
const runPart2 = false
const runBoth = false

/// Part 1

const solve1 = (data: Puzzle) => {
  const [ym, xm] = [data.length, data[0].length]
  const gMap: string[][] = _.cloneDeep(data)

  // Calculate gavitational force
  for (let y = 0; y < ym; y++) {
    for (let x = 0; x < xm; x++) {
      if (data[y][x] != ".") continue
      const col = _.times(ym, (ty) => data[ty][x])
      const row = _.times(xm, (tx) => data[y][tx])
      const g = _.union(col, row).length == 1 ? 2 : 1

      _.times(ym, (ty) => {
        if (gMap[ty][x] == "." || gMap[ty][x] == "1") {
          gMap[ty][x] = parseInt(g)
        }
      })

      _.times(xm, (tx) => {
        if (gMap[y][tx] == "." || gMap[y][tx] == "1") {
          gMap[y][tx] = parseInt(g)
        }
      })
    }
  }

  // for (const line of gMap) {
  //   console.log(line.join(""))
  // }

  const galaxies = []
  let galaxyCounter = 0
  for (let y = 0; y < ym; y++) {
    for (let x = 0; x < xm; x++) {
      const pos = gMap[y][x]
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
    const manhattanDistance = Math.abs(ty - sy) + Math.abs(tx - sx)

    const yr = _.range(_.min([sy, ty]), _.max([sy, ty]))
    const xr = _.range(_.min([sx, tx]), _.max([sx, tx]))

    console.log({ start, target, yr, xr })

    paths.push(manhattanDistance)
  }

  return paths
}

const solve1Sample = runPart1 ? solve1(sample) : "skipped"
const solve1Data = runPart1 && runBoth ? solve1(data) : "skipped"

console.log("\nPart 1:")
console.log("Sample:\t", solve1Sample)
console.log("Task:\t", solve1Data)

/// Part 2

const solve2 = (data: Puzzle) => {
}

const solve2Sample = runPart2 ? solve2(sample) : "skipped"
const solve2Data = runPart2 && runBoth ? solve2(data) : "skipped"

console.log("\nPart 2:")
console.log("Sample:\t", solve2Sample)
console.log("Task:\t", solve2Data)
console.log()
