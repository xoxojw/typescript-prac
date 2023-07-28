import Circle from "./Circle";
import styled from "styled-components";

const App = () => {
  return (
    <>
      <div>
        <Circle bgColor="tomato" borderColor="blue" />
        <Circle text="Hello World" bgColor="teal" />
        <StyledParagraph>
          <h1>Lorem Ipsum</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </StyledParagraph>
      </div>
    </>
  );
};

export default App;

const StyledParagraph = styled.div`
  margin: 20px;
  padding: 20px;

  h1 {
    font-size: 24px;
    font-weight: 500;
  }
`
