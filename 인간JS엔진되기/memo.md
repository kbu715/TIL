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



## 1.6 this는 호출 때 결정된다고!!!


```javascript
const obj = {
    name: 'paulkang',
    sayName() {
        console.log(this.name);
    }
}

obj.sayName(); // paulkang


const sayN = obj.sayName;

sayN(); // undefined
```

```javascript
const obj = {
    name: 'paulkang',
    sayName() {
        console.log(this.name); // paulkang
        function inner() {
            console.log(this.name); // undefined
        }
        inner();
    }
}

obj.sayName();

// scope chain
// inner -> sayName -> anonymous(window)
```
- sayName 화살표 함수로 바꾸면?

```javascript
const obj = {
    name: 'paulkang',
    sayName: () => {
        console.log(this.name); // undefined
        function inner() {
            console.log(this.name); // undefined
        }
        inner();
    }
}

obj.sayName();

// scope chain
// inner -> sayName -> anonymous(window)
```
- this는 호출할 때 정해진다!
- new 연산자 (생성자), object의 메소드인 경우 this가 바뀐다 (new 연산자인 경우는 인스턴스 객체, object인 경우는 리터럴 객체)
- 화살표 함수는 부모함수의 this를 가져온다! (부모함수가 어떻게 호출되었는지를 봐야한다!)
- 호출스택을 그릴 때 this를 결정한다. (호출 스택을 그려보면서 this도 결정해보자)


```javascript
const obj = {
    name: 'paulkang',
    sayName() {
        console.log(this.name); // paulkang // this: obj
        const inner = () => {
            console.log(this.name); // paulkang // 화살표 함수에서의 this는 부모함수의 this: obj
        }
        inner();
    }
}

obj.sayName();
```


```javascript
const obj = {
    name: 'paulkang',
    sayName() {
        console.log(this.name); // paulkang
        function inner() {
            console.log(this.name); // undefined // 화살표 함수가 아니므로 this: window
        }
        inner();
    }
}

obj.sayName();
```

## 1.7 this를 분석할 수 없는 케이스

```javascript

const header = document.querySelector('.MainPage__SectionTitle')

header.addEventListener('click', function() {
    console.log(this);
})
// this는 window 환경이 아니다
// <h3 class="MainPage__SectionTitle">공지사항</h3>

```
- this는 호출할 때 결정된다 !!!!!!!!!
- 이벤트 핸들러의 콜백함수는 선언된 것!!! 호출 x
- 이런 경우는 외워야 한다 



- addEventListener 추측해보기
```javascript
const header = {
    addEventListener: function(eventName, callback) {
        callback(); // this가 window => 땡
        callback.call(this); // this가 header(호출의 주체가 header이므로) <= 아마 이런식으로 구성되어 있을 것이다
    }
}

header.addEventListener('click', function() {
    console.log(this);
})
```


- 화살표 함수로 바꿀 시

```javascript
header.addEventListener('click', () => {
    console.log(this); // Window
})
```

- 콜백함수의 부모함수는 ?
- addEventListener가 아니다
- 선언과 호출을 구분하자 !!!! (addEventListener는 호출)
- 콜백함수의 부모함수는 anonymous (Window)

- 다시한번 강조! **this는 호출할 때 결정된다!!!**



- bing, apply, call

```javascript
a.apply(obj) === a.bind(obj)() === a.call(obj)
```

- bind는 호출이 아니다
- apply, call 의 차이

```javascript
function add (a, b) {
    return a + b;
}

add.apply(null, [3, 5]) // 8
add.call(null, 3, 5) // 8
```