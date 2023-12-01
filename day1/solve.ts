import { data, Puzzle, sample1, sample2 } from "./data.ts"

console.clear()
console.log("🎄 Day 1: Trebuchet?!")

const runPart1 = true
const runPart2 = true

/// Part 1

const solve1 = (data: Puzzle) => {
  return data.map((v) => v.replace(/[a-z]/g, ""))
    .map((v) => v.split("").map((v) => parseInt(v)))
    .map((v) => v[0] * 10 + v[v.length - 1])
    .reduce((p, c) => p + c, 0)
}

const solve1Sample = runPart1 ? solve1(sample1) : "skipped"
const solve1Data = runPart1 ? solve1(data) : "skipped"

console.log("\nPart 1:")
console.log("Sample:\t", solve1Sample)
console.log("Task:\t", solve1Data)

/// Part 2

const solve2 = (data: Puzzle) =>
  data
    .map((v) => v.replace(/one/g, "one1one"))
    .map((v) => v.replace(/two/g, "two2two"))
    .map((v) => v.replace(/three/g, "three3three"))
    .map((v) => v.replace(/four/g, "four4four"))
    .map((v) => v.replace(/five/g, "five5five"))
    .map((v) => v.replace(/six/g, "six6six"))
    .map((v) => v.replace(/seven/g, "seven7seven"))
    .map((v) => v.replace(/eight/g, "eight8eight"))
    .map((v) => v.replace(/nine/g, "nine9nine"))
    .map((v) => v.replace(/[a-zA-z]/g, ""))
    .map((v) => v.split("").map((v) => parseInt(v)))
    .map((v) => v[0] * 10 + v[v.length - 1])
    .reduce((p, c) => p + c, 0)

const solve2Sample = runPart2 ? solve2(sample2) : "skipped"
const solve2Data = runPart2 ? solve2(data) : "skipped"

console.log("\nPart 2:")
console.log("Sample:\t", solve2Sample)
console.log("Task:\t", solve2Data)
