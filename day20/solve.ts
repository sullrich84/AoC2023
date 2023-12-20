// @deno-types="npm:@types/lodash"
import _ from "npm:lodash"
import { read } from "../utils/Reader.ts"
import { lcm } from "npm:mathjs"

type Puzzle = string[][]

const [task, sample] = read("day20").map((file) =>
  _.initial(file.split("\n"))
    .map((line) => line.split(" -> "))
    .map(([l, r]) => [
      l,
      ...r.split(",")
        .map((e) => e.trim()),
    ])
)

console.clear()
console.log("🎄 Day 20: Pulse Propagation")

const runPart1 = true
const runPart2 = true
const runBoth = true

/// Part 1

const solve1 = (data: Puzzle) => {
  const head = _.map(data, (e) => _.head(e))
  const tail = _.map(data, (e) => _.tail(e))
  const config = _.zipObject(head, tail)

  const flipFlopState = {}

  // Build initial conjunction state that remembers
  // a low signal from each connected module
  const conjunctionState: { [key: string]: { [key: string]: number } } = {}
  const conMods = head.filter((h) => h?.startsWith("&"))

  for (const conMod of conMods) {
    // Find connected modules
    const adj: { [key: string]: number } = {}

    for (const [key, val] of _.entries(config)) {
      if (key == conMod) continue
      if (val.find((e) => conMod?.endsWith(e)) == undefined) continue
      adj[key.substring(1)] = 0
    }

    // Append config to conjunction module
    conjunctionState[conMod!] = adj
  }

  function pressButton() {
    let rollingOrder = 0
    const pulseCount = [0, 0]

    const stack = [{
      order: 0,
      pulse: 0,
      dest: "broadcaster",
      caller: "button",
    }]

    while (stack.length > 0) {
      // Sort stack to handle lowest orders first
      stack.sort((a, b) => b.order - a.order)
      const { order, pulse, dest, caller } = stack.pop()

      pulseCount[pulse] += 1
      // console.log(`${caller} -${pulse == 0 ? "low" : "high"}-> ${dest}`)

      if (dest == "broadcaster") {
        // Send same pulse to all of its destinations
        for (const destination of config[dest]) {
          stack.unshift({ order, pulse, dest: destination, caller: dest })
        }
      }

      // Handle flip-flop module on low pulse
      if (config["%" + dest] != undefined && pulse == 0) {
        const moduleOn = _.defaultTo(flipFlopState[dest], false)

        // Flip between on and off
        flipFlopState[dest] = !moduleOn

        for (const nDest of config["%" + dest]) {
          if (moduleOn) {
            // Turn off and send low pulse
            stack.push({
              order: ++rollingOrder,
              pulse: 0,
              dest: nDest,
              caller: dest,
            })
          } else {
            // Turn on and send high pulse
            stack.push({
              order: ++rollingOrder,
              pulse: 1,
              dest: nDest,
              caller: dest,
            })
          }
        }
      }

      // Handle conjunction module
      if (config["&" + dest]) {
        conjunctionState["&" + dest][caller] = pulse
        const allHighPulses = _.values(conjunctionState["&" + dest])
          .find((e) => e == 0) == undefined

        for (const nDest of config["&" + dest]) {
          stack.push({
            order: ++rollingOrder,
            pulse: allHighPulses ? 0 : 1,
            dest: nDest,
            caller: dest,
          })
        }
      }
    }

    return pulseCount
  }

  const res = _.times(1000).map((_) => pressButton())
  const lowPulses = _.sum(res.map((r) => r[0]))
  const highPulses = _.sum(res.map((r) => r[1]))

  return lowPulses * highPulses
}

const solve1Sample = runPart1 ? solve1(sample) : "skipped"
const solve1Data = runPart1 && runBoth ? solve1(task) : "skipped"

console.log("\nPart 1:")
console.log("Sample:\t", solve1Sample)
console.log("Task:\t", solve1Data)

/// Part 2

const solve2 = (data: Puzzle) => {
  const head = _.map(data, (e) => _.head(e))
  const tail = _.map(data, (e) => _.tail(e))
  const config = _.zipObject(head, tail)

  const flipFlopState = {}

  // Build initial conjunction state that remembers
  // a low signal from each connected module
  const conjunctionState: { [key: string]: { [key: string]: number } } = {}
  const conMods = head.filter((h) => h?.startsWith("&"))

  for (const conMod of conMods) {
    // Find connected modules
    const adj: { [key: string]: number } = {}

    for (const [key, val] of _.entries(config)) {
      if (key == conMod) continue
      if (val.find((e) => conMod?.endsWith(e)) == undefined) continue
      adj[key.substring(1)] = 0
    }

    // Append config to conjunction module
    conjunctionState[conMod!] = adj
  }

  // Find the module sending to rx
  const rxEmitter = _.entries(config)
    .find(([_k, v]) => _.isEqual(v, ["rx"]))[0]
    .substring(1)

  // Find all target modules sending to rxEmitter
  let targets = _.entries(config)
    .filter(([k, v]) => _.isEqual(v, [rxEmitter]))
    .map(([k]) => k.substring(1))

  const result = {}
  let presses = 0

  while (true) {
    let rollingOrder = 0
    presses += 1

    const stack = [{
      order: 0,
      pulse: 0,
      dest: "broadcaster",
      caller: "button",
    }]

    while (stack.length > 0) {
      // Sort stack to handle lowest orders first
      stack.sort((a, b) => b.order - a.order)
      const { order, pulse, dest, caller } = stack.pop()

      if (pulse == 1 && dest == rxEmitter) {
        if (result[caller] != undefined) throw "handle overwrite"
        result[caller] = presses

        if (_.values(result).length == targets.length) {
          return _.values(result).reduce((p, c) => lcm(p, c), 1)
        }
      }

      if (dest == "broadcaster") {
        // Send same pulse to all of its destinations
        for (const destination of config[dest]) {
          stack.unshift({ order, pulse, dest: destination, caller: dest })
        }
      }

      // Handle flip-flop module on low pulse
      if (config["%" + dest] != undefined && pulse == 0) {
        const moduleOn = _.defaultTo(flipFlopState[dest], false)

        // Flip between on and off
        flipFlopState[dest] = !moduleOn

        for (const nDest of config["%" + dest]) {
          if (moduleOn) {
            // Turn off and send low pulse
            stack.push({
              order: ++rollingOrder,
              pulse: 0,
              dest: nDest,
              caller: dest,
            })
          } else {
            // Turn on and send high pulse
            stack.push({
              order: ++rollingOrder,
              pulse: 1,
              dest: nDest,
              caller: dest,
            })
          }
        }
      }

      // Handle conjunction module
      if (config["&" + dest]) {
        conjunctionState["&" + dest][caller] = pulse
        const allHighPulses = _.values(conjunctionState["&" + dest])
          .find((e) => e == 0) == undefined

        for (const nDest of config["&" + dest]) {
          stack.push({
            order: ++rollingOrder,
            pulse: allHighPulses ? 0 : 1,
            dest: nDest,
            caller: dest,
          })
        }
      }
    }
  }
}

const solve2Data = runPart2 && runBoth ? solve2(task) : "skipped"

console.log("\nPart 2:")
console.log("Task:\t", solve2Data)
console.log()
