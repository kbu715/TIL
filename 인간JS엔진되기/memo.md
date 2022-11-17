# 인간 js 엔진 되기 (고급 강좌)

## 1.1 함수와 함수의 호출, 고차함수

함수의 호출은 return 값으로 바로 대체해서 생각하기! (말이 되는 코드인지 살펴봐라)

```javascript
const onclick = () => {
    return (event) => {
        console.log('hello world~');
    }
}

document.querySelector('#header').addEventListener('click', onclick())
```
- 가능한 코드
- 함수안에서 다른 함수를 리턴한다 => `고차함수`



## 1.2 자바스크립트 스펙 외우지 마라

## 1.3 호출 스택 분석 (call stack)

```javascript
const x = 'x';

function c() {
    const y = 'y';
    console.log('c');
    debugger;
}

function a() {
    const x = 'x';
    console.log('a');

    function b() {
        const z = 'z';
        console.log('b');
        c();
    }

    b();
}


a(); // a b c
c(); // c
```
- 호출 스택 그려보기!
- 함수의 닫는 중괄호 ('}')를 만나면 스택에서 빠져 나간다!
- 디버거 적용해서 브라우저 상에서 호출 스택 보기
![debugger](../resources/debugger.png)