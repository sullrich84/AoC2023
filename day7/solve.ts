// @deno-types="npm:@types/lodash"
import _ from "npm:lodash"
import { Counter } from "../utils/counter.ts"
import { data, Puzzle, sample } from "./data.ts"

console.clear()
console.log("🎄 Day 7: YYY")

const runPart1 = false
const runPart2 = true
const runBoth = false

/// Part 1

const types = {
  five_of_a_kind: 0,
  four_of_a_kind: 1,
  full_house: 2,
  three_of_a_kind: 3,
  two_pair: 4,
  one_pair: 5,
  high_card: 6,
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

  const getType = (hand: string) => {
    const uniqCards = _.uniq(hand).length
    if (uniqCards == 1) {
      return types.five_of_a_kind
    }

    const [a, b, c, d, e] = hand.split("").sort()
    const jokers = [a, b, c, d, e].filter((c) => c == "J").length

    console.log({ hand, jokers })

    if (uniqCards == 2) {
      // AAAA_ || _AAAA
      if ((a == b && b == c && c == d) || (b == c && c == d && d == e)) {
        // AAAAJ || JAAAA
        if (jokers > 0) {
          if (jokes != 1) throw "mismatch 1"
          return types.five_of_a_kind
        }

        return types.four_of_a_kind
      }

      // JJAAA || AAAJJ

      if (jokers > 0) {
        if (jokers != 2) throw "mismatch 2"
        return types.five_of_a_kind
      }

      // __AAA || AAA__
      return types.full_house
    }

    if (uniqCards == 3) {
      // AAA__ || __AAA || _AAA_
      if ((a == b && b == c) || (b == c && c == d) || (c == d && d == e)) {
        // J_AAA || _JAAA || AAAJ_ || AAA_J
        if (jokers > 0) {
          if (jokers != 1) throw "mismatch 1"
          return types.four_of_a_kind
        }

        return types.three_of_a_kind
      }

      // AA_JJ || AAJJ_ || JJ_AA || JJAA_
      if (jokers > 0) {
        if (jokers == 3) {
          return types.five_of_a_kind
        } 

        // 2 PAIR + JOKER

        if (jokers == 2) {
          return types.four_of_a_kind
        }

        if (jokers != 1) throw "mismatch 1"
        return types.
      }

      //_AA22 || AA_22 || AA22_
      return types.two_pair
    }

    // AA___ || _AA__ || __AA_ || ___AA
    if (uniqCards == 4) {
      // J__AA || _J_AA ...
      if ((a == "J" || b == "J" || c == "J" || d == "J" || e == "J")) {
        return types.three_of_a_kind
      }

      return types.one_pair
    }

    if ((a == "J") || (b == "J") || (c == "J") || (d == "J") || (e == "J")) {
      return types.one_pair
    }

    return types.high_card
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

const solve2Sample = runPart2 ? solve2(sample) : "skipped"
const solve2Data = runPart2 && runBoth ? solve2(data) : "skipped"

// < 250580801

console.log("\nPart 2:")
console.log("Sample:\t", solve2Sample)
console.log("Task:\t", solve2Data)
console.log()
