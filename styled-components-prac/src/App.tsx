import styled, { keyframes } from "styled-components";

// 참고 블로그
// https://velog.io/@hyo123/TypeScript-styled-components-props-%EC%A0%84%EB%8B%AC
interface Box {
  bgColor?: string;
}

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  background-color: ${props => props.theme.backgroundColor};
`

// ✅<타입명>으로 props의 type 지정
const BoxOne = styled.div<Box>`
  background-color: ${props => props.bgColor};
  /* background-color: ${({ bgColor }) => bgColor}; */
  width: 200px;
  height: 200px;
`

// ✅styled-component의 확장 - styled(스타일컴포넌트명)
// -> 스타일컴포넌트명에 해당하는 속성을 모두 가져온 뒤 속성을 추가해주어서 확장해줌
const Circle = styled(BoxOne)<Box>`
  border-radius: 50%;
`

const Btn = styled.button`
  width: 100px;
  height: 30px;
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`
// ✅As: button styled-component인 Btn을 사용하면서 HTML 속성을 바꾸어 a를 전달
// <Btn as="a"></Btn>
// const Link = styled(Btn)`` < 이렇게 하지 않기 위함

// ✅Attrs: 해당 styled-components에 똑같은 속성을 내려줌
// 모든 input에 required를 반복해서 적어줄 필요 없이 한번에 설정해주기에 간편
const Input = styled.input.attrs({ required: true, maxLength: 10 })`
  background-color: gray;
`

// ✅애니메이션: keyframes
export const rotationAnimation = keyframes`
  /* from {
    transform: rotate(0deg);
    border-radius: 0px;
  } to {
    transform: rotate(360deg);
    border-radius: 100px;
  } */
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    transform: rotate(360deg);
    border-radius: 50%;
  }
  100% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
`;

const Emoji = styled.span`
  font-size: 36px;
`;

const BoxTwo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 200px;
  background-color: beige;
  animation: ${rotationAnimation} 3s linear infinite;
  // ✅pseudo selector
  /* span { &:hover } 또는 span:hover {} -> 두 가지는 같은 것임! */
  /* span {  
    &:hover {
      font-size: 98px;
    }
    &:active {
      opacity: 0;
    }
  } */
  // ✅스타일 컴포넌트를 타겟팅할 수도 있음
  // BoxTwo 안에 있는 Emoji 컴포넌트에 대해 styling 가능
  ${Emoji} {
    &:hover {
      font-size: 98px;
    }
  }
`

const Title = styled.h1`
  color: ${props => props.theme.textColor};
`

const Text = styled.p`
  color: ${props => props.theme.textColor};
`

const App = () => {
  return (
    <>
      <Wrapper as="header">
        <BoxOne bgColor="teal" />
        <Circle bgColor="whitesmoke" />
        <Input />
        <Input />
        <Input />
        <Btn>Log in</Btn>
        <Btn as="a" href="/">Log in</Btn>
        <BoxTwo>
          <Emoji as="p">😜</Emoji>
        </BoxTwo>
        <Emoji>🔥</Emoji>
        <div>
          <Title>Title</Title>
          <Text>What is Lorem Ipsum?
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
        </div>
      </Wrapper>
    </>
  );
};

export default App;
