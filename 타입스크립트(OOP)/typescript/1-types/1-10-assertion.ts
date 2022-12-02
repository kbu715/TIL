{
  /**
   * Type Assertions 💩
   */
  function jsStrFunc(): any {
    // return 'hello';
    return 2;
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 😱

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!;
  numbers.push(2); // 😱

  // !: NOT NULL 
  // 정말정말 장담할 때?!
  const button = document.querySelector('.btn')!; // NOT NULL
}

// as unknown as string 
// 강제 형변환