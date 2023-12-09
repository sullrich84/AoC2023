export const read = (path: string) => [
  Deno.readTextFileSync(`${path}/task.txt`),
  Deno.readTextFileSync(`${path}/sample.txt`),
]
