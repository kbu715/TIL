- Partial

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
```∏