// @deno-types="npm:@types/lodash"
import _ from "npm:lodash"
import { data, Puzzle, sample } from "./data.ts"

console.clear()
console.log("🎄 Day 3: YYY")

const runPart1 = true
const runPart2 = false
const runBoth = true

/// Part 1

const solve1 = (data: Puzzle) => {
  const mx = data[0].length
  const my = data.length
  const pos = { y: NaN, x: NaN }
  let num = { y: null, sx: null, ex: null, val: "" }
  const nums = [] as number[]

  function check() {
    const { y, x } = pos

    if (num.val == "") return
    num.ex = x - 1

    let top = []
    let bot = []

    for (let cx = num.sx - 1; cx <= num.ex + 1; cx++) {
      top.push((data[y - 1] || [])[cx] || ".")
    }

    for (let cx = num.sx - 1; cx <= num.ex + 1; cx++) {
      bot.push((data[y + 1] || [])[cx] || ".")
    }

    let left = data[y] && data[y][num.sx - 1] || "."
    let right = data[y] && data[y][num.ex + 1] || "."

    let hasAdj = top.find((e) => e != ".") != undefined ||
      bot.find((e) => e != ".") != undefined ||
      left != "." || right != "."

    // console.log(">", num, top, bot, hasAdj)

    if (hasAdj) {
      nums.push(parseInt(num.val))
    }
  }

  function reset() {
    num = { y: null, sx: null, ex: null, val: "" }
  }

  for (let y = 0; y < my; y++) {
    check()
    reset()

    for (let x = 0; x < mx; x++) {
      pos.y = y
      pos.x = x
      const c = data[y][x]

      if (c != "." && /[0-9]/g.test(c)) {
        if (num.y == null) num.y = y
        if (num.sx == null) num.sx = x
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
  data.forEach((e) => {
  })
}

const solve2Sample = runPart2 ? solve2(sample) : "skipped"
const solve2Data = runPart2 && runBoth ? solve2(data) : "skipped"

console.log("\nPart 2:")
console.log("Sample:\t", solve2Sample)
console.log("Task:\t", solve2Data)
console.log()
