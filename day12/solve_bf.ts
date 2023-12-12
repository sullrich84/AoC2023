// @deno-types="npm:@types/lodash"
import _ from "npm:lodash"
import { read } from "../utils/Reader.ts"

type Puzzle = [string, number[]][]

const [task, sample] = read("day12").map((file) =>
  _.initial(file.split("\n")).map((l) => l.split(" ")).map(
    (c) => [c[0], c[1].split(",").map((c) => parseInt(c))],
  )
)

console.clear()
console.log("🎄 Day 12: Hot Springs")

const runPart1 = true
const runPart2 = false
const runBoth = true

/// Part 1
function countOccurrences(str, target) {
  let count = 0
  let index = str.indexOf(target)

  while (index !== -1) {
    count++
    index = str.indexOf(target, index + 1)
  }

  return count
}

const solve1 = (data: Puzzle) => {
  let total = 0

  for (const [input, nums] of data) {
    const queue = [input]

    const combinations = new Set()

    while (queue.length > 0) {
      const line = queue.pop()
      if (!line?.includes("?")) {
        combinations.push(line)
        continue
      }

      const numSum = _.sum(nums)
      const numLen = nums.length

      const lineA = line.replace("?", ".")
      const lineB = line.replace("?", "#")
      queue.push(lineA)
      queue.push(lineB)
    }

    for (const line of combinations) {
      const res = _.reject(line.split("."), _.isEmpty)
      if (res.length != nums.length) continue
      const zip = _.zip(res, nums)
      if (zip.find(([line, len]) => line.length != len) != undefined) continue
      total += 1
    }

    console.log("combinations:", combinations.length)
    console.log("total:", total)
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
  const unfolded = data.map(([cfg, nums]) => {
    const newCfg = Array(5).fill(cfg).join("?")
    const newNums = _.flatten(Array(5).fill(nums))
    return [newCfg, newNums]
  })

  return solve1(unfolded)
}

const solve2Sample = runPart2 ? solve2(sample) : "skipped"
const solve2Data = runPart2 && runBoth ? solve2(task) : "skipped"

console.log("\nPart 2:")
console.log("Sample:\t", solve2Sample)
console.log("Task:\t", solve2Data)
console.log()
