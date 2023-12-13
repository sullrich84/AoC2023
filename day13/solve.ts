// @deno-types="npm:@types/lodash"
import _ from "npm:lodash"
import { Puzzle, sample, task } from "./data.ts"

console.clear()
console.log("🎄 Day 13: Point of Incidence")

const runPart1 = true
const runPart2 = true
const runBoth = true

function transpose(field: string[]) {
  const transposed = _.unzip(field.map((row) => row.split("")))
  return transposed.map((col) => col.join(""))
}

function sliceHorizontal(field: string[], row: number) {
  const aboveRows = _.slice(field, 0, row)
  const belowRows = _.slice(field, row)
  return [aboveRows.reverse(), belowRows]
}

function hasHorizontalMirror(field: string[], avoid = 0) {
  let result = 0

  for (const [row] of field.entries()) {
    // For part 2 we already know a matching horizontal line
    // Avoid the known line to avoid falsified results
    if (row === avoid) continue

    // Split fields in two slices
    const [above, below] = sliceHorizontal(field, row)
    const [a, b] = [above.join(""), below.join("")]

    // Bring both rows to same length
    const range = Math.min(a.length, b.length)
    const aNorm = a.substring(0, range)
    const bNorm = b.substring(0, range)

    if (aNorm == bNorm) result = row
  }

  return result
}

function toggleChar(str: string, pos: number) {
  const rep = str.charAt(pos) === "#" ? "." : "#"
  return str.substring(0, pos) + rep + str.substring(pos + 1)
}

function hasMirror(field: string[], part2 = false): number {
  const v = hasHorizontalMirror(transpose(field))
  const h = hasHorizontalMirror(field)
  const [ym, xm] = [field.length, field[0].length]

  if (part2) {
    for (const y of _.range(0, ym)) {
      for (const x of _.range(0, xm)) {
        const otherField = _.cloneDeep(field)
        otherField[y] = toggleChar(field[y], x)

        const ov = hasHorizontalMirror(transpose(otherField), v)
        const oh = hasHorizontalMirror(otherField, h)

        if (ov > 0 || oh > 0) {
          // We found another reflection
          return ov + oh * 100
        }
      }
    }
  }

  // Part 1:
  return v + h * 100
}

/// Part 1

const solve1 = (data: Puzzle) => {
  return _.sum(data.map((field) => hasMirror(field, false)))
}

const solve1Sample = runPart1 ? solve1(sample) : "skipped"
const solve1Data = runPart1 && runBoth ? solve1(task) : "skipped"

console.log("\nPart 1:")
console.log("Sample:\t", solve1Sample)
console.log("Task:\t", solve1Data)

/// Part 2

const solve2 = (data: Puzzle) => {
  return _.sum(data.map((field) => hasMirror(field, true)))
}

const solve2Sample = runPart2 ? solve2(sample) : "skipped"
const solve2Data = runPart2 && runBoth ? solve2(task) : "skipped"

console.log("\nPart 2:")
console.log("Sample:\t", solve2Sample)
console.log("Task:\t", solve2Data)
console.log()
