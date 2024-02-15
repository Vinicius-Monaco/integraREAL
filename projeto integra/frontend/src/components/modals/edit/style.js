import styled from "styled-components"

const S = {
    Shadow: styled.div`
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.7);
    `,

    Box: styled.div`
        width: 300px;
        height: 150px;
        padding: 0 20px;
        gap: 15px;
        background-color: rgb(200, 200, 200);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
    `
}

export { S }