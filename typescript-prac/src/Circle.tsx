import { useState, useEffect } from "react";
import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

interface CircleProps {
  // ✅optional prop: ? 여부로 required인지 아닌지 정해준다
  bgColor: string;
  borderColor?: string;
  text?: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: ${props => props.bgColor};
  border: 3px solid ${({ borderColor }) => borderColor};
`;

const Circle = ({ bgColor, borderColor, text = "default text" }: CircleProps) => {
  const [value, setValue] = useState<number|string>(1);
  useEffect(() => {
    setValue(3);
    setValue('hello');
    // setValue(true); // 에러발생
  }, []);
  return (
    <>
      {/* ✅optional props */}
      <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
        {text}
      </Container>
    </>
  );
};

export default Circle;

// ✅interface: object의 shape를 정해둠
interface PlayerShape {
  name: string;
  age: number;
}

const sayHello = (playerObj: PlayerShape) =>
  `Hello ${playerObj.name} your are ${playerObj.age} years old! `;

sayHello({ name: 'jiwon', age: 10 });
sayHello({ name: 'jane', age: 17 });