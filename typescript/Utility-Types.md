- Partial
- 거의 쓰지 않는다 (Pick이나 Omit)

```typescript
interface Profile {
    name: string
    age: number
    married: boolean
}

const me: Profile = {
    name: 'paul',
    age: 32,
    married: false
}

const another: Partial<Profile> = {
    name: 'james',
    age: 29
}

// Partial 타입 만들어보기
type P<T> = {
    [K in keyof T]?: T[K]
}
```


- Pick

```typescript
const someone: Pick<Profile, 'name' | 'age'> = {
    name: 'dj',
    age: 33
}

// Pick 직접 만들어보기
type P<T, S extends keyof T> = {
    [key in keyof S]: T[key]
}
```

- Omit
- Omit은 사실 별다른게 아니라 `Pick`과 `Exclude` 섞어서 새로운 타입을 만들었다


- Exclude
```typescript
// T에서 U를 뺀 타입
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<keyof Profile, 'married> = {
    name: 'zozo',
    age: 30
}

type Animal = 'Cat' | 'Dog' | 'Human'
type Mammal = Exclude<Animal, 'Human'> 
```

```typescript
const newone: Pick<Profile, 'name' | 'age'> = {
    name: 'kyokyo',
    age: 25
}

// 이것을 Exclude로 대체

const newone: Pick<Profile, Exclude<keyof Profile, 'married'>> = {
    ...
}

// 이것으로 Omit 추론

// S는 key값들만 오라고 제한을 걸어뒀다
type O<T, S extends keyof any> = Pick<T, Exclude<keyof T, S>>

const newnewone: O<Profile, 'married'> = {
    name: 'yoyo',
    age: 20
}
```

- S extends keyof any -> S는 string | number | symbol


- Extract (Exclude랑 반대) 추출...

```typescript

type Animal = 'Cat' | 'Dog' | 'Human'
// 만약 T가 Animal이면
// 각각 한번씩 T extends U 를 진행
// 'Cat' extends 'Human'
// 'Dog' extends 'Human'
// 'Human' extends 'Human'

type Extract<T, U> = T extends U ? T : never;


// 그렇게 'Human'만 살아남는다.
// Exclude는 반대!
// type Exclude<T, U> = T extends U ? never : T;
```

```typescript
type Animal = 'Human' | 'Cat' | 'Dog'
type Human = Extract<Animal, 'Human'>
```

- 타입에도 삼항연산자가 들어갈 수 있다!


- Required

```typescript
interface Profile {
    name?: string
    age?: number
    married?: boolean
}

const paul: Required<Profile> = {
    name: 'paul',
    married: false
}
// age is missing!
```

- Required 타입 분석

```typescript
type R<T> = {
    // - : ?(optional)를 빼버려라
    // modifier
    [P in keyof T]-?: T[P];
};
```

- Readonly

```typescript
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};
```

- Record

```typescript
interface obj {
    [key: string]: number;
}

// 위의 타입과 같다.
const a: Record<string, number> = {a: 3, b: 5, c: 7};

```

- Record 타입 분석

```typescript
type Record<K extends keyof any, T> = {
    [key in K]: T;
};
```


- NonNullable

```typescript
type A = string | null | undefined | boolean | number;

type B = NonNullable<A>
// null, undefined가 사라진다.
```

type NonNullable<T> = T extends null | undefined ? never : T;
