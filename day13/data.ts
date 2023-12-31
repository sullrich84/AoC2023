export type Puzzle = string[][]

export const sample: Puzzle = [
 
  [
    "#.##..##.",
    "..#.##.#.",
    "##......#",
    "##......#",
    "..#.##.#.",
    "..##..##.",
    "#.#.##.#.",
  ],
  [
    "#...##..#",
    "#....#..#",
    "..##..###",
    "#####.##.",
    "#####.##.",
    "..##..###",
    "#....#..#",
  ],
]

export const task: Puzzle = [
  // 0
  [
    "#..#.#........#",
    "#..######..####",
    ".##..#.#.##.#.#",
    "#..##..........",
    "######........#",
    "#..####......##",
    ".##.##.#...##.#",
  ],
  // 1
  [
    "..######.",
    "..######.",
    "....#..##",
    "##.....##",
    "##..#...#",
    "..##.....",
    ".#..#.#..",
    ".#..###..",
    "..##.....",
  ],
  // 2
  [
    "###..#....#####..",
    ".#........#.#.###",
    ".#........#.#.###",
    "###..#....#####..",
    "#.#.#####....####",
    ".#.###..####.#..#",
    "#..#..#.####...#.",
    "#..#..#.####...#.",
    ".#.###..##.#.#..#",
  ],
  [
    "..###..######..",
    "...#####.##.###",
    "##....#..##..#.",
    "##.......##....",
    ".#.##..#....#..",
    "#########..####",
    "..###.##.##.##.",
    "..##.#.######.#",
    "#####.#.#..#.#.",
    "..##.##..##..##",
    "###.###########",
    "..#...###..###.",
    "..#.#.#.####.#.",
    "###.#.########.",
    "...#.##.#..#.##",
  ],
  [
    "..#.###",
    ".###..#",
    ".###..#",
    "..#.###",
    ".#..#..",
    ".##.#.#",
    "####.##",
    "#.##.##",
    "#.#..##",
    "####.##",
    ".##.#.#",
    ".#..#..",
    "..#.###",
  ],
  [
    "....#..#.#...",
    ".#.#..#..##..",
    ".#.#..#..##..",
    ".#..#..#.#...",
    "..####...##..",
    "..####.#.#.##",
    ".#..##..#.#..",
    "#..#..##..###",
    ".###.##.###.#",
    ".###.##.###.#",
    "#..#..##..###",
    ".#..##..#.#..",
    "..####.#.#.##",
  ],
  [
    ".##.#.##.",
    "..##.####",
    "..#######",
    "###......",
    "..##.####",
    "....##..#",
    "###.#....",
    ".....####",
    "###.#.##.",
    "....#.##.",
    "..#######",
    "...##.##.",
    "##..#####",
    "##..##..#",
    "..#...##.",
    "...###..#",
    "..###....",
  ],
  [
    "....#..#######..#",
    "......#.#.###.##.",
    ".##.#.#..#...#..#",
    "#########.##.....",
    "####..##.##..#..#",
    "######.#....##..#",
    "####..#...#...##.",
    ".##.##.....#.####",
    ".##.##..##.###..#",
    "#..####.##..##..#",
    ".##..###.#..##..#",
    "#..##...#####....",
    "#..####.#.#.#.##.",
    ".##..#..##..#####",
    "#..#.#...#.#..##.",
    "######..########.",
    "....###.##...#..#",
  ],
  [
    "...#..#........",
    ".#.#..#.#.##.#.",
    "..#....#..##..#",
    ".#..##..#....#.",
    "..######......#",
    "...#..#..#..#..",
    "...#..#........",
    "#...##...#..#..",
    ".##.##.##....##",
    "...#..#...##...",
    "#..####..####..",
    "..#.##.#......#",
    "..#.##.#......#",
    "###....###..###",
    "#........####..",
  ],
  [
    "...##..##.#.#",
    ".##.#####.###",
    "##.#....####.",
    "#.#....#.#..#",
    ".#..#.#...#.#",
    ".#..#.#...#.#",
    "#.#....#.#..#",
    "##.#....####.",
    ".########.###",
    "...##..##.#.#",
    "#.#.###.....#",
    "#.#.###.....#",
    "...##..##.#.#",
  ],
  [
    "....#.#.##.",
    "....#######",
    "######....#",
    "#..#....###",
    "#..#..#..#.",
    "####...##..",
    "#..#...#..#",
    "#..##..#..#",
    "####...##..",
    "#..#..#..#.",
    "#..#....###",
  ],
  [
    ".#..##..##..#..#.",
    "..#...##...#.....",
    "##...####...#####",
    "#.##......##.#..#",
    "#.##......##.#..#",
    "##...####...#####",
    "..#...##...#.....",
    ".#..##..##..#..#.",
    ".#..#.##.#..#.#..",
    ".##...##...##.#.#",
    ".#...#..#...#.#..",
    "#.#........#.#...",
    ".#...####.#.#.#.#",
    "#.##.####.##.##..",
    "#............##.#",
    "##...####...##...",
    "#............####",
  ],
  [
    "#..#.#..#",
    "####.....",
    ".##.##..#",
    ".##.#.##.",
    "#####.##.",
    ".##.#.###",
    "#..#.#..#",
  ],
  [
    "###..##.####..###",
    "###..##.####..###",
    "##..###.#.#...###",
    "#.#.#..##..####.#",
    "#.#..#...#..###..",
    "..#....####.#.###",
    "#..#...##.###.#..",
    ".###......####.##",
    "#..#.#...########",
  ],
  [
    "#.##.#..#...#..",
    ".#...#.....#...",
    "#.#..#.#.##.###",
    ".#####.#.#..#.#",
    ".#####.#.#..#.#",
    "#.#..#.#.##.###",
    ".#...#.#...#...",
    "#.##.#..#...#..",
    "#.#.#.###.####.",
    "#..###....###..",
    "#..###....###..",
  ],
  [
    "#...##......##.",
    "..###..#..#..##",
    "###.#.##..##.#.",
    ".##.####..####.",
    "..###..#..#..##",
    "...#...####...#",
    "###....#..#....",
    "###....#..#....",
    "...#...####...#",
    "..###..#..#..##",
    ".##.####..####.",
    "###.#.##..##.#.",
    "..###..#..#..##",
    "#...##......##.",
    ".##.####..####.",
    "....##.####.##.",
    ".#...##.##..#..",
  ],
  [
    ".....#.##",
    "...###.#.",
    "...###.#.",
    ".....#.#.",
    "..#.#####",
    "..##..##.",
    "...#...#.",
    "..##.#.##",
    "####.....",
    ".....##.#",
    "##.##.###",
    "####.#...",
    "##...##.#",
  ],
  [
    "..#..#....#..##..",
    "#.#.#.#####..####",
    "..#....#..#..#..#",
    ".##.#############",
    "##.###.#..#..#..#",
    "...#.##.##.##.##.",
    ".#.#..##.#.##.#.#",
    "..#..#..########.",
    "##.####.##....##.",
    "#####.#..#.##.#..",
    "#.####..#.#..#.#.",
    "#.####..#.#..#.#.",
    "#####.#..#.##.#..",
  ],
  [
    "#.#....##",
    "#...#..#.",
    ".##..#..#",
    ".#.#..###",
    "##.#..###",
    ".##..#..#",
    "#...#..#.",
    "#.#....##",
    ".#.#....#",
    ".#.######",
    "##.#..#..",
    "##..#####",
    "...#.#...",
    "...##....",
    "...##....",
    "...#.#...",
    "##..#####",
  ],
  [
    "##..#####",
    ".#.##....",
    ".#.#..##.",
    ".....#..#",
    ".##.#####",
    ".########",
    ".....#..#",
    ".#.#..##.",
    ".#.##....",
    "##..#####",
    "..#.#.##.",
  ],
  [
    "#.#.##.#.##......",
    ".###..###...#.##.",
    ".#......#.###...#",
    ".#......#.###...#",
    ".###..###...#.##.",
    "#.#.##.#.##......",
    "#.#.##.#.#......#",
    ".###..###.###.#.#",
    "####..####.##.##.",
    "#.#.#..#.###.####",
    ".#.####.#...#.#..",
    ".##....##....#.#.",
    ".##.##.##.###.#..",
    ".#.#..#.#.#.#.#..",
    "#.#.##.#.#.#####.",
  ],
  [
    "..##.######",
    "##.#.#####.",
    "##.#.#####.",
    "..##.######",
    "..###..##..",
    "....###..##",
    ".#.#.......",
  ],
  [
    "####.#####..#####",
    "#......#......#..",
    "....#..#......#..",
    "....#..#......#..",
    "#......#......#..",
    "####.#####..#####",
    "...#.............",
    "...#####.#..#.###",
    ".###..###...####.",
    "#.##..#........#.",
    ".#.#.#..##..##..#",
    "..#.#..#.####.#..",
    "#.#..##..#..#..##",
  ],
  [
    "######.###...",
    "#..#.#.#.##..",
    "....#.##.....",
    "#..#..#.###..",
    "...#.#...####",
    ".....##.#####",
    ".##..#..##...",
    "#..#.#.######",
    "#######.#.###",
  ],
  [
    ".####..##",
    "#.#...#..",
    "...###.##",
    ".##..#.##",
    ".##.###..",
    ".######..",
    "...#..#..",
    "#.#..#.##",
    ".#####...",
    "####.#.##",
    ".###.####",
    ".###...#.",
    "..#....##",
    ".#.######",
    "##..##...",
    "##..##...",
    ".#.######",
  ],
  [
    ".##....##....##..",
    ".###...##...#####",
    "##.####..####.###",
    "..##.##..##.##...",
    "##..#.#..#.#..###",
    "....#..##..#.....",
    ".#..###..###..#..",
    "#.#...#..#...#.##",
    "...#.######.#....",
    "#.##........##.##",
    "#.#.#.####.#.#.##",
  ],
  [
    "#..##.#......##",
    "#..##.#......##",
    "..##.###.#...##",
    ".#........##.##",
    "..########.#...",
    "##.#.#..##.....",
    "#.#..#...#..###",
    "##...###.#.#.##",
    "#..#..#.##.#.##",
    "#..##.....#####",
    "##.#.#####.####",
    ".###..#..#..#..",
    "....##....###..",
    "###.#.###.####.",
    ".#...##.#..#...",
  ],
  [
    ".##.##.##....",
    "..#....#..###",
    ".#..##..#..##",
    "#..#..#..#...",
    "##......#####",
    ".#..##..#.#..",
    "###.#######..",
    "##########...",
    "###....####..",
    "..#.##.#..###",
    "#.######.###.",
    "..........#..",
    "..........#..",
    "#.######.###.",
    "..#.##.#..###",
  ],
  [
    ".##...##.####",
    "#.###.#.#....",
    "....#.#.##..#",
    "#########.##.",
    ".##..#.#..##.",
    "....##..##..#",
    "#..#.#..##..#",
    ".##.##...####",
    "#..#....#....",
  ],
  [
    "#..#..#..##.###",
    "#.###..##...###",
    "##.###....#.#..",
    "#.##..#.##.####",
    ".#..######.#.##",
    "#.##.##..#..#..",
    "##..###....#...",
    "##..###....#...",
    "#..#.##..#..#..",
    ".#..######.#.##",
    "#.##..#.##.####",
    "##.###....#.#..",
    "#.###..##...###",
    "#..#..#..##.###",
    "####..###.#....",
    "#.#.###....##..",
    "..###.###...###",
  ],
  [
    "####.###.####",
    "###..#.#####.",
    "#.###..####..",
    "#.##...####..",
    "###..#.#####.",
    "####.###.####",
    "..##.###..#..",
    "#....##.#.###",
    "#.##.#..##.##",
    "#.##.#..##.##",
    "#....##.#.###",
    "..##.###..#..",
    "####.###.####",
  ],
  [
    ".#.#....#",
    ".#.#....#",
    ".#.#####.",
    "###...#..",
    "...###.##",
    "....#.#.#",
    "....#.#.#",
    "...###.##",
    "##....#..",
    ".#.#####.",
    ".#.#....#",
  ],
  [
    "##.#####...",
    "#..#..##...",
    "###...#..##",
    "....#.###..",
    "#.#..#..###",
    "#.#..#..###",
    "....#.###..",
    "#.#...#..##",
    "#..#..##...",
    "##.#####...",
    "...##...###",
    ".#...##.###",
    "...#..#....",
  ],
  [
    "###...##..##...",
    "##..#.#.##.#.#.",
    "..##..######..#",
    "###.##.####.##.",
    "...#.###..#####",
    "##.###.#..#.###",
    "##.####....####",
    "...#.#..##..#.#",
    "..#...#....#...",
    "###.##########.",
    "##..##.####.##.",
    "###.#.#.##.#.#.",
    "#####..#..#..##",
  ],
  [
    "#.##.##.##.",
    "#.#.#..#.#.",
    "#.#.#..#.#.",
    "#.##.##.##.",
    "#.##.##.##.",
    "#####..####",
    ".#.#.##.#.#",
    "....##.#...",
    "##..####..#",
    ".##......##",
    ".#........#",
  ],
  [
    "####......##..#",
    "#####.###.##...",
    "....####...####",
    ".#......##.#...",
    "####.#.#..#.###",
    "##....#.#.#..#.",
    "#..#.###..#..##",
    "#..#.###..#..##",
    "##....#.#.#..#.",
    "####.#.#..#.###",
    ".#......##.#...",
    "....####...####",
    "#####.###.##...",
    "####......###.#",
    "##....####.#.#.",
    "...####.###....",
    "...####.###....",
  ],
  [
    "..##...##..##.#",
    "..##...##..##.#",
    "####..#.#..#...",
    "..##..####.#.#.",
    "..##.#...###..#",
    "##...###..#.###",
    "##..########..#",
    ".#.##.#...#..#.",
    "...##.#.#..##.#",
    "#########.##..#",
    "..#.##.#.##....",
    "..#####...##.#.",
    "##...##..#.#...",
  ],
  [
    "........#.#",
    "#.....###.#",
    "##....#####",
    "#..##..##..",
    "..#..#..###",
    ".#....#..#.",
    ".#....#..#.",
  ],
  [
    "..##.##",
    ".#.##..",
    "#.###..",
    "..#..##",
    "####.##",
    ".####..",
    "#.##...",
    "....###",
    "...#...",
    "##..###",
    "#...###",
  ],
  [
    "##.#....######..#",
    "..##.#.##....####",
    "##...#..#....#..#",
    "#.###..#####.#..#",
    "#####..###...####",
    "..#.######.###..#",
    "...#.#.####..#..#",
    "#...#..##.#......",
    "...#...#...######",
    "...#...#...######",
    "#...#..##.#......",
    "...#...####..#..#",
    "..#.######.###..#",
  ],
  [
    "####.##.#",
    ".#..#..#.",
    "#..#.##.#",
    ".##......",
    "#..##..##",
    "....#..#.",
    ".##.####.",
    "####.##.#",
    "....####.",
    ".##..##..",
    "....#..#.",
    "....####.",
    "####....#",
    "....####.",
    "....####.",
    "....####.",
    ".##.#..#.",
  ],
  [
    "#.######.###.##",
    "#..#..#..#....#",
    ".#......#.##...",
    ".#..##..#.####.",
    "#..####..#.##..",
    "##..##..######.",
    ".#.#..#.#.#####",
    ".#.#..#.#..##.#",
    ".#.#..#.#.###.#",
  ],
  [
    ".###.###.",
    "#.#.....#",
    "#.#.#.#..",
    ".##.##..#",
    "...#.#.##",
    "#..#.#.##",
    ".##.##..#",
    "#.#.#.#..",
    "#.#.....#",
    ".###.###.",
    "...##.##.",
    "..#####.#",
    "..#####.#",
  ],
  [
    "...#.####..#.####",
    "##........#.#.#.#",
    "..###...#.##.....",
    "..###...#.##.....",
    "##........#.#.#.#",
    "...#.####..#.####",
    "#..##.#...#######",
    "....#.##.....#..#",
    "###.##.#.#..##..#",
    "...####.#.#...#.#",
    "..#.#..####....#.",
    "....#.####...####",
    "###.#..#..#..#.##",
    ".....#######..#..",
    "....##......#.##.",
    "##.#####.....#..#",
    "###..##.##...###.",
  ],
  [
    "#..##.#####",
    "#..##.#####",
    ".##.#.##...",
    "#...##.###.",
    "#..##.###.#",
    "#######.#.#",
    "#.#..#####.",
    "#.#..#####.",
    "#######.#.#",
    "#...#.###.#",
    "#...##.###.",
  ],
  [
    "..#.####.##..##.#",
    ".#.##.#####..####",
    "#.#.###.#.####.#.",
    "###..###........#",
    "#...##..#......#.",
    "#..###.#.######.#",
    ".###...##########",
    "#.#.#.#.##.##.##.",
    "######...##..##..",
    "#.......#......#.",
    "#.###.#####..####",
    "###...##.#.##.#.#",
    "#.##..#####..####",
    "..###.#...####...",
    ".#.....##.#..#.##",
    "##....##.#.##.#.#",
    "#.....##.#.##.#.#",
  ],
  [
    "#..#.##....##",
    "#..#.##.....#",
    "######.###...",
    "##########.##",
    ".##..#.....#.",
    "#..#....##.##",
    "......##....#",
    "........#....",
    "....##.##.#..",
    ".......#.#..#",
    "......##..#..",
    ".##..#.######",
    ".....#.#.###.",
  ],
  [
    "...#.#..###",
    "...#.#..###",
    ".##....####",
    "###...#.###",
    "....#..#.#.",
    "....####...",
    "...#.#...##",
    "####.####.#",
    "....#.##.#.",
  ],
  [
    "..###..##..",
    ".#.########",
    ".###....###",
    "..#..#####.",
    "####...#.##",
    "####...#.##",
    "..#..#####.",
    ".###....###",
    ".#.########",
    "..###...#..",
    "##..#...#..",
    ".#.....#..#",
    "########..#",
    ".#.##.#....",
    ".#.##.#....",
    "########..#",
    ".#.....#..#",
  ],
  [
    "#..##..",
    "..#..#.",
    ".######",
    "..####.",
    "..####.",
    "##....#",
    ".#.##.#",
    ".#.##.#",
    "##....#",
    "..####.",
    "..####.",
    ".######",
    "#.#..#.",
    "#..##..",
    "#.#..#.",
  ],
  [
    ".##...##.##",
    "..##.##.###",
    "###...##...",
    "....#..##..",
    "....#..##..",
    "###...##...",
    "...#.##.###",
    ".##...##.##",
    "..#....#.##",
    ".###..##.##",
    ".##....###.",
    ".##....###.",
    ".###..##.##",
    "..#....#.##",
    ".##...##.##",
  ],
  [
    ".....#.##...#..##",
    "#.#...###..######",
    "###.#...#.#.#####",
    "###.#...#.#.#####",
    "#.#...###..######",
    ".....#.##..##..##",
    "#####.#.###.#..##",
    "##.#.####..######",
    "#.##.###.#.......",
  ],
  [
    "###.#..#..#",
    "..#.#..#.#.",
    "..#.#..#.#.",
    "###.#..#..#",
    "...#.#..##.",
    "###..#.###.",
    "..#..###.#.",
    "##.#.#...#.",
    ".#.###..#..",
    "###.##..###",
    "..#....#.#.",
    "##.#.##.#.#",
    "..#...#...#",
    "....#.#...#",
    "..#..#.####",
  ],
  [
    ".##.####.##.####.",
    ".##.####.##.####.",
    "..#....##..##....",
    "#...###......###.",
    "..#.#.#.#..#.#.#.",
    "##..##.#....#.#..",
    "#.#.##.#.##.#.##.",
    "#....###....###..",
    "........####.....",
    ".#.#.....##.....#",
    "###.##...##...##.",
  ],
  [
    "#.#####.##.##",
    "...#...#.....",
    ".##.#.##..###",
    ".###.##...###",
    "#..#..##....#",
    "..###...#.##.",
    "..###...#.##.",
    "#..#..##....#",
    ".###.##...###",
    ".#..#.##..###",
    "...#...#.....",
    "#.#####.##.##",
    "#.#####.##.##",
  ],
  [
    ".#.#.#..#..##..",
    ".#....##.###..#",
    "###..##.#.##.##",
    ".#####.#######.",
    ".#####.#######.",
    "###..##.#.##.##",
    ".#....##.###.##",
    ".#.#.#..#..##..",
    "########....#.#",
    "#..##.##.##.#..",
    "#..##.##.##.#..",
    "########....#.#",
    ".#.#.#..#..##..",
    ".#....##.###.##",
    "###..##.#.##.##",
  ],
  [
    "..#..##....",
    "#..#....##.",
    "##.##......",
    "###...#.##.",
    "#.#..######",
    "#.##....##.",
    ".##.#####.#",
    "..##.#.#..#",
    "..##.#.#..#",
  ],
  [
    "..##..##.....###.",
    "#.#....#.#..#.#..",
    "#...##...####...#",
    "..#.##.#..##..#.#",
    ".###..###....###.",
    "##.####.######.##",
    "..######..##..###",
    "#........####....",
    "#.#.##.#.#..#.#.#",
    "####..####..####.",
    "##.####.######.##",
    ".#......#.##.#...",
    "#..####..#..#..##",
    ".#.####.#.##.#.##",
    ".###..###....###.",
    "...####...##...##",
    "#...##...#..#...#",
  ],
  [
    "#.#..#..#",
    ".###.##.#",
    ".###.##.#",
    "#.#..#..#",
    "#.##..###",
    ".####.##.",
    ".###..#.#",
    "##.#..###",
    ".#.#.....",
    ".#.#.....",
    ".#.#..###",
    ".###..#.#",
    ".####.##.",
  ],
  [
    "#...###.#.##.####",
    "##..##.###..##..#",
    "..##...###...#..#",
    "#.##.###.##...##.",
    "#.##.###.#.......",
    "..##....#..##....",
    "......###....#..#",
  ],
  [
    ".#.....##....",
    ".#.....##....",
    "......#..#...",
    "#..#...##...#",
    "#.#.#..##.##.",
    "##..##....##.",
    "##.#.##..##.#",
  ],
  [
    "####.##..",
    ".##..#...",
    ".##..#...",
    "####.##..",
    "####..#..",
    "#..#..#.#",
    ".....#.##",
    "#..#.##..",
    ".....#..#",
    "#..#.#.#.",
    "....###.#",
    "#####.#.#",
    "####.....",
    "####.##..",
    "....#..##",
    "..#.###..",
    "#..##.#..",
  ],
  [
    "....##.##",
    "..#....#.",
    "..#......",
    "....##.##",
    ".....##..",
    "##.#.##.#",
    "#...#.##.",
    "#..#.##.#",
    ".#.##.###",
    ".#..##.#.",
    ".#..##.#.",
    ".#.##.###",
    "#..#.##.#",
    "#...#.##.",
    "##.#.##.#",
  ],
  [
    "#.##########.##",
    ".#..######..#..",
    "####.#..#.#####",
    "###.#.##.#.####",
    "...#..##..#....",
    ".##.#.##.#.##..",
    "..#..####..#...",
    "#.#........#.##",
    "..###.##.###...",
    "..#...##.#.#...",
    "###...##...####",
  ],
  [
    "#.#.#.#..",
    "####.##..",
    ".#....###",
    ".#....###",
    "####.##..",
    "#.#.#.#..",
    ".#####...",
    ".####..#.",
    "..####...",
    ".#.......",
    "#..######",
  ],
  [
    "#..#......#..",
    "#####....####",
    "#.###.##.###.",
    "#.###.##.###.",
    "#####....####",
    "#..#......#..",
    "###.######.##",
    "#.##########.",
    "..###.##.###.",
    ".#..#.##.#..#",
    ".#...#......#",
    "#.#..####..#.",
    "###.##..##.##",
  ],
  [
    ".####..########",
    "#.##.#..###....",
    "..##..#.#..##..",
    ".#..#...#......",
    ".####...##.####",
    "##..##########.",
    "##..##..#..##.#",
    "##..##..#..####",
    "##..##########.",
    ".####...##.####",
    ".#..#...#......",
    "..##..#.#..##..",
    "#.##.#..###....",
    ".####..########",
    "######....###.#",
    "..##..#.#.#.###",
    ".#..#.....##.#.",
  ],
  [
    "......#..#.",
    ".......##..",
    "##..##....#",
    "######....#",
    "######....#",
    "#.##.#....#",
    "#.##.#....#",
    "#.##.######",
    "...#.......",
  ],
  [
    "##..#..#..###..",
    "##..#..#..###..",
    ".###....###..#.",
    "#...####...####",
    "####.##.#####.#",
    "...##..##...##.",
    ".##..##..#....#",
  ],
  [
    ".#..#.##..###.#.#",
    "#....###.#.##.##.",
    "#....###.#.##.##.",
    ".#..#.##..###.#.#",
    "######.#.#...#.##",
    ".......##.#.#....",
    "#########..#.....",
    ".#..#...#...###.#",
    ".####.###.#....##",
    "#....##.##..#...#",
    "#......##.####..#",
  ],
  [
    ".#...#.###.##",
    "..######.....",
    "###..###.####",
    "#...##.#...##",
    ".#####.#.##..",
    ".##..#..#.#..",
    "#.##...###.##",
    "##..#.###.###",
    "###..#...####",
    "#..#..##.....",
    "...##..#.####",
    "...##..#.####",
    "#..#..##.....",
    "###..#...####",
    "##..#.###.###",
    "#.#....###.##",
    ".##..#..#.#..",
  ],
  [
    ".#..##.#..#.#.#..",
    "...##..##....#.##",
    "..#......#......#",
    "..##....##....#..",
    ".##..##..##.....#",
    "#.#..##..#.#...#.",
    "#.#..##..#.#...#.",
  ],
  [
    "##.....",
    ".....#.",
    ".###.#.",
    ".###.#.",
    "....##.",
    "##.....",
    "#..##.#",
    "#....##",
    "#....##",
    "#..##.#",
    "##.....",
  ],
  [
    "##..###",
    "..###..",
    "##.#.##",
    ".####..",
    "..#.#..",
    ".#.##..",
    ".#.....",
    ".#.....",
    ".#.##..",
    "..#.#..",
    "#####..",
    "##.#.##",
    "..###..",
  ],
  [
    "####.##.....###.#",
    "#####.......#..#.",
    "#####.......#..#.",
    "####..#.....###.#",
    "#..####..#.#.##.#",
    ".##..#..........#",
    "######..#.##....#",
    "#..####...###...#",
    "####..#..###.....",
    ".......#.##.##...",
    "....##.###.##..#.",
    "#..##..###...#.#.",
    "....#...#.##...##",
    ".##........##....",
    ".....#.####..##.#",
    "#..#..#..#.#.#..#",
    "#######.#.#.#....",
  ],
  [
    "##.##.##.",
    "#.#..#.##",
    "#.#..#.##",
    "##.##.###",
    ".#....#..",
    "##.##.###",
    ".##..##..",
    ".#....#.#",
    "#.####.##",
    ".######.#",
    ".#.##.#.#",
  ],
  [
    ".#.#..#.#.##.",
    "#..#..#..####",
    "..#.##.#..##.",
    "##..##.######",
    "#..#..#..####",
    ".##....##....",
    "#..#..#..####",
  ],
  [
    "#.##.####.#######",
    "..#.#...###.####.",
    ".#.#....##...##..",
    "..#.###.##..####.",
    "##.#####..#.#..#.",
    ".##.##.######..#.",
    ".##....#.#..####.",
    "...#..##.##.####.",
    "...#..##.##.####.",
  ],
  [
    "#.#..#.",
    ".##..##",
    "###..##",
    "###..##",
    ".##..##",
    "#.#..#.",
    ".#.##.#",
    "#.#..##",
    ".#....#",
  ],
  [
    "...#.....#.##",
    "..#.#.#....#.",
    "#####..##.##.",
    "####...##....",
    "#####.#.#..#.",
    "..####..###.#",
    "..#.#...#....",
    "..####..##...",
    "...####.#.###",
    "##.##.####..#",
    "##..#....#.##",
    "##.###....#.#",
    "..##.#....###",
    "..##.#....###",
    "##.###......#",
    "##..#....#.##",
    "##.##.####..#",
  ],
  [
    ".##.#..#.##..",
    ".##.#..#.##..",
    "..#######...#",
    ".####..####.#",
    "..########...",
    "#.###..###.#.",
    "#...#..#...#.",
    "#####..#####.",
    ".###.##.###..",
  ],
  [
    "#######......",
    "....#...####.",
    "####.#.#....#",
    ".#.#..##.##.#",
    "####.###....#",
    "#.###.#.#..#.",
    "...#.####..##",
    ".##.###......",
    ".#..###.#..#.",
    ".#.#.##..##..",
    "..#..##......",
    "#.......#..#.",
    "##...##..##..",
    ".###.........",
    ".##..........",
  ],
  [
    "##..####.",
    ".###.##.#",
    "#..#....#",
    "#..#....#",
    ".###.##.#",
    "##..#..#.",
    "###......",
    "#..#.##.#",
    "...#.##.#",
  ],
  [
    "######.....",
    "#..###..###",
    "####..##..#",
    "#####..#..#",
    "#..#....##.",
    ".##...#....",
    "####..##..#",
    "######.....",
    ".##..#..##.",
  ],
  [
    "..###.#.####.#.##",
    "##.##..#....#..##",
    "..#..###....###..",
    ".....##......##..",
    "....#.#..##..###.",
    "##.#...#.##.#...#",
    "..##...#....#...#",
    "..#....#.##.#....",
    "####..#.####.#..#",
  ],
  [
    ".########..####",
    "#...##...##...#",
    "#.##..##.##.##.",
    "##..###.####.##",
    "#..####..##..##",
    "##..##..####..#",
    "..##..##....##.",
    "...####......##",
    "#...##...##...#",
    "#.#....#.##.#..",
    ".#.####.#..#.##",
    "..##..##....##.",
    ".########..####",
    "##.#..#.####.#.",
    "#..#..#..##..#.",
  ],
  [
    "##..#....",
    "###...###",
    ".###.#..#",
    "..###..##",
    "..#......",
    "##.#....#",
    "##.#....#",
  ],
  [
    "####.#.",
    "#..#...",
    "###.###",
    "...##..",
    ".#...##",
    "##.#.#.",
    "##.#.#.",
    ".#...##",
    "...##.#",
    "###.###",
    "#..#...",
    "####.#.",
    "##.##..",
    "###..##",
    ".....##",
    ".....##",
    "###..##",
  ],
  [
    "#####.###....##",
    ".######.#.##.#.",
    "..####..######.",
    "##....###.##.##",
    "...##...#.##.#.",
    ".######...##...",
    "#......##....##",
    ".#.##.#........",
    "..#..#..#.##.#.",
    "###..###.####.#",
    "#.####.##.##.##",
    "..#..#.........",
    "..####.........",
    "###..###......#",
    ".##..##.#.##.#.",
    "###..#####..###",
    "...##...##..##.",
  ],
  [
    "#...#.###",
    ".#.##..#.",
    "#....###.",
    "....###.#",
    "#.######.",
    "#.######.",
    "....###.#",
    "#....###.",
    ".#.##..#.",
    "#...#..##",
    "...#...#.",
    "...#...#.",
    "#...#..##",
    ".#.##..#.",
    "#....###.",
  ],
  [
    "#.#....",
    "#####.#",
    ".####.#",
    ".##..##",
    "......#",
    "###.#.#",
    "##.#.##",
    "...#..#",
    "...#..#",
    "##.#.##",
    "###.#.#",
    "...#..#",
    ".##..##",
    ".####.#",
    "#####.#",
    "#.#....",
    "#.#....",
  ],
  [
    "...##.#",
    "###.#.#",
    "...#.#.",
    "..#.#.#",
    "..#.#.#",
    "...#.#.",
    "###.#.#",
    "...#..#",
    "##.#.##",
    "####.##",
    "...#...",
    "##.....",
    "...#.#.",
    "##.###.",
    "####...",
  ],
  [
    ".#.#.#...##..",
    ".#.#.#...##..",
    ".##..##.##..#",
    "#.###.###.#..",
    "#########..#.",
    "..##..#..##.#",
    "...##...###.#",
    "###.####.###.",
    ".#####.#.##.#",
    ".#####.#.##.#",
    "###.####.###.",
    "..###...###.#",
    "..##..#..##.#",
  ],
  [
    ".####......",
    ".####..#..#",
    "#.####.#..#",
    ".####..#..#",
    "..##..##..#",
    ".#..#......",
    "#.##.#.####",
    ".#..#..#..#",
    ".#..#.#####",
    "#.##.##....",
    ".#..#.##..#",
  ],
  [
    ".######.##....#",
    "#.####.#..#..#.",
    ".#....#...####.",
    "##########....#",
    "........##....#",
    ".#....#.#.#..#.",
    "#.......###..##",
    ".#.##.#.##.##.#",
    "#..##..##.####.",
    "###..#####....#",
    ".######.##....#",
    "##....###.#..#.",
    "..........#..#.",
  ],
  [
    ".##..###.##",
    "####.##..##",
    "######.##.#",
    "#..#...##..",
    ".##..#....#",
    "#..#...##..",
    ".##..######",
    "####.######",
    ".##..######",
  ],
  [
    "..#.###",
    "#.#.###",
    "..#.###",
    "#.#####",
    ".##.#..",
    "##...##",
    "#.#..##",
    "#..##..",
    "...####",
  ],
  [
    "......##...",
    ".#..#.##.#.",
    "##..##..##.",
    ".#..#.##.#.",
    "#....####..",
    ".####....##",
    "#....#..#..",
    "#....####..",
    "######..###",
    "##..#####..",
    "#.##.####.#",
  ],
  [
    "##...#....#..",
    "...##......##",
    "##.#.#....#.#",
    ".############",
    ".############",
    "##.#.#....#.#",
    "...##......##",
    "##...#....#..",
    "#....#####...",
    "..###.####.##",
    "#............",
    "#.#..##..##..",
    ".#.#.######.#",
  ],
  [
    "#.##......#.#####",
    ".#.#..####.#####.",
    "##..##.##.##.#..#",
    "..##.##..#.#.#.#.",
    "..##.##..#.#.#.#.",
    "##..##.##.##.#..#",
    ".#.#..###..#####.",
    "#.##......#.#####",
    "..#......#..#.###",
    "########.#...#.##",
    "########...##.###",
    "####......#.##..#",
    "#.##.#.###..####.",
    "#.##.#.###..####.",
    "####......#.##..#",
  ],
]
