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