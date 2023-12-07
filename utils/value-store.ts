export class ValueStore {
  private _min: number = Number.POSITIVE_INFINITY
  private _max: number = Number.NEGATIVE_INFINITY

  public set min(n: number) {
    this._min = Math.min(this._min, n) 
  }

  public get min(): number {
    return this._min
  }

  public set max(n: number) {
    this._max = Math.max(this._max, n) 
  }

  public get max(): number {
    return this._max
  }
}
