// @deno-types="npm:@types/lodash"
import _ from "npm:lodash"
import { Puzzle, sample, task } from "./data.ts"
import { wait } from "../utils/utils.ts"

type Puzzle = string[][]

console.clear()
console.log("🎄 Day 13: Point of Incidence")

const runPart1 = true
const runPart2 = false
const runBoth = true

/// Part 1

const solve1 = (data: Puzzle) => {
  // console.log(data)
  let res = 0
  console.clear()
  console.log("----------------------------")
  let leftCols = 0
  let aboveRows = 0

  // data = [data[0]]

  // data = [[
  //   "###..##.####..###",
  //   "###..##.####..###",
  //   "##..###.#.#...###",
  //   "#.#.#..##..####.#",
  //   "#.#..#...#..###..",
  //   "..#....####.#.###",
  //   "#..#...##.###.#..",
  //   ".###......####.##",
  //   "#..#.#...########",
  // ]]

  data = [[
    "###..#....#####..",
    ".#........#.#.###",
    ".#........#.#.###",
    "###..#....#####..",
    "#.#.#####....####",
    ".#.###..####.#..#",
    "#..#..#.####...#.",
    "#..#..#.####...#.",
    ".#.###..##.#.#..#",
  ]]

  function rev(val: string) {
    return val.split("").reverse().join("")
  }

  for (const [fId, field] of data.entries()) {
    // console.log(field)

    // Scan for vertical matches
    let vMatches = 0
    for (let x = 1; x < field[0].length - 1; x++) {
      // Check if current col matches previous left
      const xm = field[0].length
      const col = field.map((f) => f[x]).join("")
      const pCol = field.map((f) => f[x - 1]).join("")

      if (col == pCol) {
        // Check for mirror match
        const xRange = Math.min(xm - x, x)

        const cols = field.map((f) => f.substr(x - xRange, xRange))
        const pCols = field.map((f) => rev(f.substr(x, xRange)))

        const zips = _.zip(cols, pCols).map(([l, r]) => [l, r, l == r])
        const allMatch = zips.map((z) => z[2]).reduce((p, c) => p && c, true)

        if (allMatch) {
          vMatches = x
        }
      }
    }

    if (vMatches > 0) {
      console.log(`Vertical match found on field ${fId} on col ${vMatches}`)
    }

    // Scan for horizontal matches
    let hMatches = 0
    for (let y = 1; y < field.length - 1; y++) {
      // Check if current row matches previous above
      const ym = field.length
      const row = field[y]
      const pRow = field[y - 1]

      if (row == pRow) {
        // Check for mirror match
        const yRange = Math.min(ym - y, y)

        const rows = field.slice(y, y + yRange) // f.substr(x - xRange, xRange))
        const pRows = field.slice(y - yRange, y).toReversed() // rev(f.substr(x, xRange)))

        const zips = _.zip(rows, pRows).map(([l, r]) => [l, r, l == r])
        const allMatch = zips.map((z) => z[2]).reduce((p, c) => p && c, true)

        console.log({y, yRange, allMatch})
        console.log(rows)
        console.log(pRows)

        wait()
        if (allMatch) {
          hMatches = y
        }
      }
    }

    if (hMatches > 0) {
      console.log(`Horizontal match found on field ${fId} on row ${hMatches}`)
    }

    leftCols += vMatches
    aboveRows += hMatches
    // console.log(vMatches, hMatches)
    // wait()
    // for (let y = 1; y < field.length - 1; y++) {
    //   for (let x = 1; x < field[0].length - 1; x++) {
    //     console.log({ y, x })
    //   }
    // }
  }

  return leftCols + (aboveRows * 100)
}

// > 23616

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
