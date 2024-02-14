import API from "../../../api/usuarioAPI"
import { S } from "./style"
import { useState } from "react";

const DeletarModal = (props) => {
    const [showModal, setShowModal] = useState(props.setModal)

    const confirmaExclusao = (opt) => {
        if (opt) {
            API.delete(props.id)
            console.log("Usuário excluído")
            window.location.reload(false)
        } else {
            console.log("Usuário não excluído")
        }
        setShowModal(false)
        props.sendDataToParent(showModal, props.id)
    }

    return (
        <S.Shadow>
            <S.Box>
                <h1>Você tem certeza?</h1>
                <S.BtnArea>
                    <S.Button onClick={() => confirmaExclusao(true)} bgColor="#469cff" color="#ededed">SIM</S.Button>
                    <S.Button onClick={() => confirmaExclusao(false)} bgColor="#ededed" color="#469cff">NÃO</S.Button>
                </S.BtnArea>
            </S.Box>
        </S.Shadow>
    )
}

export default DeletarModal;
