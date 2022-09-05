# HTTP 헤더 개요

## 용도

- HTTP 전송에 필요한 모든 부가정보
- 예) 메시지 바디의 내용, 메시지 바디의 크기, 압축, 인증, 요청 클라이언트, 서버 정보, 캐시 관리 정보,...
- 표준 헤더가 너무 많음
    - [https://en.wikipedia.org/wiki/List of HTTP header fields](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)

- 필요시 임의의 헤더 추가 가능
    - helloworld: hihi


## HTTP 표준 스펙이 바뀐다

- 1999년 RFC2616 (폐기됨)
    - 엔티티 헤더, 엔티티 바디,...
- 2014년 RFC7230 ~ 7235 등장

## RFC723x 변화점

- `엔티티(Entity)` -> `표현(Representation)`
- Representation = representation Metadata + Representation Data
- `표현` = `표현 메타데이터` + `표현 데이터`

## HTTP BODY
message body - RFC7230(최신)

![HTTP-BODY](../resources/HTTP-BODY.png)

- 메시지 본문(message body)을 통해 표현 데이터 전달
- 메시지 본문 = 페이로드 (payload)
- **표현**은 요청이나 응답에서 전달할 실제 데이터 (포현 = 표현헤더 + 표현데이터)
- **표현 헤더는 표현 데이터**를 해석할 수 있는 정보 제공 
    - 데이터 유형(html, json), 데이터 길이, 압축 정보 등등

- 참고: 표현 헤더는 표현 메타데이터와 페이로드 메시지를 구분해야 하지만 그러면 너무 복잡해져서... 생략


# 표현

- `Content-Type` : 표현 데이터의 형식
- `Content-Encoding` : 표현 데이터의 압축 방식
- `Content-Language` : 표현 데이터의 자연 언어
- `Content-Length` : 표현 데이터의 길이

---
- 표현 헤더는 전송, 응답 둘다 사용!

## Content-Type 표현 데이터의 형식 설명

- 미디어 타입, 문자 인코딩
- 예.
    - `text/html; charset=utf-8`
    - `application/json` (utf-8 기본)
    - `image/png`


## Content-Encoding 표현 데이터 인코딩

- 표현 데이터를 압축하기 위해 사용
- 데이터를 전달하는 곳에서 압축 후 인코딩 헤더 추가 (예를 들면 서버에서 압축 후 클라이언트에서 어떻게 압축된건지 알 수 있다)
- 데이터를 읽는 쪽에서 인코딩 헤더의 정보로 압축 해제
- 예.
    - gzip
    - deflate
    - identity (압축 안한다는 것!)


## Content-Language 표현 데이터의 자연 언어

```
HTTP/1.1 200 OK
Content-Type: text/html;charset=UTF-8
Content-Language: ko // 본문에 한국어가 들어가있구나!
Content-Length: 521

<html>
    <body>
        안녕하십니까
    </body>
</html>
```

- 예.
    - ko
    - en
    - en-US

## Content-Length 표현 데이터의 길이
- 바이트 단위
- **Transfer-Encoding**(전송 코딩)을 사용하면 Content-Length를 사용하면 안됨


# 협상 (콘텐츠 니고시에이션)
> 클라이언트가 선호하는 표현 요청

- Accept : 클라이언트가 선호하는 미디어 타입 전달
- Accept-Charset : 클라이언트가 선호하는 문자 인코딩
- Accept-Encoding : 클라이언트가 선호하는 압축 인코딩
- Accept-Language : 클라이언트가 선호하는 자연 언어

---

- 협상 헤더는 요청시에만 사용!

![accept-language](../resources/accept-language.png)

- 한국어를 요청했지만 기본이 독일어, 차선이 영어인 경우!
- 독일어 보낼바에 영어로 줘~

이런 상황...

## 협상과 우선순위 1 Quality Values(q)

```
GET /event
Accept-Language: ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7
```

- Quality Values(q) 값 사용
- 0 ~ 1, 클수록 우선순위 높다
- 생략하면 1
- `Accept-Language: ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7`
    - 1. ko-KR;q=1(생략)
    - 2. ko;q=0.9
    - 3. en-US;q=0.8
    - 4. en;q=0.7


## 협상과 우선순위 2

- 구체적인 것이 우선한다.

```
GET /event
Accept: text/*, text/plain, text/plain;format=flowed, */*
```

- Accept: text/*, text/plain, text/plain;format=flowed, */*

    1. `text/plain;format=flowed`

    2. `text/plain`

    3. `text/*`

    4. `*/*`