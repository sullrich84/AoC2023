// @deno-types="npm:@types/lodash"
import _ from "npm:lodash"
import { read } from "../utils/Reader.ts"

type Puzzle = string[][]

const [task, sample] = read("day15").map((file) => file.replace("\n", "").split(","))

console.clear()
console.log("🎄 Day 15: Lens Library")

const runPart1 = true
const runPart2 = false
const runBoth = true

/// Part 1

function hash(input: string, val: number): number {
  if (input == "") return val

  const [char, rest] = [input.substring(0, 1), input.substring(1)]
  const code = char.charCodeAt(0)
  // console.log("CHAR:", char, val, "CODE:", code, "REST:", rest || "-empty-")

  val += code
  val *= 17
  val %= 256

  return hash(rest, val)
}

const solve1 = (data: Puzzle) => {
  return _.sum(data.map((d) => hash(d, 0)))
}

const solve1Sample = runPart1 ? solve1(sample) : "skipped"
const solve1Data = runPart1 && runBoth ? solve1(task) : "skipped"

console.log("\nPart 1:")
console.log("Sample:\t", solve1Sample)
console.log("Task:\t", solve1Data)

/// Part 2

function hashMap(input: string) {

}

const solve2 = (data: Puzzle) => {
}

const solve2Sample = runPart2 ? solve2(sample) : "skipped"
const solve2Data = runPart2 && runBoth ? solve2(task) : "skipped"

console.log("\nPart 2:")
console.log("Sample:\t", solve2Sample)
console.log("Task:\t", solve2Data)
console.log()
