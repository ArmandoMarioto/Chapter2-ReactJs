import styled from "styled-components";

const TitleComponent = styled.h1`
  font-size: 60px;
  color: #8257e6
`;

export function App() {
  return (
    <div className="App">
      <TitleComponent>Hello World</TitleComponent>
    </div>
  );
}
