// @deno-types="npm:@types/lodash"
import _ from "npm:lodash"
import { read } from "../utils/Reader.ts"

type Puzzle = string[]

const [task, sample] = read("day15").map((file) =>
  file.replace("\n", "").split(",")
)

console.clear()
console.log("🎄 Day 15: Lens Library")

const runPart1 = true
const runPart2 = true
const runBoth = true

/// Part 1

function hash(input: string, val: number): number {
  if (input == "") return val
  const code = input.charCodeAt(0)
  const rest = input.substring(1)
  return hash(rest, (val + code) * 17 % 256)
}

const solve1 = (data: Puzzle) => {
  return _.sum(data.map((d) => hash(d, 0)))
}

const solve1Sample = runPart1 ? solve1(sample) : "skipped"
const solve1Data = runPart1 && runBoth ? solve1(task) : "skipped"

console.log("\nPart 1:")
console.log("Sample:\t", solve1Sample)
console.log("Task:\t", solve1Data)

/// Part 2

type Boxes = { [key: string]: { [key: string]: string } }

function hashMap(input: string, boxes: Boxes) {
  const [label] = input.split(/-|=/)
  const box = hash(label, 0)

  // Initalize empty (new) box
  if (_.isUndefined(boxes[box])) boxes[box] = {}

  if (input.includes("-")) {
    boxes[box] = _.omit(boxes[box], label)
    return boxes
  }

  // Replace label or append at end
  const focal = _.last(input.split("="))
  boxes[box][label] = focal!
  return boxes
}

function focusPower(boxes: Boxes) {
  let focusingPower = 0

  for (const [boxNumber, boxContent] of _.entries(boxes)) {
    const box = parseInt(boxNumber)
    let slotCount = 0

    for (const [_label, focusLength] of _.entries(boxContent)) {
      const focal = parseInt(focusLength)
      focusingPower += (box + 1) * ++slotCount * focal
    }
  }

  return focusingPower
}

const solve2 = (data: Puzzle) => {
  let boxes = {}

  for (const input of data) {
    boxes = hashMap(input, boxes)
  }

  return focusPower(boxes)
}

const solve2Sample = runPart2 ? solve2(sample) : "skipped"
const solve2Data = runPart2 && runBoth ? solve2(task) : "skipped"

console.log("\nPart 2:")
console.log("Sample:\t", solve2Sample)
console.log("Task:\t", solve2Data)
console.log()
