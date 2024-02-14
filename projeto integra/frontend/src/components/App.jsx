import { S } from "./style.js"
import Tabela from "../components/tabela/Tabela.jsx"
import DeletarModal from "./modals/delete/DeletarModal.jsx"
import { useState } from "react"

const App = () => {

    const [modalConfirmaExclusao, setModalConfirmaExclusao] = useState(false)
    const [id, setId] = useState(null)

    const handleChildData = (opt, id) => {
        setId(id)
        setModalConfirmaExclusao(opt)
    }

    return (
        <S.div>
            <h1>Sistema de usuários</h1>
            <Tabela handleChildData={handleChildData} />
            {modalConfirmaExclusao && <DeletarModal id={id} sendDataToParent={handleChildData} />}
        </S.div>
    )
}

export default App