// @deno-types="npm:@types/lodash"
import _ from "npm:lodash"
import { mincut } from "npm:@graph-algorithm/minimum-cut"
import { read } from "../utils/Reader.ts"

type Puzzle = string[][]

const [task, sample] = read("day25").map((file) =>
  _.initial(file.split("\n").map((line) => line.replace(":", "").split(" ")))
)

console.clear()
console.log("🎄 Day 25: Snowverload")

const runPart1 = true
const runPart2 = true
const runBoth = true

/// Part 1

type Graph = { [key: string]: Set<string> }

const solve1 = (data: Puzzle) => {
  const edges = new Map()
  const graph: Graph = {}

  // Build graph and edges
  for (const [root, ...adjacents] of data) {
    for (const adj of adjacents) {
      const edge = [root, adj].sort()
      edges.set(edge.join(), edge)

      graph[root] = _.defaultTo(graph[root], new Set())
      graph[root].add(adj)
      
      graph[adj] = _.defaultTo(graph[adj], new Set())
      graph[adj].add(root)
    }
  }

  // Find mincuts in edges
  const cuts = [...mincut([...edges.values()])]
  const [groupLeaderA, groupLeaderB] = _.first(cuts)

  // Remove edges in graph
  for (const [nodeA, nodeB] of cuts) {
    graph[nodeA].delete(nodeB)
    graph[nodeB].delete(nodeA)
  }

  function countNeighbours(node: string) {
    const seen = new Set()
    const stack = [node]

    while (stack.length) {
      const root = stack.pop()
      if (seen.has(root)) continue
      seen.add(root)
      stack.push(...graph[root])
    }

    return seen.size
  }

  return countNeighbours(groupLeaderA) * countNeighbours(groupLeaderB)
}

const solve1Sample = runPart1 ? solve1(sample) : "skipped"
const solve1Data = runPart1 && runBoth ? solve1(task) : "skipped"

console.log("\nPart 1:")
console.log("Sample:\t", solve1Sample)
console.log("Task:\t", solve1Data)

/// Part 2

const solve2 = (data: Puzzle) => {
  return "Advent of Code 2023 completed!"
}

const solve2Sample = runPart2 ? solve2(sample) : "skipped"
const solve2Data = runPart2 && runBoth ? solve2(task) : "skipped"

console.log("\nPart 2:")
console.log("Sample:\t", solve2Sample)
console.log("Task:\t", solve2Data)
console.log()
