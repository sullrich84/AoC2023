// @deno-types="npm:@types/lodash"
import _, { range } from "npm:lodash"
import { read } from "../utils/Reader.ts"

type Puzzle = string[][]

const [task, sample] = read("day19").map((file) => {
  const content = _.initial(file.split("\n"))
  const splitIdx = content.findIndex((e) => e == "")

  const block1 = content.slice(0, splitIdx)
  const block2 = content.slice(splitIdx + 1)

  const workflow = {}
  for (const line of block1) {
    console.log(line)
    const [name, rest] = line.substring(0, line.length - 1).split("{")
    const rules = rest.split(",")
    workflow[name] = { rules: [], fallback: rules.pop() }
    for (const rule of rules) {
      const [comparison, target] = rule.split(":")
      const key = comparison.substring(0, 1)
      const cmp = comparison.substring(1, 2)
      const n = parseInt(comparison.substring(2))
      workflow[name].rules.push([key, cmp, n, target])
    }
  }

  const ratings = []
  for (const line of block2) {
    const item = {}
    const segments = line.substring(1, line.length - 1).split(",")
    for (const segment of segments) {
      const [name, val] = segment.split("=")
      item[name] = parseInt(val)
    }
    ratings.push(item)
  }

  return [workflow, ratings]
})

console.clear()
console.log("🎄 Day 19: Aplenty")

const runPart1 = false
const runPart2 = true
const runBoth = false

/// Part 1

const solve1 = ([workflows, ratings]: Puzzle) => {
  function accept(item, name = "in") {
    if (name == "R") return false
    if (name == "A") return true

    const { rules, fallback } = workflows[name]
    for (const [key, cmp, n, target] of rules) {
      if (eval([item[key], cmp, n].join(""))) {
        return accept(item, target)
      }
    }

    return accept(item, fallback)
  }

  let total = 0

  for (const rating of ratings) {
    if (accept(rating)) {
      total += _.sum(_.values(rating))
    }
  }

  return total
}

const solve1Sample = runPart1 ? solve1(sample) : "skipped"
const solve1Data = runPart1 && runBoth ? solve1(task) : "skipped"

console.log("\nPart 1:")
console.log("Sample:\t", solve1Sample)
console.log("Task:\t", solve1Data)

/// Part 2

const solve2 = ([workflows]: Puzzle) => {
  function count(ranges, name = "in") {
    console.log(ranges)
    if (name == "R") return 0
    if (name == "A") {
      let product = 1
      for (const [low, high] of _.values(ranges)) {
        product *= high - low + 1
      }
      return product
    }

    let total = 0
    let useFallback = false

    const { rules, fallback } = workflows[name]

    for (const [key, cmp, n, target] of rules) {
      const [low, high] = ranges[key]
      const trueHalf = cmp == "<" ? [low, n - 1] : [n + 1, high]
      const falseHalf = cmp == "<" ? [n, high] : [low, n]

      if (trueHalf[0] <= trueHalf[1]) {
        const copy = _.cloneDeep(ranges)
        copy[key] = trueHalf
        total += count(copy, target)
      }

      if (falseHalf[0] <= falseHalf[1]) {
        ranges = _.cloneDeep(ranges)
        ranges[key] = falseHalf
      } else {
        useFallback = true
        break
      }
    }

    if (useFallback) {
      total += count(ranges, fallback)
    }

    return total
  }

  return count({
    "x": [1, 4000],
    "m": [1, 4000],
    "a": [1, 4000],
    "s": [1, 4000],
  })
}

const solve2Sample = runPart2 ? solve2(sample) : "skipped"
const solve2Data = runPart2 && runBoth ? solve2(task) : "skipped"

console.log("\nPart 2:")
console.log("Sample:\t", solve2Sample)
console.log("Task:\t", solve2Data)
console.log()
