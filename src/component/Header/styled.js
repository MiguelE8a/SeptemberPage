import styled{css} from 'styled-components'

const flexCenter = css `
    display:flex;
    justify-content: center;
    align-items: center;
`
export const HeaderMain = styled.div `
    background-color: #ccc;
    width: 100vw;
    height: 200px;
    display: flex;

        &:hover{
            color: white;
            background-Color: red;
            
        }
`;

export const ContainerOne = styled.div `
    background-color: blue;
    width: 100px;
    height: 200px;
    color: red;
    ${flexCenter}
`;

export const ContainerTwo = styled.div `
    background-color: green;
    width: 50%;
    height: 200px;
    
`;
