declare module 'safe-money' {
  declare class SafeMoney {
    constructor(someParam?: string)

    someProperty: string[]

    myMethod(opts: MyClass.MyClassMethodOptions): number
  }

  export = SafeMoney
}
