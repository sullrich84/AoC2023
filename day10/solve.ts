// @deno-types="npm:@types/lodash"
import _ from "npm:lodash"
import { read } from "../utils/Reader.ts"

type Puzzle = string[][]

const [task, sample] = read("day10").map((file) =>
  _.initial(file.split("\n").map((row) => row.split("")))
)

console.clear()
console.log("🎄 Day 10: Pipe Maze")

const runPart1 = true
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

/// Part 1

const solve1 = (data: Puzzle) => {
  const [ym, xm] = [data.length, data[0].length]
  let [cy, cx] = [0, 0]

  // Find starting position
  for (let y = 0; y < ym; y++) {
    for (let x = 0; x < xm; x++) {
      if (data[y][x] == "S") {
        cy = y
        cx = x
      }
    }
  }

  type StackItem = {
    dir: "T" | "B" | "L" | "R"
    pos: [number, number]
    step: number
  }

  // Initialize stack with instructions to follow
  // both directions from the starting point
  const stack: StackItem[] = []
  for (const [dir, [dy, dx]] of _.entries(dirs)) {
    const [ny, nx] = [cy + dy, cx + dx]
    const nt = data[cy + dy][cx + dx]
    if (link[nt] && link[nt][dir]) {
      stack.push({
        dir,
        pos: [ny, nx],
        step: 0,
      })
    }
  }

  // Move through stack and check if position has been visited before
  const seen: { [key: string]: [number, number] } = {}
  while (stack.length > 0) {
    const { dir, pos, step } = stack.pop()!
    const [cy, cx] = pos

    // Check if field has been entered before
    const key = [cy, cx].join(":")
    if (seen[key]) break

    // Memorizer visit
    seen[key] = [cy, cx]
    const t = data[cy][cx]

    // Move on to next field
    const nDir = link[t][dir]
    const [dy, dx] = dirs[nDir]
    const [ny, nx] = [cy + dy, cx + dx]

    stack.unshift({
      dir: nDir,
      pos: [ny, nx],
      step: step + 1,
    })
  }

  const { step } = stack.pop()
  return { seen, steps: step }
}

const solve1Sample = runPart1 ? solve1(sample).steps : "skipped"
const solve1Data = runPart1 && runBoth ? solve1(task).steps : "skipped"

console.log("\nPart 1:")
console.log("Sample:\t", solve1Sample)
console.log("Task:\t", solve1Data)

/// Part 2

const solve2 = (data: Puzzle, rep: string) => {
  const { seen } = solve1(data)
  const [ym, xm] = [data.length, data[0].length]
  const cleanMap = _.cloneDeep(data)

  for (let y = 0; y < ym; y++) {
    for (let x = 0; x < xm; x++) {
      const isPath = seen[y + ":" + x] != undefined
      cleanMap[y][x] = isPath ? data[y][x] : "."
      if (data[y][x] == "S") cleanMap[y][x] = rep
    }
  }

  const enclosed = []

  for (let y = 0; y < ym; y++) {
    for (let x = 0; x < xm; x++) {
      if (cleanMap[y][x] != ".") continue
      const column = _.times(ym, (vy) => cleanMap[vy][x])

      // Count crossings
      const top = column.slice(0, y).reverse()
      const bot = column.slice(y + 1)

      const topF = top.filter((t) =>
        t == "L" || t == "F" || t == "J" || t == "7" || t == "-"
      )
      const botF = bot.filter((t) =>
        t == "L" || t == "F" || t == "J" || t == "7" || t == "-"
      )

      const rTopF = topF.join("")
        // Parts we can squeeze along while moving up
        // Dont treat at all
        .replaceAll("LF", "")
        .replaceAll("J7", "")
        // Parts we can't squeeze along while moving up
        // Treat as crossing
        .replaceAll("L7", "-")
        .replaceAll("JF", "-")

      const rBotF = botF.join("")
        // Parts we can squeeze along while moving down
        // Dont treat at all
        .replaceAll("FL", "")
        .replaceAll("7J", "")
        // Parts we can't squeeze along while moving down
        // Treat as crossing
        .replaceAll("7L", "-")
        .replaceAll("FJ", "-")

      const topEnc = rTopF.length % 2 != 0
      const botEnc = rBotF.length % 2 != 0

      if (topEnc || botEnc) {
        enclosed.push([y, x])
      }
    }
  }

  return enclosed.length
}

const solve2Sample = runPart2 ? solve2(sample, "F") : "skipped"
const solve2Data = runPart2 && runBoth ? solve2(task, "J") : "skipped"

console.log("\nPart 2:")
console.log("Sample:\t", solve2Sample)
console.log("Task:\t", solve2Data)
console.log()
