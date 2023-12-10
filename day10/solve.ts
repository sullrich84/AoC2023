// @deno-types="npm:@types/lodash"
import _ from "npm:lodash"
import { read } from "../utils/Reader.ts"
import { e, i, log } from "npm:mathjs"
import { wait } from "../utils/utils.ts"

type Puzzle = string[][]

const [task, sample] = read("day10").map((file) =>
  _.initial(file.split("\n").map((row) => row.split("")))
)

console.clear()
console.log("🎄 Day 10: Pipe Maze")

const runPart1 = false
const runPart2 = true
const runBoth = true

const dirs = { T: [-1, 0], B: [1, 0], L: [0, -1], R: [0, 1] }
const link = {
  "|": { T: "T", B: "B" },
  "-": { L: "L", R: "R" },
  "L": { B: "R", L: "T" },
  "J": { B: "L", R: "T" },
  "7": { T: "L", R: "B" },
  "F": { T: "R", L: "B" },
}

const locs = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
]

let loopSeen = {}
let loopStack = []

/// Part 1

const solve1 = (data: Puzzle) => {
  const [ym, xm] = [data.length, data[0].length]
  let start = [0, 0]

  for (let y = 0; y < ym; y++) {
    for (let x = 0; x < xm; x++) {
      if (data[y][x] == "S") start = [y, x]
    }
  }

  let [cy, cx] = start
  let steps = 0

  for (const [dir, [dy, dx]] of _.entries(dirs)) {
    const [ny, nx] = [cy + dy, cx + dx]
    const nt = data[cy + dy][cx + dx]
    if (link[nt] && link[nt][dir]) {
      loopStack.push({
        lastPos: [cy, cx],
        lastDir: dir,
        pos: [ny, nx],
        steps: 0,
      })
    }
  }

  while (loopStack.length > 0) {
    const { lastPos, lastDir, pos, steps } = loopStack.pop()
    const [lpy, lpx] = lastPos
    const [cy, cx] = pos

    // Check if field has been entered before
    const key = cy + ":" + cx
    if (loopSeen[key]) break
    loopSeen[key] = [cy, cx]
    const t = data[cy][cx]

    // Move on
    const dir = link[t][lastDir]
    const [dy, dx] = dirs[dir]
    const [ny, nx] = [cy + dy, cx + dx]

    loopStack.unshift({
      lastPos: pos,
      lastDir: dir,
      pos: [ny, nx],
      steps: steps + 1,
    })
  }

  return loopStack.pop().steps
}

const solve1Sample = runPart1 ? solve1(sample) : "skipped"
const solve1Data = runPart1 && runBoth ? solve1(task) : "skipped"

console.log("\nPart 1:")
console.log("Sample:\t", solve1Sample)
console.log("Task:\t", solve1Data)

/// Part 2

const solve2 = (data: Puzzle, rep: string) => {
  loopSeen = {}
  loopStack = []
  solve1(data)

  ///

  const [ym, xm] = [data.length, data[0].length]
  const outside = []

  const cleanMap = JSON.parse(JSON.stringify(data))

  // console.log(loopSeen);

  for (let y = 0; y < ym; y++) {
    for (let x = 0; x < xm; x++) {
      const isPath = loopSeen[y + ":" + x] != undefined
      cleanMap[y][x] = isPath ? data[y][x] : "."
      if (data[y][x] == "S") cleanMap[y][x] = rep
    }
  }

  for (const row of data) {
    console.log(row.join(""))
  }

  for (const row of cleanMap) {
    console.log(row.join(""))
  }

  const enclosed = []

  // Only check vertically
  for (let y = 0; y < ym; y++) {
    for (let x = 0; x < xm; x++) {
      if (cleanMap[y][x] != ".") continue
      const column = _.times(ym, (vy) => cleanMap[vy][x])
      const tiles = column.filter((t) => t == ".").length

      // Count crossings
      const top = column.slice(0, y).reverse()
      const bot = column.slice(y + 1)

      const topF = top.filter((t) =>
        t == "L" || t == "F" || t == "J" || t == "7" || t == "-"
      )
      const botF = bot.filter((t) =>
        t == "L" || t == "F" || t == "J" || t == "7" || t == "-"
      )

      const rTopF = topF.join("").replaceAll("LF", "").replaceAll("J7", "")
        .replaceAll("L7", "-")
        .replaceAll("JF", "-")
      const rBotF = botF.join("").replaceAll("FL", "").replaceAll("7J", "")
        .replaceAll("7L", "-")
        .replaceAll("FJ", "-")

      const topEnc = rTopF.length % 2 != 0
      const botEnc = rBotF.length % 2 != 0

      const isEnc = topEnc || botEnc

      if (isEnc) {
        enclosed.push([y, x])
      }

      console.log({
        y,
        x,
        // col: column.join(""),
        rTopF,
        rBotF,
        // isEnc,
        e: [topEnc, botEnc],
      })
    }
  }

  console.log(enclosed)
  return enclosed.length
}

const solve2Sample = runPart2 ? solve2(sample, "F") : "skipped"
const solve2Data = runPart2 && runBoth ? solve2(task, "J") : "skipped"

// > 295
// < 2537

console.log("\nPart 2:")
console.log("Sample:\t", solve2Sample)
console.log("Task:\t", solve2Data)
console.log()
