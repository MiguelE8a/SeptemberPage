import styled from 'styled-components'
const primaryColor = `#012E5B`
const secundayColor = '#fff'

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
  font-size: 36px;
`;
export const ContainerDescription = styled.div`
  width: 450px;
  /* text-align: center; */
`;
export const Description = styled.p`
  width: 100%;
  color: #727272;
  font-size: 20.8px;
  text-align: justify;
`;
export const ContaienrDescriptionList = styled.ul`
width: 100%;
`;
export const DescriptionList = styled.li`
  width: 100%;
  color: #727272;
  font-size: 20.8px;
`;

export const ContainerButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center
`;
export const ButtonMeInteresa = styled.button`
  width: 297px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${primaryColor};
  padding: 12px 20px;
  background-color: ${secundayColor};
  border: 4px solid ${primaryColor};
  font-size: 20px;

  &:hover{
    background-color: ${primaryColor};
    color: ${secundayColor};
  }
`;




