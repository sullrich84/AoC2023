export type Puzzle = [
  {
    id: number
    rounds: [{
      red?: number
      blue?: number
      green?: number
    }]
  },
]

export const sample: Puzzle = [
  {
    id: 1,
    rounds: [{ "blue": 3, "red": 4 }, { "red": 1, "green": 2, "blue": 6 }, {
      "green": 2,
    }],
  },
  {
    id: 2,
    rounds: [{ "blue": 1, "green": 2 }, { "green": 3, "blue": 4, "red": 1 }, {
      "green": 1,
      "blue": 1,
    }],
  },
  {
    id: 3,
    rounds: [{ "green": 8, "blue": 6, "red": 20 }, {
      "blue": 5,
      "red": 4,
      "green": 13,
    }, { "green": 5, "red": 1 }],
  },
  {
    id: 4,
    rounds: [{ "green": 1, "red": 3, "blue": 6 }, { "green": 3, "red": 6 }, {
      "green": 3,
      "blue": 15,
      "red": 14,
    }],
  },
  {
    id: 5,
    rounds: [{ "red": 6, "blue": 1, "green": 3 }, {
      "blue": 2,
      "red": 1,
      "green": 2,
    }],
  },
]

export const data: Puzzle = [
  {
    id: 1,
    rounds: [
      { "blue": 7, "red": 5 },
      { "red": 10, "blue": 7 },
      { "blue": 5, "green": 4, "red": 15 },
      { "green": 4, "red": 6, "blue": 7 },
      { "green": 5, "blue": 8, "red": 4 },
      { "red": 5, "blue": 4, "green": 3 },
    ],
  },
  {
    id: 2,
    rounds: [
      { "green": 8, "red": 3 },
      { "blue": 7, "red": 6, "green": 8 },
      { "blue": 7, "green": 3, "red": 6 },
      { "green": 8, "blue": 6, "red": 11 },
      { "blue": 6, "green": 3, "red": 12 },
    ],
  },
  {
    id: 3,
    rounds: [
      { "blue": 6, "red": 3, "green": 7 },
      { "red": 3, "green": 3, "blue": 8 },
      { "blue": 8, "red": 11, "green": 4 },
      { "blue": 5, "red": 7, "green": 6 },
      { "blue": 9, "green": 7, "red": 1 },
    ],
  },
  {
    id: 4,
    rounds: [
      { "red": 3, "green": 4 },
      { "red": 5, "blue": 1 },
      { "green": 2 },
      {
        "green": 3,
        "blue": 1,
      },
      { "green": 2, "blue": 1, "red": 1 },
    ],
  },
  {
    id: 5,
    rounds: [{ "red": 17, "blue": 5, "green": 3 }, {
      "green": 8,
      "red": 9,
      "blue": 10,
    }, { "green": 2, "blue": 9, "red": 4 }],
  },
  {
    id: 6,
    rounds: [{ "blue": 5, "green": 6, "red": 3 }, {
      "green": 1,
      "blue": 8,
      "red": 12,
    }, { "blue": 2, "red": 13, "green": 6 }],
  },
  {
    id: 7,
    rounds: [
      { "green": 1, "blue": 1, "red": 6 },
      { "red": 1, "green": 8 },
      { "red": 3, "green": 8, "blue": 2 },
      { "green": 14, "blue": 4, "red": 4 },
      { "green": 4, "blue": 5 },
      { "green": 7, "blue": 2, "red": 1 },
    ],
  },
  {
    id: 8,
    rounds: [{ "blue": 6, "red": 9, "green": 3 }, { "red": 2, "blue": 6 }, {
      "green": 2,
      "red": 1,
      "blue": 2,
    }, { "green": 2, "blue": 9, "red": 6 }],
  },
  {
    id: 9,
    rounds: [{ "green": 5, "blue": 8, "red": 8 }, {
      "blue": 2,
      "green": 6,
      "red": 8,
    }, { "red": 6, "green": 9 }],
  },
  {
    id: 10,
    rounds: [{ "red": 2, "blue": 2, "green": 12 }, { "green": 8, "red": 3 }, {
      "blue": 5,
      "red": 11,
      "green": 6,
    }, { "red": 14, "green": 1 }],
  },
  {
    id: 11,
    rounds: [
      { "green": 2, "red": 1, "blue": 1 },
      { "blue": 4, "red": 7 },
      { "red": 7, "green": 7, "blue": 5 },
      { "blue": 2, "red": 3, "green": 6 },
      { "blue": 3, "red": 9, "green": 7 },
    ],
  },
  {
    id: 12,
    rounds: [
      { "green": 9, "red": 7, "blue": 7 },
      { "green": 6, "blue": 4, "red": 1 },
      { "blue": 3, "red": 5, "green": 7 },
      { "green": 9, "red": 10, "blue": 12 },
      { "green": 11, "red": 5 },
      { "blue": 9, "green": 12, "red": 3 },
    ],
  },
  {
    id: 13,
    rounds: [
      { "blue": 7, "red": 7, "green": 2 },
      { "blue": 5, "green": 5, "red": 7 },
      { "blue": 1, "red": 10 },
      { "red": 11, "blue": 2, "green": 1 },
      { "green": 1, "blue": 1, "red": 4 },
    ],
  },
  {
    id: 14,
    rounds: [{ "blue": 2, "red": 10 }, { "blue": 3, "green": 6, "red": 17 }, {
      "green": 3,
      "blue": 4,
      "red": 14,
    }],
  },
  {
    id: 15,
    rounds: [
      { "blue": 7, "green": 2, "red": 4 },
      { "blue": 7, "red": 3, "green": 3 },
      { "red": 4, "green": 2, "blue": 1 },
      { "red": 2, "green": 9, "blue": 5 },
      { "red": 2, "green": 4, "blue": 5 },
    ],
  },
  {
    id: 16,
    rounds: [
      { "blue": 5, "red": 1 },
      { "blue": 8, "green": 1 },
      { "green": 5, "blue": 3, "red": 2 },
      { "blue": 8, "green": 2 },
      { "red": 2, "blue": 2, "green": 5 },
    ],
  },
  {
    id: 17,
    rounds: [
      { "blue": 2, "red": 5 },
      { "red": 7, "blue": 1 },
      { "blue": 2, "green": 2, "red": 3 },
      { "blue": 3, "red": 2, "green": 1 },
      { "green": 5, "red": 7 },
      { "red": 6, "green": 3 },
    ],
  },
  {
    id: 18,
    rounds: [
      { "blue": 4, "red": 1, "green": 14 },
      { "red": 8, "blue": 4, "green": 14 },
      { "red": 6, "blue": 11, "green": 10 },
      { "blue": 5, "green": 2, "red": 3 },
      { "green": 16, "blue": 10, "red": 2 },
      { "red": 6, "blue": 4, "green": 12 },
    ],
  },
  {
    id: 19,
    rounds: [
      { "green": 10, "red": 12, "blue": 12 },
      { "blue": 5, "red": 12, "green": 7 },
      { "red": 15, "blue": 8, "green": 6 },
      { "green": 13, "red": 1, "blue": 10 },
      { "blue": 4, "red": 8, "green": 9 },
      { "red": 16, "green": 7, "blue": 3 },
    ],
  },
  {
    id: 20,
    rounds: [
      { "blue": 10, "green": 9 },
      { "blue": 9, "red": 1, "green": 3 },
      { "blue": 11 },
      { "blue": 6 },
      { "blue": 8, "green": 10 },
    ],
  },
  {
    id: 21,
    rounds: [{ "blue": 4, "red": 4 }, { "green": 1, "red": 3, "blue": 3 }, {
      "blue": 4,
      "green": 1,
      "red": 2,
    }],
  },
  {
    id: 22,
    rounds: [{ "blue": 5, "green": 4, "red": 1 }, {
      "green": 14,
      "blue": 4,
      "red": 1,
    }, { "blue": 4, "red": 4, "green": 13 }],
  },
  {
    id: 23,
    rounds: [{ "red": 6, "green": 8 }, { "green": 4, "blue": 1, "red": 7 }, {
      "green": 10,
      "red": 5,
    }, { "red": 2, "green": 9 }],
  },
  {
    id: 24,
    rounds: [{ "blue": 1, "green": 10 }, { "green": 12, "blue": 5 }, {
      "red": 1,
      "green": 3,
    }, { "red": 2, "blue": 4 }],
  },
  {
    id: 25,
    rounds: [{ "blue": 2, "red": 3, "green": 13 }, {
      "blue": 7,
      "green": 15,
      "red": 1,
    }, { "blue": 7, "green": 2 }],
  },
  {
    id: 26,
    rounds: [
      { "red": 20, "blue": 5, "green": 4 },
      { "green": 1, "blue": 8, "red": 11 },
      { "blue": 7, "red": 6, "green": 2 },
      { "green": 4, "blue": 7, "red": 4 },
      { "red": 5, "blue": 8 },
    ],
  },
  {
    id: 27,
    rounds: [{ "red": 3, "green": 3, "blue": 1 }, {
      "red": 3,
      "blue": 1,
      "green": 8,
    }, { "blue": 3, "red": 4 }],
  },
  {
    id: 28,
    rounds: [{ "blue": 1, "red": 15, "green": 2 }, { "red": 15 }, {
      "red": 3,
      "green": 2,
    }, { "red": 3, "green": 1 }],
  },
  {
    id: 29,
    rounds: [{ "blue": 4, "green": 7, "red": 1 }, { "green": 5, "red": 9 }, {
      "green": 8,
      "red": 1,
      "blue": 10,
    }, { "blue": 2, "green": 1 }],
  },
  {
    id: 30,
    rounds: [
      { "blue": 9, "red": 5, "green": 6 },
      { "red": 15, "blue": 6, "green": 3 },
      { "red": 13, "blue": 2, "green": 4 },
      { "green": 2, "blue": 3 },
      { "red": 13, "blue": 8 },
      { "green": 5, "blue": 6, "red": 17 },
    ],
  },
  {
    id: 31,
    rounds: [
      { "green": 1, "blue": 9, "red": 9 },
      { "green": 4, "red": 8, "blue": 1 },
      { "blue": 10, "green": 2 },
      { "red": 1, "blue": 1 },
      { "red": 1, "blue": 1 },
      { "blue": 6, "red": 9, "green": 5 },
    ],
  },
  {
    id: 32,
    rounds: [
      { "red": 7, "green": 7, "blue": 3 },
      { "green": 14, "red": 11, "blue": 11 },
      { "green": 10, "red": 7, "blue": 2 },
      { "green": 1, "blue": 4, "red": 4 },
      { "blue": 9, "green": 10, "red": 5 },
    ],
  },
  {
    id: 33,
    rounds: [
      { "red": 12, "green": 4, "blue": 11 },
      { "blue": 4, "red": 10, "green": 1 },
      { "green": 7, "red": 10, "blue": 16 },
      { "red": 15, "blue": 5 },
      { "green": 10, "red": 4 },
      { "green": 8, "blue": 5, "red": 6 },
    ],
  },
  {
    id: 34,
    rounds: [
      { "blue": 8, "red": 1, "green": 2 },
      { "green": 3, "blue": 3, "red": 4 },
      { "red": 6, "green": 3 },
      { "red": 6 },
      { "blue": 9, "red": 4, "green": 3 },
    ],
  },
  {
    id: 35,
    rounds: [
      { "green": 6, "blue": 6, "red": 1 },
      { "green": 3, "blue": 3 },
      { "red": 1, "blue": 5, "green": 2 },
      { "red": 1, "green": 13, "blue": 1 },
      { "green": 3, "red": 1, "blue": 10 },
      { "green": 5, "blue": 4 },
    ],
  },
  {
    id: 36,
    rounds: [
      { "blue": 15, "red": 1 },
      { "red": 2, "green": 3, "blue": 17 },
      { "blue": 6, "red": 7, "green": 8 },
      { "red": 12, "green": 7, "blue": 14 },
      { "blue": 4, "red": 2 },
      { "green": 8, "blue": 12, "red": 10 },
    ],
  },
  {
    id: 37,
    rounds: [{ "green": 2, "blue": 2 }, { "red": 6, "blue": 3, "green": 1 }, {
      "green": 2,
      "blue": 3,
      "red": 1,
    }],
  },
  {
    id: 38,
    rounds: [
      { "blue": 2, "red": 7, "green": 9 },
      { "red": 3, "green": 18, "blue": 6 },
      { "red": 6, "green": 19, "blue": 2 },
      { "blue": 2, "green": 13, "red": 7 },
    ],
  },
  {
    id: 39,
    rounds: [{ "blue": 12, "green": 7, "red": 3 }, { "green": 16, "blue": 6 }, {
      "red": 1,
      "green": 4,
      "blue": 2,
    }, { "blue": 15, "red": 2, "green": 2 }],
  },
  {
    id: 40,
    rounds: [{ "blue": 18, "red": 1 }, { "green": 4, "blue": 15 }, {
      "green": 5,
      "blue": 17,
      "red": 3,
    }, { "red": 4, "blue": 16, "green": 2 }],
  },
  {
    id: 41,
    rounds: [{ "blue": 3, "green": 14 }, { "green": 11, "blue": 8 }, {
      "blue": 14,
      "red": 4,
      "green": 1,
    }, { "blue": 5, "red": 2, "green": 15 }],
  },
  {
    id: 42,
    rounds: [{ "red": 7, "green": 9 }, { "red": 10, "green": 19, "blue": 10 }, {
      "blue": 16,
      "green": 8,
      "red": 7,
    }, { "blue": 6, "green": 11, "red": 7 }],
  },
  {
    id: 43,
    rounds: [{ "blue": 1, "red": 5 }, { "red": 8, "green": 2, "blue": 1 }, {
      "red": 4,
      "green": 3,
    }, { "green": 2, "red": 1 }],
  },
  {
    id: 44,
    rounds: [{ "green": 5, "blue": 13, "red": 12 }, {
      "blue": 18,
      "green": 3,
      "red": 8,
    }, { "green": 2, "blue": 3, "red": 11 }],
  },
  {
    id: 45,
    rounds: [{ "blue": 3, "red": 1, "green": 4 }, { "blue": 2, "red": 1 }, {
      "blue": 1,
      "green": 4,
    }, { "red": 3, "green": 16 }],
  },
  {
    id: 46,
    rounds: [
      { "red": 10, "green": 1, "blue": 4 },
      { "green": 4, "blue": 14, "red": 2 },
      { "red": 12, "blue": 3, "green": 2 },
      { "green": 4, "red": 2, "blue": 2 },
      { "red": 2, "green": 1, "blue": 11 },
      { "green": 2, "blue": 19 },
    ],
  },
  {
    id: 47,
    rounds: [{ "blue": 10, "green": 10, "red": 3 }, {
      "red": 3,
      "blue": 11,
      "green": 9,
    }, { "blue": 4, "green": 10 }],
  },
  {
    id: 48,
    rounds: [
      { "green": 5, "blue": 1 },
      { "red": 4, "green": 8, "blue": 8 },
      { "red": 17, "blue": 5, "green": 2 },
      { "green": 12, "red": 18, "blue": 7 },
      { "green": 15, "red": 14, "blue": 8 },
      { "green": 11, "blue": 1, "red": 16 },
    ],
  },
  {
    id: 49,
    rounds: [
      { "red": 2, "green": 4, "blue": 1 },
      { "green": 1, "blue": 5, "red": 2 },
      { "green": 8, "blue": 3, "red": 1 },
      { "blue": 4, "red": 3, "green": 9 },
    ],
  },
  {
    id: 50,
    rounds: [
      { "blue": 2 },
      { "green": 7, "red": 5 },
      { "red": 3, "blue": 3 },
      { "green": 5, "blue": 1, "red": 2 },
      { "blue": 5, "green": 3 },
      { "green": 4, "blue": 3, "red": 1 },
    ],
  },
  {
    id: 51,
    rounds: [
      { "green": 6, "blue": 13, "red": 3 },
      { "blue": 7, "green": 7, "red": 1 },
      { "green": 15, "red": 2, "blue": 13 },
      { "red": 1, "blue": 7, "green": 3 },
      { "blue": 11, "green": 16, "red": 1 },
    ],
  },
  {
    id: 52,
    rounds: [
      { "blue": 5, "green": 2, "red": 14 },
      { "blue": 4, "red": 3 },
      { "green": 10, "red": 7 },
      { "blue": 1, "green": 10, "red": 10 },
      { "blue": 9, "green": 5, "red": 12 },
    ],
  },
  {
    id: 53,
    rounds: [
      { "green": 1, "red": 2, "blue": 1 },
      { "green": 4 },
      { "green": 1 },
      { "green": 2 },
      { "green": 2, "red": 1 },
    ],
  },
  {
    id: 54,
    rounds: [
      { "green": 3, "blue": 11 },
      { "blue": 12 },
      { "red": 1, "blue": 3 },
      { "blue": 7, "red": 1 },
    ],
  },
  {
    id: 55,
    rounds: [
      { "green": 7, "red": 7 },
      { "blue": 1, "green": 7, "red": 14 },
      { "red": 17, "blue": 2, "green": 5 },
      { "blue": 1, "red": 7 },
      { "blue": 2, "green": 3, "red": 14 },
    ],
  },
  {
    id: 56,
    rounds: [
      { "blue": 3, "red": 2, "green": 1 },
      { "red": 1, "blue": 4, "green": 2 },
      { "green": 5, "red": 1, "blue": 2 },
      { "blue": 7 },
    ],
  },
  {
    id: 57,
    rounds: [{ "blue": 1, "red": 14, "green": 7 }, { "red": 2, "green": 1 }, {
      "blue": 1,
      "red": 6,
      "green": 6,
    }],
  },
  {
    id: 58,
    rounds: [{ "red": 11, "green": 2 }, { "green": 3, "red": 8, "blue": 8 }, {
      "red": 10,
      "green": 1,
      "blue": 13,
    }],
  },
  {
    id: 59,
    rounds: [
      { "green": 11, "blue": 5, "red": 11 },
      { "red": 13, "blue": 6, "green": 11 },
      { "red": 6, "blue": 7, "green": 12 },
      { "blue": 9, "red": 9, "green": 1 },
    ],
  },
  {
    id: 60,
    rounds: [
      { "red": 3, "blue": 8, "green": 4 },
      { "blue": 5, "red": 2, "green": 3 },
      { "green": 7, "red": 3 },
      { "blue": 8, "red": 2, "green": 7 },
    ],
  },
  {
    id: 61,
    rounds: [
      { "red": 17, "blue": 12, "green": 9 },
      { "green": 20, "red": 5, "blue": 14 },
      { "blue": 9, "green": 11, "red": 15 },
      { "green": 14, "blue": 6, "red": 14 },
      { "green": 16, "red": 7, "blue": 4 },
    ],
  },
  {
    id: 62,
    rounds: [{ "red": 3, "blue": 11, "green": 16 }, {
      "green": 1,
      "red": 6,
      "blue": 6,
    }, { "green": 7, "red": 6, "blue": 9 }],
  },
  {
    id: 63,
    rounds: [{ "blue": 3, "red": 20, "green": 1 }, { "red": 11, "green": 5 }, {
      "red": 13,
      "green": 2,
    }, { "red": 15, "blue": 1, "green": 6 }],
  },
  {
    id: 64,
    rounds: [{ "blue": 8, "red": 1, "green": 11 }, {
      "red": 1,
      "blue": 11,
      "green": 4,
    }, { "red": 5, "green": 7, "blue": 1 }],
  },
  {
    id: 65,
    rounds: [
      { "blue": 3, "green": 13, "red": 2 },
      { "blue": 2, "red": 3 },
      { "green": 10, "blue": 8, "red": 2 },
      { "red": 2, "blue": 6, "green": 8 },
      { "blue": 10, "green": 12 },
    ],
  },
  {
    id: 66,
    rounds: [{ "blue": 4, "red": 3, "green": 8 }, { "red": 1, "green": 9 }, {
      "blue": 7,
      "red": 6,
      "green": 6,
    }, { "blue": 1, "red": 1, "green": 11 }],
  },
  {
    id: 67,
    rounds: [
      { "blue": 10, "green": 15 },
      { "red": 3, "blue": 2, "green": 1 },
      { "blue": 4, "green": 12, "red": 2 },
      { "green": 8, "blue": 11, "red": 8 },
      { "blue": 9, "green": 5, "red": 6 },
      { "green": 10, "red": 4, "blue": 14 },
    ],
  },
  {
    id: 68,
    rounds: [
      { "green": 4, "blue": 3, "red": 4 },
      { "green": 9, "blue": 2 },
      { "blue": 6, "red": 6, "green": 10 },
      { "blue": 5, "green": 4, "red": 5 },
      { "blue": 3, "green": 10 },
      { "blue": 5, "red": 5 },
    ],
  },
  {
    id: 69,
    rounds: [
      { "blue": 6, "red": 1, "green": 1 },
      { "red": 4, "green": 3, "blue": 2 },
      { "green": 5, "red": 3, "blue": 5 },
      { "red": 5, "blue": 5 },
    ],
  },
  {
    id: 70,
    rounds: [{ "green": 2, "red": 1 }, { "green": 12, "red": 1, "blue": 11 }, {
      "green": 7,
      "blue": 12,
    }, { "blue": 13, "green": 10 }],
  },
  {
    id: 71,
    rounds: [{ "red": 9, "green": 9, "blue": 4 }, {
      "red": 10,
      "blue": 1,
      "green": 12,
    }, { "blue": 3, "red": 13, "green": 3 }],
  },
  {
    id: 72,
    rounds: [
      { "red": 2, "blue": 8, "green": 5 },
      { "green": 2 },
      { "red": 1, "green": 5, "blue": 6 },
      { "blue": 1, "red": 3, "green": 12 },
      { "green": 5, "blue": 14, "red": 1 },
      { "blue": 8, "green": 13 },
    ],
  },
  {
    id: 73,
    rounds: [{ "blue": 19, "red": 11, "green": 8 }, {
      "blue": 18,
      "red": 9,
      "green": 11,
    }, { "green": 6, "blue": 19, "red": 6 }],
  },
  {
    id: 74,
    rounds: [
      { "green": 2, "red": 4, "blue": 2 },
      { "green": 1, "red": 1, "blue": 4 },
      { "red": 2, "green": 4, "blue": 2 },
      { "red": 3, "blue": 2, "green": 6 },
    ],
  },
  {
    id: 75,
    rounds: [
      { "blue": 2 },
      { "red": 1, "blue": 1, "green": 1 },
      { "blue": 1 },
      {
        "blue": 5,
        "green": 2,
      },
      { "green": 1, "red": 1, "blue": 3 },
    ],
  },
  {
    id: 76,
    rounds: [
      { "blue": 9, "red": 4, "green": 3 },
      { "blue": 8, "green": 8, "red": 3 },
      { "red": 3, "green": 2, "blue": 8 },
      { "green": 8, "blue": 6, "red": 5 },
    ],
  },
  {
    id: 77,
    rounds: [{ "blue": 7, "green": 17 }, { "blue": 1, "red": 2, "green": 18 }, {
      "green": 18,
      "blue": 1,
      "red": 2,
    }],
  },
  {
    id: 78,
    rounds: [{ "red": 2, "green": 2, "blue": 1 }, { "green": 5, "blue": 3 }, {
      "green": 1,
      "blue": 2,
    }, { "blue": 2, "red": 6, "green": 5 }],
  },
  {
    id: 79,
    rounds: [
      { "red": 4, "green": 6, "blue": 17 },
      { "blue": 2, "red": 3, "green": 8 },
      { "red": 8, "blue": 19, "green": 12 },
      { "red": 5, "green": 8, "blue": 12 },
      { "blue": 16, "red": 1, "green": 12 },
      { "green": 5, "blue": 18, "red": 8 },
    ],
  },
  {
    id: 80,
    rounds: [{ "blue": 1, "red": 4, "green": 10 }, { "green": 6 }, {
      "red": 6,
      "green": 3,
      "blue": 2,
    }],
  },
  {
    id: 81,
    rounds: [{ "green": 2, "blue": 5, "red": 4 }, {
      "red": 3,
      "green": 1,
      "blue": 14,
    }, { "red": 3, "blue": 10, "green": 2 }],
  },
  {
    id: 82,
    rounds: [
      { "red": 12, "blue": 5, "green": 2 },
      { "blue": 12, "red": 6, "green": 5 },
      { "blue": 13, "green": 1, "red": 3 },
      { "red": 11, "blue": 3 },
      { "red": 4, "green": 3 },
    ],
  },
  {
    id: 83,
    rounds: [
      { "blue": 10, "red": 16, "green": 4 },
      { "red": 6, "blue": 2, "green": 14 },
      { "blue": 9, "green": 14 },
      { "blue": 7, "red": 1 },
      { "green": 4, "red": 2, "blue": 8 },
      { "red": 5, "green": 7 },
    ],
  },
  {
    id: 84,
    rounds: [
      { "red": 3, "blue": 3, "green": 6 },
      { "red": 9, "green": 17, "blue": 16 },
      { "blue": 13, "red": 7 },
      { "green": 14, "red": 2, "blue": 14 },
    ],
  },
  {
    id: 85,
    rounds: [{ "blue": 7 }, { "red": 8, "blue": 10, "green": 1 }, {
      "blue": 6,
      "red": 9,
    }],
  },
  {
    id: 86,
    rounds: [
      { "red": 9, "green": 6, "blue": 9 },
      { "blue": 1, "red": 5 },
      { "red": 11, "green": 1, "blue": 11 },
      { "green": 3, "blue": 8 },
      { "red": 8, "green": 5, "blue": 4 },
      { "blue": 15, "green": 4, "red": 2 },
    ],
  },
  {
    id: 87,
    rounds: [{ "red": 2, "green": 2 }, { "red": 5, "blue": 2 }, { "red": 6 }],
  },
  {
    id: 88,
    rounds: [
      { "green": 2, "red": 5 },
      { "blue": 9, "red": 7, "green": 3 },
      { "blue": 1, "green": 2, "red": 3 },
      { "green": 3, "blue": 6, "red": 1 },
      { "red": 1, "green": 3, "blue": 6 },
    ],
  },
  {
    id: 89,
    rounds: [{ "blue": 10, "red": 13 }, { "red": 15, "blue": 6, "green": 2 }, {
      "green": 2,
      "red": 10,
      "blue": 18,
    }, { "green": 1, "red": 18, "blue": 8 }],
  },
  {
    id: 90,
    rounds: [{ "red": 2, "blue": 2, "green": 9 }, { "red": 1, "green": 9 }, {
      "green": 7,
      "blue": 3,
      "red": 2,
    }, { "blue": 4, "red": 2, "green": 4 }],
  },
  {
    id: 91,
    rounds: [
      { "green": 6, "red": 4, "blue": 9 },
      { "green": 4, "red": 4, "blue": 17 },
      { "blue": 6, "red": 2, "green": 4 },
      { "green": 7, "red": 2, "blue": 13 },
      { "green": 1, "blue": 13, "red": 1 },
    ],
  },
  {
    id: 92,
    rounds: [
      { "green": 4, "blue": 1, "red": 8 },
      { "green": 7, "red": 6 },
      { "red": 13 },
      { "green": 9 },
      { "red": 6, "blue": 1, "green": 4 },
      { "red": 2, "blue": 1, "green": 15 },
    ],
  },
  {
    id: 93,
    rounds: [
      { "green": 8, "red": 8, "blue": 13 },
      { "red": 4, "green": 10 },
      { "blue": 15, "red": 11 },
      { "green": 14, "red": 5, "blue": 6 },
      { "red": 12, "blue": 3, "green": 13 },
      { "red": 9, "green": 10, "blue": 6 },
    ],
  },
  {
    id: 94,
    rounds: [
      { "red": 14, "green": 10 },
      { "red": 15 },
      { "red": 4 },
      { "green": 4, "red": 7, "blue": 1 },
      { "red": 6, "green": 5 },
      { "red": 1, "green": 2 },
    ],
  },
  {
    id: 95,
    rounds: [{ "blue": 1, "red": 11 }, { "red": 15, "blue": 1, "green": 3 }, {
      "red": 13,
      "blue": 2,
      "green": 3,
    }, { "green": 1, "blue": 1 }],
  },
  {
    id: 96,
    rounds: [
      { "red": 4, "blue": 4, "green": 4 },
      { "blue": 5, "green": 5, "red": 4 },
      { "red": 2, "blue": 8 },
      { "red": 16, "green": 5, "blue": 13 },
    ],
  },
  {
    id: 97,
    rounds: [
      { "red": 6, "green": 13, "blue": 3 },
      { "green": 10, "blue": 4 },
      { "red": 3, "green": 12, "blue": 4 },
      { "red": 3, "blue": 5, "green": 16 },
      { "red": 3, "green": 9, "blue": 1 },
    ],
  },
  {
    id: 98,
    rounds: [
      { "red": 8, "green": 12, "blue": 2 },
      { "green": 7, "red": 8, "blue": 1 },
      { "blue": 2, "red": 6, "green": 3 },
      { "red": 9, "blue": 1, "green": 4 },
    ],
  },
  {
    id: 99,
    rounds: [{ "blue": 6, "red": 11, "green": 7 }, {
      "red": 9,
      "green": 6,
      "blue": 1,
    }, { "red": 9, "blue": 2 }],
  },
  {
    id: 100,
    rounds: [
      { "red": 1, "blue": 4, "green": 2 },
      { "red": 6, "green": 2, "blue": 11 },
      { "red": 1, "blue": 1, "green": 2 },
      { "red": 1, "blue": 7 },
    ],
  },
]
