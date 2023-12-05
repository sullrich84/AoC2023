import { colorize } from "https://deno.land/x/json_colorize/mod.ts"

export function sum(previous: number, current: number): number {
  return previous + current
}

export function debug(payload: any, pretty = false): void {
  colorize(payload, { pretty })
}

export function wait(payload: any, pretty = false): void {
  alert(colorize(payload, { pretty, print: false })) 
}
