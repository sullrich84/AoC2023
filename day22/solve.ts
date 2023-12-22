// @deno-types="npm:@types/lodash"
import _ from "npm:lodash"
import { read } from "../utils/Reader.ts"

type Brick = [number, number, number, number, number, number]
type Block = [number, number, number]
type Puzzle = Brick[]

const [task, sample] = read("day22").map((file) =>
  _.initial(file.split("\n"))
    .map((l) => l.split("~"))
    .map(([l, r]) => [...l.split(","), ...r.split(",")])
    .map((r) => r.map((n) => parseInt(n)))
)

console.clear()
console.log("🎄 Day 22: Sand Slabs")

const runPart1 = true
const runPart2 = true
const runBoth = true

/// Part 1

function keyOf(n: number[]) {
  return n.join(",")
}

function eachBlockInBrick(brick: Brick): [string, number, number, number][] {
  const [sx, sy, sz, ex, ey, ez] = brick
  const result = []

  for (const x of _.range(sx, ex + 1)) {
    for (const y of _.range(sy, ey + 1)) {
      for (const z of _.range(sz, ez + 1)) {
        const block = [x, y, z]
        result.push([keyOf(block), ...block])
      }
    }
  }

  return result
}

function buildMap(bricks) {
  // Build map that references each
  // block of every brick by a key
  const locMap = new Map()
  for (const brick of bricks) {
    for (const [key] of eachBlockInBrick(brick)) {
      locMap.set(key, brick)
    }
  }

  // Let bricks fall to ground
  loop: while (true) {
    let done = true
    bricks: for (const brick of bricks) {
      for (const [_k, x, y, z] of eachBlockInBrick(brick)) {
        const nKey = keyOf([x, y, z - 1])
        if (z == 1 || (locMap.has(nKey) && locMap.get(nKey) != brick)) {
          continue bricks
        }
      }

      // Update bricks sz and ez coordinates
      brick[2] -= 1
      brick[5] -= 1

      // Remove old entries for brick
      for (const [key, x, y, z] of eachBlockInBrick(brick)) {
        locMap.delete(keyOf([x, y, z + 1]))
        locMap.set(key, brick)
      }

      // Continue loop
      done = false
    }

    if (done) break loop
  }

  // Initialize lookup map
  const above = new Map()
  const below = new Map()

  for (const brick of bricks) {
    above.set(brick, new Set())
    below.set(brick, new Set())
  }

  // Fill above and below references
  for (const brick of bricks) {
    const [sx, sy, sz, ex, ey, ez] = brick
    const nBrick = [sx, sy, sz + 1, ex, ey, ez + 1]

    for (const [belowKey] of eachBlockInBrick(nBrick)) {
      const brickAbove = locMap.get(belowKey)
      if (!locMap.has(belowKey) || brickAbove == brick) continue

      // Update both references
      above.get(brick).add(brickAbove)
      below.get(brickAbove).add(brick)
    }
  }

  return [above, below]
}

const solve1 = (bricks: Puzzle) => {
  let answer = 0
  const [above, below] = buildMap(bricks)

  loop: for (const brick of bricks) {
    for (const brickAbove of above.get(brick)) {
      if (below.get(brickAbove).size == 1) {
        continue loop
      }
    }

    answer++
  }

  return answer
}

const solve1Sample = runPart1 ? solve1(sample) : "skipped"
const solve1Data = runPart1 && runBoth ? solve1(task) : "skipped"

console.log("\nPart 1:")
console.log("Sample:\t", solve1Sample)
console.log("Task:\t", solve1Data)

/// Part 2

const solve2 = (bricks: Puzzle) => {
  let answer = 0
  const [above, below] = buildMap(bricks)

  for (const brick of bricks) {
    const removed = new Set()
    removed.add(brick)

    lookForNext: while (true) {
      for (const removedBrick of removed) {
        for (const aboveBrick of above.get(removedBrick)) {
          if (removed.has(aboveBrick)) continue
          const belowAbove = below.get(aboveBrick)
          if ([...belowAbove].every((x) => removed.has(x))) {
            removed.add(aboveBrick)
            continue lookForNext
          }
        }
      }

      break
    }

    answer += removed.size - 1
  }

  return answer
}

const solve2Sample = runPart2 ? solve2(sample) : "skipped"
const solve2Data = runPart2 && runBoth ? solve2(task) : "skipped"

console.log("\nPart 2:")
console.log("Sample:\t", solve2Sample)
console.log("Task:\t", solve2Data)
console.log()
