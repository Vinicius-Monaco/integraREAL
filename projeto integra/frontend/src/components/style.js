import styled from "styled-components"
const S = {
    div: styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
    `,

    CreateButton: styled.button`
        position: fixed;
        right: 0;
        bottom: 0;
        margin: 60px;
        width: 80px;
        height: 80px;
        background-color: green;
        border-radius: 100%;
        color: white;
        border: none;
        cursor: pointer;
        transition: .4s;
        &:hover {
            transform: scale(1.2);
        }
    `
    
}

export { S }