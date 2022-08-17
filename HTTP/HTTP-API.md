# HTTP API

## API URI 고민

- 리소스의 의미는 뭘까?
    - 회원을 등록하고 수정하고 조회하는게 리소스가 아니다.
    - 예 ) 미네랄을 캐라 -> 미네랄이 리소스!
    - `회원이라는 개념 자체가 바로 리소스다`

- 리소스를 어떻게 식별하는게 좋을까?
    - 회원을 등록하고 수정하고 조회하는 것을 모두 배제
    - `회원이라는 리소스만 식별하면 된다. -> 회원 리소스를 URI에 매핑`


## 설계

어떻게 구분하지?

- 회원 목록 조회 `/members`
- 회원 조회 `/members/{id}`
- 회원 등록 `/members/{id}`
- 회원 수정 `/members/{id}`
- 회원 삭제 `/members/{id}`


## 리소스와 행위를 분리, 즉 동사와 목적어를 분리

가장 중요한 것은 리소스를 식별하는 것!

- **URI는 리소스만 식별**

- 리소스와 해당 리소스를 대상으로 하는 행위를 분리

    - 리소스: 회원
    - 행위: 조회, 등록, 삭제, 변경

- 리소소는 명사, 행위는 동사 (미네랄을 캐라)
- 행위(메서드)는 어떻게 구분? **HTTP Method**