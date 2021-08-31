import styled, {css} from 'styled-components'

const flexCenter = css `
    display:flex;
    justify-content: center;
    align-items: center;
`
export const HeaderMain = styled.div `
    background-color: #012E5B;;
    width: 100vw;
    height: 100px;
    ${flexCenter}

        &:hover{
            color: white;
            background-Color: red;
        }
`;

export const ContainerOne = styled.div `
    background-color: blue;
    width: 50%;
    /* height: 200px; */
    color: red;
    ${flexCenter}
`;

export const ContainerTwo = styled.div `
    background-color: orange;
    width: 50%;
    /* height: 200px; */
    list-style: none;
    ${flexCenter}
`;
export const UlHeader = styled.div `
    list-style: none;
    display:flex;
`;
export const LiHeader = styled.div `
    list-style: none;
    color: #fff;
`;

