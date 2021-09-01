import styled from "styled-components";

const primaryColor = "#012E5B";
const secundaryColor = "#fff";

export const ContainerSomos = styled.div`
  width: 100%;
  height: 526px;
  padding: 0 60px;
  background-color: ${primaryColor};
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
`;

export const SomosTitle = styled.h1`
  width: 100%;
  height: 50px;
  font-size: 56px;
  background-color: ${primaryColor};
  color: ${secundaryColor};
  text-align: center;
`;
export const SomosText = styled.p`
  width: 100%;
  height: 50px;
  background-color: ${primaryColor};
  color: ${secundaryColor};
  font-size: 30.4px;
  text-align: center;
`;
