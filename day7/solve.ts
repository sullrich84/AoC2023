// @deno-types="npm:@types/lodash"
import _ from "npm:lodash"
import { data, Puzzle, sample } from "./data.ts"

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

const getType = (hand: string) => {
  const uniqCards = _.uniq(hand).length
  const [a, b, c, d, e] = hand.split("").sort()

  if (uniqCards == 1) {
    return types.five_of_a_kind
  }

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
    const type = getType(hand)
    const typeName = _.keys(types)[type]
    rankDeck[typeName].push({ hand, bid })
  })

  const byStrength = (
    { hand: a }: { hand: string },
    { hand: b }: { hand: string },
  ) => {
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
    
    switch(jokers) {
      case 5:
      case 0:
        typeName = typeKeys[getType(hand)]
        break

      case 4:
        break
    }

    if (jokers == 0 || jokers == 5) {
      type = getType(hand)
      typeName = _.keys(types)[type]
    } else {

      if (jokers == 4) {
        type = types.five_of_a_kind
        typeName = _.keys(types)[type]
      }

      if (jokers == 3) {
        if (uLen == 1) {
          type = types.five_of_a_kind
          typeName = _.keys(types)[type]
        }

        if (uLen == 2) {
          type = types.four_of_a_kind
          typeName = _.keys(types)[type]
        }
      }

      if (jokers == 2) {
        if (uLen == 1) {
          type = types.five_of_a_kind
          typeName = _.keys(types)[type]
        }

        if (uLen == 2) {
          type = types.four_of_a_kind
          typeName = _.keys(types)[type]
        }

        if (uLen == 3) {
          type = types.three_of_a_kind
          typeName = _.keys(types)[type]
        }
      }

      if (jokers == 1) {
        if (uLen == 4) {
          type = types.one_pair
          typeName = _.keys(types)[type]
        }

        if (uLen == 3) {
          type = types.three_of_a_kind
          typeName = _.keys(types)[type]
        }

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

        if (uLen == 1) {
          type = types.five_of_a_kind
          typeName = _.keys(types)[type]
        }
      }
    }

    rankDeck[typeName].push({ hand, bid })
  })

  const byStrength = ({ hand: a }, { hand: b }) => {
    if (a == b) return 0
    const aSplit: string[] = a.split("").map((c: string) => strength[c])
    const bSplit: string[] = b.split("").map((c) => strength[c])

    for (let i = 0; i < aSplit.length; i++) {
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

console.log("\nPart 2:")
console.log("Sample:\t", solve2Sample)
console.log("Task:\t", solve2Data)
console.log()
