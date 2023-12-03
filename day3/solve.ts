// @deno-types="npm:@types/lodash"
import _, { functions } from "npm:lodash"
import { data, Puzzle, sample } from "./data.ts"

console.clear()
console.log("🎄 Day 3: YYY")

const runPart1 = true
const runPart2 = false
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

  let sum = 0

  console.log("m:", machines)
  console.log("s:", symbols)

  machines.forEach((m) => {
    // Find symbols arround each machine
    const match = symbols.find((s) =>
      (s.y == m.y - 1 || s.y == m.y || s.y == m.y + 1) &&
      _.inRange(s.x, m.x - 1, m.x + m.c.length + 1)
    )

    if (match && match.c) {
      sum += parseInt(m.c)
    }
  })

  return sum
}

const solve1Sample = runPart1 ? solve1(sample) : "skipped"
const solve1Data = runPart1 && runBoth ? solve1(data) : "skipped"

console.log("\nPart 1:")
console.log("Sample:\t", solve1Sample)
console.log("Task:\t", solve1Data)

/// Part 2

const solve2 = (data: Puzzle) => {
  const mx = data[0].length
  const my = data.length
  const pos = { y: NaN, x: NaN }
  let num = { y: NaN, sx: NaN, ex: NaN, val: "" }
  const nums = []
  let res = [] as number[]
  const gears = []

  function check() {
    const { y, x } = pos

    if (num.val == "") return
    num.ex = x - 1
    nums.push(num)
  }

  function reset() {
    num = { y: NaN, sx: NaN, ex: NaN, val: "" }
  }

  for (let y = 0; y < my; y++) {
    check()
    reset()

    for (let x = 0; x < mx; x++) {
      pos.y = y
      pos.x = x
      const c = data[y][x]

      if (/[0-9]/g.test(c)) {
        if (_.isNaN(num.y)) num.y = y
        if (_.isNaN(num.sx)) num.sx = x
        num.val = num.val.concat(c)
      } else {
        check()
        reset()
      }
    }
  }

  for (let y = 0; y < my; y++) {
    for (let x = 0; x < mx; x++) {
      const c = data[y][x]
      if (c == "*") gears.push({ y, x })
    }
  }

  gears.forEach((g) => {
    const adj = nums.filter((m) => {
      const top = m.y == g.y - 1 && _.inRange(g.x, m.sx - 1, m.ex + 2)
      const bot = m.y == g.y + 1 && _.inRange(g.x, m.sx - 1, m.ex + 2)
      const left = m.y == g.y && m.sx - 1 == g.x
      const right = m.y == g.y && m.ex + 1 == g.x

      return top || bot || left || right
    })

    if (adj.length == 2) {
      res.push(parseInt(adj[0].val) * parseInt(adj[1].val))
    }
  })

  return _.sum(res)
}

const solve2Sample = runPart2 ? solve2(sample) : "skipped"
const solve2Data = runPart2 && runBoth ? solve2(data) : "skipped"

console.log("\nPart 2:")
console.log("Sample:\t", solve2Sample)
console.log("Task:\t", solve2Data)
console.log()
