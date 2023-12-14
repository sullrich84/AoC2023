// @deno-types="npm:@types/lodash"
import _ from "npm:lodash"
import { read } from "../utils/Reader.ts"

type Puzzle = PuzzleLine[]
type PuzzleLine = string[]
const [task, sample] = read("day14").map((file) =>
  _.initial(file.split("\n").map((line) => line.split("")))
)

console.clear()
console.log("🎄 Day 14: Parabolic Reflector Dish")

const runPart1 = true
const runPart2 = true
const runBoth = true

function getColumn(data: Puzzle, col: number): PuzzleLine {
  return data.map((row) => row[col])
}

function shiftRocks(line: PuzzleLine, reverse = true): PuzzleLine {
  const result = []

  for (const part of line.join("").split("#")) {
    const orderedString = part.split("").sort()
    if (reverse) orderedString.reverse()
    result.push(orderedString.join(""))
  }

  return result.join("#").split("")
}

function transpose(puzzle: Puzzle): Puzzle {
  const transposed = _.unzip(puzzle.map((row) => row))
  return transposed.map((col) => col)
}

function countBalance(puzzle: Puzzle): number {
  let total = 0

  for (const [idx, line] of puzzle.entries()) {
    const row = puzzle.length - idx
    total += row * _.countBy(line)["O"] || 0
  }

  return total
}

/// Part 1

const solve1 = (data: Puzzle) => {
  const res: Puzzle = []
  for (let i = 0; i < data.length; i++) {
    res.push(shiftRocks(getColumn(data, i)))
  }

  return countBalance(transpose(res))
}

const solve1Sample = runPart1 ? solve1(sample) : "skipped"
const solve1Data = runPart1 && runBoth ? solve1(task) : "skipped"

console.log("\nPart 1:")
console.log("Sample:\t", solve1Sample)
console.log("Task:\t", solve1Data)

/// Part 2

function shift(data: Puzzle, dir: string): Puzzle {
  let res: Puzzle = []
  const ns = dir == "n" || dir == "s"

  for (let i = 0; i < data.length; i++) {
    const rocks = ns ? getColumn(data, i) : data[i]
    res.push(shiftRocks(rocks, dir == "n" || dir == "w"))
  }

  if (ns) res = transpose(res)
  return res
}

function hash(puzzle: Puzzle) {
  return _.flatMap(puzzle).join("")
}

const solve2 = (data: Puzzle, cycles = 1_000_000_000) => {
  const dirs = ["n", "w", "s", "e"]
  const cache: { [key: string]: Puzzle } = {}

  while (true) {
    const h = hash(data)
    if (cache[h] != undefined) {
      // Found a repeating pattern
      data = cache[h]
      break
    }

    for (const dir of dirs) {
      data = shift(data, dir)
    }

    cache[h] = data
  }

  const lastKey = hash(data)
  const uniqueValues = _.values(cache)

  // Cut of the uniqe states at the beginning where the stones "layed loosely in the middle"
  const offset = uniqueValues.findIndex((e) => hash(e) == lastKey)

  // Leap forward in the repating pattern
  const target = (cycles - offset) % (uniqueValues.length - offset) + offset - 1
  return countBalance(uniqueValues[target].map((l) => l.join("")))
}

const solve2Sample = runPart2 ? solve2(sample) : "skipped"
const solve2Data = runPart2 && runBoth ? solve2(task) : "skipped"

console.log("\nPart 2:")
console.log("Sample:\t", solve2Sample)
console.log("Task:\t", solve2Data)
console.log()
