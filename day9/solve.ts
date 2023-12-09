// @deno-types="npm:@types/lodash"
import _ from "npm:lodash"
import { data, Puzzle, sample } from "./data.ts"
import { all, log, rightLogShiftDependencies } from "npm:mathjs"
import { wait } from "../utils/utils.ts"
// const data = Deno.readTextFileSync("./day9/task.txt")
// const input = Deno.readTextFileSync("./day9/sample.txt")

console.clear()
console.log("🎄 Day 9: Mirage Maintenance")

const runPart1 = true
const runPart2 = false
const runBoth = true

/// Part 1

const solve1 = (data: Puzzle) => {
  let sum = 0

  for (const [r, row] of data.entries()) {
    // const rowDiff = row.slice(0, row.length - 1).map((n, i) => row[i + 1] - n)
    const seq: number[][] = [row]
    let allZero = false

    while (allZero == false) {
      const cur = _.last(seq)
      const diff = cur.slice(0, cur.length - 1).map((n, i) => cur[i + 1] - n)
      seq.push(diff)
      allZero = !diff.find((n) => n != 0)
    }

    const rSeq = [...seq].reverse()

    for (let i = 0; i < rSeq.length - 1; i++) {
      const add = _.last(rSeq[i + 1]) + _.last(rSeq[i])
      // console.log({add, rSeq: rSeq[i]}); 
      rSeq[i + 1].push(add)
    }

    const lastHistory = _.last(_.last(rSeq));
    console.log("-->", lastHistory);
    sum += lastHistory
    // console.log(add);

    // console.log({ len: seq.length, seq })
    // return
  }

  return sum
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
