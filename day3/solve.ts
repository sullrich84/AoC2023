// @deno-types="npm:@types/lodash"
import _, { functions } from "npm:lodash"
import { data, Puzzle, sample } from "./data.ts"

console.clear()
console.log("🎄 Day 3: YYY")

const runPart1 = true
const runPart2 = true
const runBoth = true

/// Part 1

const solve1 = (data: Puzzle) => {
  const [my, mx] = [data.length, data[0].length]
  const machines = [] as { y: number; x: number; c: string }[]
  const symbols = [] as { y: number; x: number; c: string }[]

  let cur = { y: NaN, x: NaN, c: "" }

  function resolve() {
    // Resolve current machine
    cur.c && machines.push(cur)
    cur = { y: NaN, x: NaN, c: "" }
  }

  for (let y = 0; y < my; y++) {
    resolve()
    for (let x = 0; x < mx; x++) {
      const c = data[y][x]
      if (/[0-9]/.test(c)) {
        // Construct current machine
        if (_.isNaN(cur.y)) cur.y = y
        if (_.isNaN(cur.x)) cur.x = x
        cur.c = cur.c.concat(c)
      } else {
        resolve()
        if (c != ".") {
          // Push symbol
          symbols.push({ y, x, c })
        }
      }
    }
  }
  resolve()

  const partNumbers = machines.map((m) => {
    // Find symbols arround each machine
    const match = symbols.find((s) =>
      (s.y == m.y - 1 || s.y == m.y || s.y == m.y + 1) &&
      _.inRange(s.x, m.x - 1, m.x + m.c.length + 2)
    )

    return match && match.c ? parseInt(m.c) : 0
  })

  return _.sum(partNumbers)
}

const solve1Sample = runPart1 ? solve1(sample) : "skipped"
const solve1Data = runPart1 && runBoth ? solve1(data) : "skipped"

console.log("\nPart 1:")
console.log("Sample:\t", solve1Sample)
console.log("Task:\t", solve1Data)

/// Part 2

const solve2 = (data: Puzzle) => {
  const [my, mx] = [data.length, data[0].length]
  const machines = [] as { y: number; x: number; c: string }[]
  const gears = [] as { y: number; x: number; c: string }[]

  let cur = { y: NaN, x: NaN, c: "" }

  function resolve() {
    // Resolve current machine
    cur.c && machines.push(cur)
    cur = { y: NaN, x: NaN, c: "" }
  }

  for (let y = 0; y < my; y++) {
    resolve()
    for (let x = 0; x < mx; x++) {
      const c = data[y][x]
      if (/[0-9]/.test(c)) {
        // Construct current machine
        if (_.isNaN(cur.y)) cur.y = y
        if (_.isNaN(cur.x)) cur.x = x
        cur.c = cur.c.concat(c)
      } else {
        resolve()
        if (c == "*") {
          // Push symbol
          gears.push({ y, x, c })
        }
      }
    }
  }
  resolve()

  const res = gears.map((g) => {
    const adj = machines.filter((m) =>
      (m.y == g.y - 1 || m.y == g.y || m.y == g.y + 1) &&
      _.inRange(g.x, m.x - 1, m.x + m.c.length + 1)
    )

    return adj.length == 2
      ? adj.map((a) => parseInt(a.c)).reduce((p, c) => p * c, 1)
      : 0
  })

  return _.sum(res)
}

const solve2Sample = runPart2 ? solve2(sample) : "skipped"
const solve2Data = runPart2 && runBoth ? solve2(data) : "skipped"

console.log("\nPart 2:")
console.log("Sample:\t", solve2Sample)
console.log("Task:\t", solve2Data)
console.log()
