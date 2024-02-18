import styled from "styled-components"

const S = {
    Shadow: styled.div`
        position: fixed; 
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.7);
    `,

    Box: styled.div`
        width: 450px;
        height: 420px;
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
        height: 300px;
        display: flex;
        flex-direction: column;
        gap: 19px;
    `,

    InputText: styled.input`
        width: 100%;
        height: 20px;
        outline: none;
        border: none;
        padding: 5px;
        border-radius: 5px;
    `,

    Flex: styled.div`
        display: flex;
        height: 100%;
        justify-content: space-between;
        width: 100%;
        align-items: center;
        height: 100%;
    `,

    Select: styled.select`
        width: 60%;
        height: 15%;
        padding: 5px;
        outline: none;
        border: none;
        border-radius: 5px;
`,

    TextArea: styled.textarea`
        width: 100%;
        height: 100%;
        padding: 5px;
        border-radius: 5px;
        border: none;
        outline: none;
        resize: none;
        display: flex;
        flex-direction: column;
        gap: 2px;
    `,

    Option: styled.option`
        width: 100%;
    `,

    InputRadio: styled.input`
        
    `,

    InputCheck: styled.input`
    width: 15px;
    height: 15px;
    `,

    InputRadioArea: styled.div`
        display: flex;
        justify-content: space-evenly;
    `,

    DivRight: styled.div`
        display: flex;
        gap: 15px;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
    `,

    Button: styled.button`
        padding: 3px 4px;
        cursor: pointer;
    `


}

export { S }