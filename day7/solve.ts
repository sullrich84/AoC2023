// @deno-types="npm:@types/lodash"
import _ from "npm:lodash"
import { data, Puzzle, sample } from "./data.ts"
import { data1 } from "../day6/data.ts"

console.clear()
console.log("🎄 Day 7: YYY")

const runPart1 = true
const runPart2 = true
const runBoth = true

const types = {
  five_of_a_kind: 0,
  four_of_a_kind: 1,
  full_house: 2,
  three_of_a_kind: 3,
  two_pair: 4,
  one_pair: 5,
  high_card: 6,
}

const typeKeys = _.keys(types)

const getType = (hand: string): number => {
  const uniqCards = _.uniq(hand).length
  const [a, b, c, d, e] = hand.split("").sort()

  switch (uniqCards) {
    case 1:
      return types.five_of_a_kind
    case 2:
      return (a == b && b == c && c == d) || (b == c && c == d && d == e)
        ? types.four_of_a_kind
        : types.full_house
    case 3:
      return (a == b && b == c) || (b == c && c == d) || (c == d && d == e)
        ? types.three_of_a_kind
        : types.two_pair
    case 4:
      return types.one_pair
  }

  return types.high_card
}

/// Part 1

const solve1 = (data: Puzzle) => {
  const result = []

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
    const typeName = typeKeys[getType(hand)]
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

  _.keys(rankDeck).forEach((key) => {
    rankDeck[key].sort(byStrength)
    result.push(...rankDeck[key])
  })

  return result.map((c, i) => c.bid * (i + 1)).reduce((a, b) => a + b, 0)
}

const solve1Sample = runPart1 ? solve1(sample) : "skipped"
const solve1Data = runPart1 && runBoth ? solve1(data) : "skipped"

console.log("\nPart 1:")
console.log("Sample:\t", solve1Sample)
console.log("Task:\t", solve1Data)

/// Part 2

const solve2 = (data: Puzzle) => {
  const result = []

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
    let type, typeName
    const jokers = hand.split("").filter((c) => c == "J").length
    const cards = hand.split("").filter((c) => c != "J").sort()
    const uLen = _.uniq(cards).length

    switch (jokers) {
      case 0:
      case 5:
        typeName = typeKeys[getType(hand)]
        break
      case 4:
        typeName = typeKeys[types.five_of_a_kind]
        break
      case 3:
        typeName = (uLen == 1)
          ? typeKeys[types.five_of_a_kind]
          : typeKeys[types.four_of_a_kind]
        break
      case 2:
        typeName = (uLen == 1)
          ? typeKeys[types.five_of_a_kind]
          : (uLen == 2)
          ? typeKeys[types.four_of_a_kind]
          : typeKeys[types.three_of_a_kind]
        break
      case 1:
        switch (uLen) {
          case 4:
            typeName = typeKeys[types.one_pair]
            break
          case 3:
            typeName = typeKeys[types.three_of_a_kind]
            break
          case 2:
            const t = cards.filter((c) => c == cards[0]).length
            typeName = (t == 1 || t == 3)
              ? typeKeys[types.four_of_a_kind]
              : typeKeys[types.full_house]
            break
          case 1:
            typeName = typeKeys[types.five_of_a_kind]
            break
        }
        break
    }

    rankDeck[typeName].push({ hand, bid })
  })

  const byStrength = ({ hand: a }, { hand: b }) => {
    if (a == b) return 0
    const aSplit = a.split("").map((c) => strength[c])
    const bSplit = b.split("").map((c) => strength[c])

    for (let i = 0; i < aSplit.length; i++) {
      if (aSplit[i] !== bSplit[i]) {
        return bSplit[i] - aSplit[i]
      }
    }

    return 0
  }

  _.keys(rankDeck).forEach((key) => {
    rankDeck[key].sort(byStrength)
    result.push(...rankDeck[key])
  })

  return result.map((c, i) => c.bid * (i + 1)).reduce((a, b) => a + b, 0)
}

const solve2Sample = runPart2 ? solve2(sample) : "skipped"
const solve2Data = runPart2 && runBoth ? solve2(data) : "skipped"

console.log("\nPart 2:")
console.log("Sample:\t", solve2Sample)
console.log("Task:\t", solve2Data)
console.log()
