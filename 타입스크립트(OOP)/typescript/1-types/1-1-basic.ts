{
  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array.....
   */

  // π© -> μ§μνμ

  // number
  const num: number = 0.5;

  // string
  const str: string = 'hello';

  // boolean
  const bool: boolean = false;

  // undefined
  let name: undefined; // π© // λ¨λμ μΌλ‘ undefinedλ₯Ό μ¬μ©νμ§ μλλ€.
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null; // π©
  let person2: string | null;

  // unknown π©
  // 'unknown'μ μ§κΈ λΉμ₯μ λ΄κ° νμμ λͺ¨λ₯΄κ² μ§λ§ λμ€μ μ§μ ν΄μ μΈ κ²μ΄λ€.
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any π©
  let anything: any = 0;
  anything = 'hello';

  // void
  function print(): void {
    console.log('hello');
    return;
  }
  let unusable: void = undefined; // π©

  // never
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    while (true) {}
  }
  let neverEnding: never; // π©

  // object
  let obj: object; // π©
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: 'paul' });
  acceptSomeObject({ animal: 'dog' });
  acceptSomeObject([1, 2, 3, 4]);
}
