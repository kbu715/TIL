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
- 2014년 RFC7230 ~ 7235 등장

## RFC723x 변화점

- 엔티티(Entity) -> 표현(Representation)
- Representation = representation Metadata + Representation Data
- `표현` = `표현 메타데이터` + `표현 데이터`

## HTTP BODY
message body - RFC7230(최신)

![HTTP-BODY](../resources/HTTP-BODY.png)

- 메시지 본문(message body)을 통해 표현 데이터 전달
- 메시지 본문 = 페이로드 (payload)
- **표현**은 요청이나 응답에서 전달할 실제 데이터
- **표현 헤더는 표현 데이터**를 해석할 수 있는 정보 제공 
    - 데이터 유형(html, json), 데이터 길이, 압축 정보 등등

- 참고: 표현 헤더는 표현 메타데이터와 페이로드 메시지를 구분해야 하지만 그러면 너무 복잡해져서... 생략