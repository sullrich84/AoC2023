import { colorize } from "https://deno.land/x/json_colorize/mod.ts"

export function debug(payload: any, pretty = false): void {
  colorize(payload, { pretty })
}

export function wait(payload: any, pretty = false): void {
  alert(colorize(payload, { pretty, print: false }))
}

export interface NumRange {
  start: number
  end: number
}

export function removeOverlappingRanges(inputRanges: NumRange[]): NumRange[] {
  if (inputRanges.length == 0) return inputRanges

  const result: NumRange[] = []
  const sort: NumRange[] = [...inputRanges].sort((a, b) => a.start - b.start)
  result.push(sort[0])

  for (let i = 1; i < sort.length; i++) {
    const current = sort[i]
    const previous = result[result.length - 1]

    if (previous.end < current.start) result.push(current)
    else previous.end = Math.max(previous.end, current.end)
  }

  return result
}

export function greatestCommonDevisor(x: number, y: number) {
  x = Math.abs(x)
  y = Math.abs(y)

  while (y) {
    const t = y
    y = x % y
    x = t
  }

  return x
}


