# 모든 것이 HTTP (HyperText Transfer Protocol)

## HTTP 메시지에 모든 것을 전송

- HTML, Text
- Image, 음성, 영상, 파일
- JSON, XML (API)
- 거의 모든 형태의 데이터 전송 가능
- 서버간에 데이터를 주고 받을 때도 대부분 HTTP 사용

## 기반 프로토콜

- TCP: HTTP/1.1, HTTP/2
- UDP: HTTP/3

- 현재 HTTP/1.1 주로 사용
    - HTTP/2 HTTP/3 도 점점 증가


## HTTP 특징

- 클라이언트 - 서버 구조
    - Request - Response 구조
    - 클라이언트는 서버에 요청을 보내고, 응답을 대기
    - 서버가 요청에 대한 결과를 만들어서 응답
    - 클라이언트는 ui, 사용성에 집중, 서버는 비즈니스로직, 데이터처리
- Stateless 프로토콜, 비연결성
- HTTP 메시지!
- 단순함, 확장 가능