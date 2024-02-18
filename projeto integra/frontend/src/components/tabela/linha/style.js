import styled from "styled-components"

const S = {
    Tr: styled.tr`
        height: 35px;
        background-color: ${props => props.bgcolor};
    `,

    Td: styled.td`
        padding-left: 4px;
    `,

    ButtonContainer: styled.div`
        display: flex;
        justify-content: center;
        gap: 10px;
    `,

    Button: styled.button`
        height: 25px;
        width: 25px;
        background-color: ${props => props.bgcolor};
        cursor: pointer;
        border: 1px solid black;
        border-radius: 6px;
        transition: .3s;
        &:hover {
            border-color: ${props => props.bgcolor};
            background-color: white;
            color: ${props => props.bgcolor}
        }
    `,
    
    PopUpExclusao: styled.div`
        width: 100px;
        height: 100px;
    `
}

export { S }