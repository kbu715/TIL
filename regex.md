# Regex

## 연습 사이트

[https://regexr.com/](https://regexr.com/)

[https://regexr.com/](https://regexr.com/)

## 기본 꼴
/`pattern`/`flags`

## Groups and ranges

`|` 또는

`()` 그룹

`(?:)` 찾지만 기억하지는 않음 (그룹화 하지 않음)

`[]` 문자셋, 괄호안의 어떤 문자든

`[^]` 부정 문자셋, 괄호안의 어떤 문자가 아닐때

```
/[^a-zA-Z0-9]/gm
```

- g : global
- m : multiline
- ^ : 제외


## Quantifiers

`?` 없거나 있거나 (zero or one)

```
/gra?y/gm
```
- a가 있거나 없거나

`*` 없거나 있거나 많거나 (zero or more)

`+` 하나 또는 많이 (one or more)

`${min, }` 최소

`${min, max}` 최소 그리고 최대


## Boundary-type

`\b` 단어 경계


```
/\bYa/gm
```

- Ya가 prefix인 경우를 찾는다

```
/Ya\b/gm
```
- Ya가 postfix인 경우를 찾는다

`\B` 단어 경계가 아님 (\b 와 반대.)

```
/Ya\B/gm
```
- postfix인 'Ya'를 제외한 'Ya'를 찾는다

`^` 문장의 시작

```
/^Ya/gm
```
- 문장의 시작에 'Ya'가 있는 경우를 찾는다

`$` 문장의 끝


## Character classes

`\` 특수 문자인 경우

```
/\[\]/gm
```

- [] 를 찾는다

`.` 어떤 글자 (줄바꿈 문자 제외)

`\d` digit 숫자

`\D` digit 숫자가 아닌

`\w` word 문자

`\W` word 문자가 아닌

`\s` space 공백

`\S` space 공백이 아닌