// @deno-types="npm:@types/lodash"
import _ from "npm:lodash"
import { data, Puzzle, sample } from "./data.ts"
// const data = Deno.readTextFileSync("./day4/task.txt")
// const input = Deno.readTextFileSync("./day4/sample.txt")

console.clear()
console.log("🎄 Day 4: YYY")

const runPart1 = false
const runPart2 = true
const runBoth = false

/// Part 1

const solve1 = (data: Puzzle) => {
  const points = data.map(({ win, play }) => {
    const wins = play.filter((pc) => win.find((wc) => wc == pc))
    if (wins.length == 0) return 0
    return wins.slice(1).reduce((p, c) => p * 2, 1)
  })

  return _.sum(points)
}

const solve1Sample = runPart1 ? solve1(sample) : "skipped"
const solve1Data = runPart1 && runBoth ? solve1(data) : "skipped"

console.log("\nPart 1:")
console.log("Sample:\t", solve1Sample)
console.log("Task:\t", solve1Data)

/// Part 2

const solve2 = (data: Puzzle) => {
  // const instances = data.map(({ win, play }) => ({ win, play, inst: [] }))
  const points: number[] = []
  const copys: number[] = []
  const instances: { [key: number]: number } = {}

  var runs = _.isNumber(instances[i]) ? instances[i] : 1
  for (let r = 0; r < runs; r++) {
    const { win, play } = data[i]
    const wins = play.filter((pc) => win.find((wc) => wc == pc))

    if (wins.length == 0) {
      continue
    }

    const pts = wins.slice(1).reduce((p, c) => p * 2, 1)

    for (let p = 0; p < pts; p++) {
      const nc = i + p + 1
      if (nc > data.length) continue
      instances[nc] = _.isNumber(instances[nc]) ? instances[nc] + 1 : 1
    }
  }

  console.log(instances)
  return _.sum(_.values(instances))
}

const solve2Sample = runPart2 ? solve2(sample) : "skipped"
const solve2Data = runPart2 && runBoth ? solve2(data) : "skipped"

console.log("\nPart 2:")
console.log("Sample:\t", solve2Sample)
console.log("Task:\t", solve2Data)
console.log()
