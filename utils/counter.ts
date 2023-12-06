export class Counter {
  private _count = 0

  private _triggerFn: ((count: number) => boolean) | undefined
  private _callbackFn = (count: number) =>
    console.log(`Counter reached ${Intl.NumberFormat().format(count)}`)

  public count() {
    this._count += 1

    if (this._triggerFn && this._triggerFn(this._count)) {
      this._callbackFn(this._count)
    }
  }

  public trigger(
    triggerFn: (count: number) => boolean,
    callBackFn?: (count: number) => void,
  ) {
    this._triggerFn = triggerFn
    if (callBackFn) this._callbackFn = callBackFn
  }

  public each(number: number, callBackFn?: (count: number) => void) {
    this._triggerFn = (count) => count % number === 0 
    if (callBackFn) this._callbackFn = callBackFn
  }
}
