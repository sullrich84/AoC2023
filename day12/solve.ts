// @deno-types="npm:@types/lodash"
import _ from "npm:lodash"
import { read } from "../utils/Reader.ts"
import { number } from "npm:mathjs"

type Puzzle = [string, number[]][]

const [task, sample] = read("day12").map((file) =>
  _.initial(file.split("\n")).map((l) => l.split(" ")).map(
    (c) => [c[0], c[1].split(",").map((c) => parseInt(c))],
  )
)

console.clear()
console.log("🎄 Day 12: Hot Springs")

const runPart1 = true
const runPart2 = true
const runBoth = true

/// Part 1

const solve1 = (data: Puzzle) => {
  const seen: { [key: string]: number } = {}

  function count(line: string, groups: number[]) {
    if (line == "") {
      // Valid -> All chars matched to groups and no groups left 
      // Invalid -> All chars matched to groups but groups left
      return groups.length == 0 ? 1 : 0
    }

    if (groups.length == 0) {
      // Valid -> No further groups; remaining line has no damaged spring left
      // Invalid -> No further groups; remaining line has operational spring left
      return !line.includes("#") ? 1 : 0
    }

    // Use cache to reduce runtime
    const key = [line, ...groups].join(":")
    if (seen[key] != undefined) return seen[key]

    let result = 0

    const group = groups[0]
    const char = line[0]
    const groupChars = line.slice(0, group)

    const nextLine = line.slice(1)
    const nextGroups = groups.slice(1)

    // Char is operational or unknown
    if (char == "." || char == "?") {
      result += count(nextLine, groups)
    }
 
    if (char == "#" || char == "?") {
      // The remaining line has not enough chars to match
      // the amout of chars required for this group.
      const insufChars = group <= line.length

      // The remaining line has enough chars to match
      // the amout of chars required for this group.
      const sufChars = group == line.length

      // The remaining group chars have a working spring included
      const hasWorkingPart = groupChars.includes(".")

      if (insufChars && !hasWorkingPart && (sufChars || line[group] != "#")) {
        result += count(line.slice(group + 1), nextGroups)
      }
    }

    seen[key] = result
    return result
  }

  let total = 0

  for (const [cfg, nums] of data) {
    total += count(cfg, nums)
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
