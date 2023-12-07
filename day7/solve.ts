// @deno-types="npm:@types/lodash"
import _, { lowerCase } from "npm:lodash"
import { Counter } from "../utils/counter.ts"
import { data, Puzzle, sample } from "./data.ts"
import { wait } from "../utils/utils.ts"

console.clear()
console.log("🎄 Day 7: YYY")

const runPart1 = false
const runPart2 = true
const runBoth = true

/// Part 1
type Kind =
  | "high_card"
  | "one_pair"
  | "two_pair"
  | "three_of_a_kind"
  | "full_house"
  | "four_of_a_kind"
  | "five_of_a_kind"

const types = {
  five_of_a_kind: 0,
  four_of_a_kind: 1,
  full_house: 2,
  three_of_a_kind: 3,
  two_pair: 4,
  one_pair: 5,
  high_card: 6,
}

const getType = (hand: string) => {
  const uniqCards = _.uniq(hand).length
  if (uniqCards == 1) {
    return types.five_of_a_kind
  }

  const [a, b, c, d, e] = hand.split("").sort()

  if (uniqCards == 2) {
    return (a == b && b == c && c == d) || (b == c && c == d && d == e)
      ? types.four_of_a_kind
      : types.full_house
  }

  if (uniqCards == 3) {
    return (a == b && b == c) || (b == c && c == d) || (c == d && d == e)
      ? types.three_of_a_kind
      : types.two_pair
  }

  if (uniqCards == 4) {
    return types.one_pair
  }

  return types.high_card
}

const solve1 = (data: Puzzle) => {
  const strength = {
    "A": 0,
    "K": 1,
    "Q": 2,
    "J": 3,
    "T": 4,
    "9": 5,
    "8": 6,
    "7": 7,
    "6": 8,
    "5": 9,
    "4": 10,
    "3": 11,
    "2": 12,
  }

  let result = []

  const rankDeck = {
    high_card: [],
    one_pair: [],
    two_pair: [],
    three_of_a_kind: [],
    full_house: [],
    four_of_a_kind: [],
    five_of_a_kind: [],
  }

  data.forEach(({ hand, bid }) => {
    const type = getType(hand)
    const typeName = _.keys(types)[type]
    rankDeck[typeName].push({ hand, bid })
  })

  const byStrength = ({ hand: a }, { hand: b }) => {
    if (a == b) return 0
    const aSplit = a.split("").map((c) => strength[c])
    const bSplit = b.split("").map((c) => strength[c])

    for (var i = 0; i < aSplit.length; i++) {
      if (aSplit[i] !== bSplit[i]) {
        return bSplit[i] - aSplit[i]
      }
    }

    return 0
  }

  const keys = _.keys(rankDeck)
  for (let k = 0; k < keys.length; k++) {
    rankDeck[keys[k]].sort(byStrength)
    result.push(...rankDeck[keys[k]])
  }

  return result.map((c, i) => c.bid * (i + 1)).reduce((a, b) => a + b, 0)
}

const solve1Sample = runPart1 ? solve1(sample) : "skipped"
const solve1Data = runPart1 && runBoth ? solve1(data) : "skipped"

console.log("\nPart 1:")
console.log("Sample:\t", solve1Sample)
console.log("Task:\t", solve1Data)

/// Part 2

const solve2 = (data: Puzzle) => {
  const strength = {
    "A": 0,
    "K": 1,
    "Q": 2,
    "T": 3,
    "9": 4,
    "8": 5,
    "7": 6,
    "6": 7,
    "5": 8,
    "4": 9,
    "3": 10,
    "2": 11,
    "J": 12,
  }

  const result = []

  const rankDeck = {
    high_card: [],
    one_pair: [],
    two_pair: [],
    three_of_a_kind: [],
    full_house: [],
    four_of_a_kind: [],
    five_of_a_kind: [],
  }

  // data = []
  // // 5
  // data.push({ hand: "JJJJJ", bid: 1 })
  //
  // // 4
  // data.push({ hand: "JJJJ4", bid: 1 })
  //
  // // 3
  // data.push({ hand: "JJJ44", bid: 1 })
  // data.push({ hand: "JJJ42", bid: 1 })
  //
  // // 2
  // data.push({ hand: "JJ444", bid: 1 })
  // data.push({ hand: "JJ443", bid: 1 })
  // data.push({ hand: "JJ432", bid: 1 })
  //
  // // 1
  // data.push({ hand: "J5555", bid: 1 })
  // data.push({ hand: "J5552", bid: 1 })
  // data.push({ hand: "J5522", bid: 1 })
  // data.push({ hand: "J5523", bid: 1 })
  // data.push({ hand: "J5432", bid: 1 })

  // Two pair test
  // data.push({ hand: "J5422", bid: 1 })

  data.forEach(({ hand, bid }) => {
    let type, typeName

    const jokers = hand.split("").filter((c) => c == "J").length
    const cards = hand.split("").filter((c) => c != "J").sort()

    if (jokers == 0 || jokers == 5) {
      type = getType(hand)
      typeName = _.keys(types)[type]
    } else {
      const uLen = _.uniq(cards).length

      if (jokers == 4) {
        type = types.five_of_a_kind
        typeName = _.keys(types)[type]
      }

      if (jokers == 3) {
        // 3 Joker and 1 pair
        if (uLen == 1) {
          type = types.five_of_a_kind
          typeName = _.keys(types)[type]
        }

        // 3 Joker and 2 random
        if (uLen == 2) {
          type = types.four_of_a_kind
          typeName = _.keys(types)[type]
        }
      }

      if (jokers == 2) {
        // 2 Joker and 1 tripple
        if (uLen == 1) {
          type = types.five_of_a_kind
          typeName = _.keys(types)[type]
        }

        // 2 Joker 1 pair 1 random: Assign jokers to random for five_of_a_kind
        if (uLen == 2) {
          type = types.four_of_a_kind
          typeName = _.keys(types)[type]
        }

        // 2 Joker 3 random
        if (uLen == 3) {
          type = types.three_of_a_kind
          typeName = _.keys(types)[type]
        }
      }

      if (jokers == 1) {
        // 1 Joker 4 random
        if (uLen == 4) {
          type = types.one_pair
          typeName = _.keys(types)[type]
        }

        // 1 Joker 1 pair 2 random
        if (uLen == 3) {
          type = types.three_of_a_kind
          typeName = _.keys(types)[type]
        }

        // 1 Joker 2 pairs or 1 tripple and 1 random
        if (uLen == 2) {
          const t = cards.filter((c) => c == cards[0]).length
          
          if (t == 1 || t == 3) {
            type = types.four_of_a_kind
            typeName = _.keys(types)[type]
          }

          if (t == 2) {
            type = types.full_house
            typeName = _.keys(types)[type]
          }
        }

        // 1 Joker 1 quad
        if (uLen == 1) {
          type = types.five_of_a_kind
          typeName = _.keys(types)[type]
        }
      }
    }

    console.log({ jokers, hand, type, typeName })
    rankDeck[typeName].push({ hand, bid })
  })

  console.log(rankDeck);
  

  const byStrength = ({ hand: a }, { hand: b }) => {
    if (a == b) return 0
    const aSplit = a.split("").map((c) => strength[c])
    const bSplit = b.split("").map((c) => strength[c])

    for (var i = 0; i < aSplit.length; i++) {
      if (aSplit[i] !== bSplit[i]) {
        return bSplit[i] - aSplit[i]
      }
    }

    return 0
  }

  const keys = _.keys(rankDeck)
  for (let k = 0; k < keys.length; k++) {
    rankDeck[keys[k]].sort(byStrength)
    result.push(...rankDeck[keys[k]])
  }


  return result.map((c, i) => c.bid * (i + 1)).reduce((a, b) => a + b, 0)
}

const solve2Sample = runPart2 ? solve2(sample) : "skipped"
const solve2Data = runPart2 && runBoth ? solve2(data) : "skipped"

// < 250580801

console.log("\nPart 2:")
console.log("Sample:\t", solve2Sample)
console.log("Task:\t", solve2Data)
console.log()
