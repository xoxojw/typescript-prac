# styled-components 연습 with TypeScript

## styled-components props 전달하기
> 참고 블로그 <br />
> https://velog.io/@hyo123/TypeScript-styled-components-props-%EC%A0%84%EB%8B%AC <br />
> https://innovatorwhy.tistory.com/44

### 1. 단일 props 사용
- props를 내려준다

  ```
  const Title = styled.div<{ color: string }>`
    color: ${(props) => props.color};
    // es6 문법을 사용하면 아래와 같이 props를 생략할 수 있다.
    // color: ${({ color }) => color};
  `
  ```
- styled-component에서 props를 받아준다

  ```
  <Title color="tomato">Title</Title>
  ```

### 2. 다수 props 사용 - interface
```
interface Box {
  bgColor?: string;
}

// ✅<타입명>으로 props의 type 지정
const BoxOne = styled.div<Box>`
  background-color: ${props => props.bgColor};
  width: 200px;
  height: 200px;
`
```