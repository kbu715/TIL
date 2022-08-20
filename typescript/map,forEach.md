- `lib.es5.d.ts` 찾아보기 (공부하기)

---

- `forEach`

```typescript
interface Array<T> { // T: type parameter 라고 부른다
    forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
}
```

- 제네릭이랑 타입 강제 변환이랑 비교

```typescript
<number>add(1, 2); // 타입 강제 지정

add<number>(1, 2); // 제네릭
```

- `map`

```typescript
interface Array<T> {
    map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
}
```


- `filter`

```typescript
interface Array<T> {
    // 위에거 아래거 둘 중에 하나를 쓴다.

    // 1번
    filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];

    // 2번
    filter(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): T[];
    
}
```

```typescript

// 1번의 경우 예시
const filtered = [1, 2, 3, 4, 5].filter((value) => value % 2);

```

```typescript
const filtered = [1, '2', 3, '4', 5].filter((value) => typeof value === 'string');
 // filtered의 타입 : (string | number)[]
 // 타입추론이 잘 된 경우의 타입 : string[]
```
filtered의 타입 추론이 제대로 되지 않는다. 어떻게 하면 제대로 된 타입추론 하게 만들 수 있을까? 고민을 합시다.


```typescript

// 타입 가드! 를 통해 해결할 수 있다.
// function catOrDog(a: Cat | Dog): a is Dog의 예를 생각하자.

// string은 (string | number)의 부분집합
const predicate = (value: (string | number)): value is string => typeof value === 'string'

const newFiltered = [1, '2', 3, '4', 5].filter(predicate);
```
`newFiltered`의 타입은 __string[]__

