# 상태 코드

클라이언트가 보낸 요청의 처리 상태를 응답에서 알려주는 기능

- 1xx : 요청이 수신되어 처리중 (Informational)
    - 거의 사용 하지 않음
- 2xx : 요청 정상 처리 (Successful)

- 3xx : 요청을 완료하려면 추가 행동이 필요 (Redirection)

- 4xx : 클라이언트 오류, 잘못된 문법 등으로 서버가 요청을 수행할 수 없음. (Client Error)

- 5xx : 서버 오류, 서버가 정상 요청을 처리하지 못함 (Server Error)

## 만약 모르는 상태 코드가 나타나면?

- 클라이언트가 인식할 수 없는 상태코드를 서버가 반환하면?

- 클라이언트는 상위 상태코드로 해석해서 처리

- 미래에 새로운 상태 코드가 추가되어도 클라이언트를 변경하지 않아도 됨

- 예) 

    - 299 ??? -> 2xx(Succeeful)
    - 451 ??? -> 4xx(Client Error)
    - 599 ??? -> 5xx(Server Error)


## 2xx (Successful)
클라이언트의 요청을 성공적으로 처리

- 200 OK
- 201 Created
- 202 Accepted
- 204 No Content

### 201 Created

요청해서 새로운 리소스가 생성됨

응답 HTTP 메시지

```
HTTP/1.1 201 Created
Content-Type: application/json
Content-Length: 34
Location: /members/100

{
    "username": "paul",
    "age": 24
}
```

- 생성된 리소스는 응답의 Location 헤더 필드로 식별


### 202 Accepted
요청이 접수되었으나 처리가 완료되지 않았음

- 배치 처리 같은 곳에서 사용
- 예) 요청 접수 후 1시간 뒤에 배치 프로세스가 요청을 처리함
- 잘사용안함


### 204 No Content

서버가 요청을 성공적으로 수행했지만, 응답 페이로드 본문에 보낼 데이터가 없음

- 예)웹 문서 편집기에서 Save버튼
- save버튼의 결과로 아무 내용이 없어도 된다.
- save버튼을 눌러도 같은 화면ㅇ을 유지해야 한다.
- 결과 내용이 없어도 204 메시지만으로 성공을 인식할 수 있다.


## 3xx (Redirection)

요청을 완료하기 위해 유저 에이전트(웹브라우저)의 추가 조치 필요

- 300 Multiple Choices (거의 안씀)

- 301 Moved Permanently
- 302 Found
- 303 See Other
- 304 Not Modified
- 307 Temporary Redirect
- 308 Permanent Redirect


### 리다이렉션 이해

- 웹브라우저는 3xx 응답의 결과에 Location 헤더가 있으면, Location 위치로 자동 이동

- 자동 리다이렉트 흐름

1. 요청
```
GET /event HTTP/1.1
Host: localhost:8080
```

2. 응답
```
HTTP/1.1 301 Moved Permanently
Location: /new-event
```

3. 자동 리다이렉트 (웹브라우저가 스스로)

4. 요청 
```
GET /new-event HTTP/1.1
Host: localhost:8080
```

5. 응답

```
HTTP/1.1 200 OK
```

### 리다이렉션 이해
종류

- **영구 리다이렉션** - 특정 리소스의 uri가 영구적으로 이동
    - 예 /members -> /users
    - 예 /event -> /new-event

- **일시 리다이렉션** - 일시적인 변경

    - 주문 완료 후 주문 내역 화면으로 이동
    - PRG: Post/Redirect/Get

- 특수 리다이렉션

    - 결과 대신 캐시를 사용



### 영구 리다이렉션
**301**, **308**

이벤트 예제를 떠올려보자

- 리소스의 URI가 영구적으로 이동
- 원래의 URL을 사용 x, 검색 엔진 등에서도 변경 인지
- **301 Moved Permanently**
    - __리다이렉트시 요청 메서드가 GET으로 변하고, 본문(body?)이 제거될 수 있음(may)__

- **308 Permanent Redirect**
    - 301과 기능은 똑같음
    - __리다이렉트시 요청 메서드와 본문 유지!(처음 POST를 보내면 리다이렉트도 POST__

- 스펙이 있기에 설명을 했을뿐
- 실무에서는 event -> new-event로 바뀔 때 본문도 다 바뀌어야 하기 때문에
- 다시 Get으로 변경시켜준다.

### 일시적인 리다이렉션

**302**, **307**, **303**

- 리소스의 URI가 일시적으로 변경
- 따라서 검색엔진 등에서 URL을 변경하면 안됨
- **302 Found**
    - **리다이렉트시 요청 메서드가 GET으로 변하고, 본문이 제거될 수 있음 (may)**
    - 아래의 두개의 상태코드와는 달리 명확하지 않다.
    - 그래서 아래 두개의 상태코드가 생긴것!

- **307 Temporary Redirect**
    - 302와 기능은 같음
    - **리다이렉트시 요청 메서드와 본문 유지(요청 메서드를 변경하면 안된다. must not)**

- **303 See Other**
    - 302와 기능은 같음
    - **리다이렉트시 요청 메서드가 GET으로 변경**

- 희망하기에는 307, 303을 써야하지만
- 실무에서는 여전히 302를 많이 쓴다. (그리고 크게 문제가 없다.)

### PRG: Post/Redirect/Get
#### 일시적인 리다이렉션 - 예시

- Post로 주문후에 웹 브라우저를 새로고침하면?
- 새로고침은 다시 요청
- 중복 주문이 될 수 있다.


그래서 **PRG를 많이 쓴다**

- POST로 주문후에 새로 고침으로 인한 중복 주문 방지
- POST로 주문후에 주문 결과 화면을 GET 메서드로 리다이렉트
- 새로고침해도 결과 화면을 GET으로 조회
- 중복 주문 대신에 결과 화면만 GET으로 다시 요청

흐름도

1. 요청
```
POST /order HTTP/1.1
Host: localhost:8080

itemId=computer&count=1
```

2. DB에 주문데이터 저장 (컴퓨터 1개)

3. 응답

```
HTTP/1.1 302 Found
Location: /order-result/19
```

4. 자동 리다이렉트 (URL: /order-result/19)

5. 요청 (GET 사용)
```
GET /order-result/19 HTTP/1.1
Host: localhost:8080
```

6. 주문데이터 조회 (19번 주문 in DB)

7. 응답
```
HTTP/1.1 200 OK

<html>주문완료</html>

```

8. 결과 화면에서 새로고침, GET /order-result/19 결과 화면만 다시 요청(5번으로 이동)


- PRG 이후 리다이렉트

    - URL이 이미 POST -> GET 으로 리다이렉트 됨

    - 새로고침 해도 GET 으로 결과 화면만 조회


### 그래서 뭘 써야 할까?

- 요약
    - 302 Found : GET 으로 변할 수 있음
    - 307 Temporary Redirect : 메서드가 변하면 안됨
    - 303 See other : 메서드가 GET으로 변경

- 역사
    - 처음 302 스펙의 의도는 HTTP 메서드를 유지하는 것
    - 하지만 웹 브라우저들은 대부분 GET으로 바꾸어버림(일부는 다르게 동작)
    - 그래서 모호한 302를 대신하는 명확한 307, 303 이 등장함 (301 대응으로 308도 등장)

- 현실
    - 307, 303을 권장하지만 현실적으로 이미 많은 애플리케이션 라이브러리들이 302를 기본값으로 사용
    - 자동 리다이렉트시에 GET으로 변해도 되면 그냥 302를 사용해도 큰 문제 없음


### 기타 리다이렉션

- 304 Not Modified (**많이 씀**)
    - 클라이언트에게 리소스가 수정되지 않았음을 알려준다. 따라서 클라이언트는 로컬PC에 저장된 캐시를 재사용한다. (캐시로 리다이렉트 한다.)

    - 304 응답은 응답에 메시지 바디를 포함하면 안된다. (로컬 캐시를 사용해야 하므로)

    - 조건부 GET, HEAD 요청시 사용