import styled, { css } from "styled-components";

const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const secundaryColor = `yellow;`;

export const HeaderMain = styled.div`
  background-color: #012e5b;
  width: 100vw;
  height: 104px;
  ${flexCenter}

  &:hover {
    color: white;
    background-color: red;
  }
`;

export const ContainerOne = styled.div`
  /* background-color: blue; */
  width: 50%;
  height: 100%;
  color: ${secundaryColor};
  ${flexCenter}
`;

export const ContainerTwo = styled.div`
  /* background-color: orange; */
  width: 50%;
  height: 100%;
  list-style: none;
  ${flexCenter}
`;
export const UlHeader = styled.div`
  list-style: none;
  display: flex;
`;
export const LiHeader = styled.div`
  list-style: none;
  color: ${secundaryColor};
`;
