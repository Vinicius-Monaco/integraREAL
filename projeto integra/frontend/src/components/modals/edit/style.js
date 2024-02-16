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
        width: 450px;
        height: 350px;
        padding: 0 20px;
        gap: 15px;
        background-color: rgb(200, 200, 200);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
    `,

    Form: styled.form`
        width: 100%;
        height: 250px;
        display: flex;
        flex-direction: column;
        gap: 19px;
    `,

    InputText: styled.input`
        width: 100%;
        height: 20px;
    `,

    Flex: styled.div`
        display: flex;
        justify-content: space-around;
        width: 100%;
        align-items: center;
        height: 100%;
    `,

    Select: styled.select`
        width: 60%;
        height: 15%;
`,

    TextArea: styled.textarea`
        width: 40%;
        height: 100%;
        resize: none;
    `,

    Option: styled.option`
        width: 100%;
    `,

    InputRadio: styled.input`
        
    `,

    InputRadioArea: styled.div`
        display: flex;
        justify-content: space-evenly;
    `
}

export { S }