import styled from "styled-components";

const primaryColor = `#012E5B`

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ContainerItem = styled.div`
  width: 540px;
  height: 960px;
  padding: 0 0 32px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ImageItem = styled.img`
  width: 450px;
  height: 450px;
  background-repeat: cover;
`;
export const TitleItem = styled.h3`
  color: ${primaryColor};
  text-align: center;
  width: 100%;
`;
export const ContainerDescription = styled.div`
  width: 450px;
  /* text-align: center; */
`;
export const Description = styled.p`
  width: 100%;
  color: #727272;
  font-size: 20.8px;
`;

