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