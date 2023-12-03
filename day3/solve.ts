// @deno-types="npm:@types/lodash"
import _ from "npm:lodash"
import { data, Puzzle, sample } from "./data.ts"

console.clear()
console.log("🎄 Day 3: YYY")

const runPart1 = true
const runPart2 = true
const runBoth = true

/// Part 1

const solve1 = (data: Puzzle) => {
  const mx = data[0].length
  const my = data.length
  const pos = { y: NaN, x: NaN }
  let num = { y: NaN, sx: NaN, ex: NaN, val: "" }
  const nums = [] as number[]

  function check() {
    const { y, x } = pos

    if (num.val == "") return
    num.ex = x - 1

    const top = []
    const bot = []

    for (let cx = num.sx - 1; cx <= num.ex + 1; cx++) {
      top.push((data[y - 1] || [])[cx] || ".")
    }

    for (let cx = num.sx - 1; cx <= num.ex + 1; cx++) {
      bot.push((data[y + 1] || [])[cx] || ".")
    }

    const left = data[y] && data[y][num.sx - 1] || "."
    const right = data[y] && data[y][num.ex + 1] || "."

    const hasAdj = top.find((e) => e != ".") != undefined ||
      bot.find((e) => e != ".") != undefined ||
      left != "." || right != "."

    if (!hasAdj) return
    nums.push(parseInt(num.val))
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

  return _.sum(nums)
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
