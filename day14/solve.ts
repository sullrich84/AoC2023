// @deno-types="npm:@types/lodash"
import _, { join } from "npm:lodash"
// import {data, sample, Puzzle } from "./data.ts"

import { read } from "../utils/Reader.ts"

type Puzzle = string[][]

const [task, sample] = read("day14").map((file) =>
  _.initial(file.split("\n").map(line => line.split("")))
)


console.clear()
console.log("🎄 Day 14: Parabolic Reflector Dish")

const runPart1 = true
const runPart2 = false
const runBoth = false

function getColumn(data: string[][], x: number) {
  return data.map(row => row[x])
}

function shiftRocksLeft(line: string[]) {
  const result = []
  for (const part of line.join("").split("#")) {
    const orderedString = part.split("").sort().reverse().join("")
    result.push(orderedString)
  }
  return result.join("#")
}

function transpose(field: string[]) {
  const transposed = _.unzip(field.map((row) => row.split("")))
  return transposed.map((col) => col.join(""))
}

function count(payload: string, target: string) {
  const split = payload.split("")
  return _.countBy(split)[target] || 0
}

/// Part 1

const solve1 = (data: Puzzle) => {
  let res = []

  for (let i = 0; i < data.length; i++) {
    res.push(shiftRocksLeft(getColumn(data, i)))
  }

  res = transpose(res)
  let total = 0

  for (let i = 0; i < data.length; i++) {
    const row = data.length - i
    const c = count(res[i], "O") 
    console.log(row, "\t", res[i], "\t", c)
    total += row * c
  }

  return total
}

const solve1Sample = runPart1 ? solve1(sample) : "skipped"
const solve1Data = runPart1 && runBoth ? solve1(task) : "skipped"

console.log("\nPart 1:")
console.log("Sample:\t", solve1Sample)
console.log("Task:\t", solve1Data)

/// Part 2

const solve2 = (data: Puzzle) => {
   let res = []

  for (let i = 0; i < data.length; i++) {
    res.push(shiftRocksLeft(getColumn(data, i)))
  }

  res = transpose(res)
  let total = 0

  for (let i = 0; i < data.length; i++) {
    const row = data.length - i
    const c = count(res[i], "O") 
    console.log(row, "\t", res[i], "\t", c)
    total += row * c
  }

  return total

}

const solve2Sample = runPart2 ? solve2(sample) : "skipped"
const solve2Data = runPart2 && runBoth ? solve2(task) : "skipped"

console.log("\nPart 2:")
console.log("Sample:\t", solve2Sample)
console.log("Task:\t", solve2Data)
console.log()
