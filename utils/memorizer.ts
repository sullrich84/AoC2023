export class Memorizer<Value> {
  private _seen: Record<string, Value> = {}

  public seen(key: string): Value | undefined {
    return this._seen[key] === undefined ? undefined : this._seen[key]
  }

  public memorize(key: string, value: Value) {
    this._seen[key] = value
  }

  public get size(): number {
    return Object.keys(this._seen).length
  }
}
