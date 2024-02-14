import React, { useEffect, useState } from "react"
import Linha from "./linha/Linha.jsx"
import { S } from "./style.js"
import API from "../../api/usuarioAPI"

const Tabela = (props) => {
    const [usuarios, setUsuarios] = useState(null);
    const [modalConfirmaExclusao, setModalConfirmaExclusao] = useState(false)
    const [id, setId] = useState(null)

    useEffect(() => {
        const getUsuarios = async () => {
            try {
                const RespostaUsuarios = await API.getAll()
                setUsuarios(RespostaUsuarios)
            } catch (error) {
                console.error("Erro ao buscar usuários:" + error)
            }
        }
        getUsuarios()
    }, [])

    const handleChildData = (opt, id) => {
        setId(id)
        setModalConfirmaExclusao(opt)
        props.handleChildData(opt, id)
    }

    return (
        <>
            <S.Table border="1">
                <S.Thead>
                    <S.Th>Nome</S.Th>
                    <S.Th>E-mail</S.Th>
                    <S.Th>Gênero</S.Th>
                    <S.Th>País</S.Th>
                    <S.Th>Data de Nascimento</S.Th>
                    <S.Th>Ações</S.Th>
                </S.Thead>
                <tbody>
                    {usuarios && usuarios.map((usuario, index) => {
                        const cor = index % 2 === 0 ? "#b3b3b3" : "#e6e4e3"
                        return (
                            <Linha
                                id={usuario.id}
                                nome={JSON.stringify(usuario.nome)}
                                email={JSON.stringify(usuario.email)}
                                genero={JSON.stringify(usuario.genero)}
                                pais={JSON.stringify(usuario.pais)}
                                dataNascimento={JSON.stringify(usuario.dataNascimento)}
                                bgColor={cor}
                                sendDataToParent={handleChildData}
                            />
                        )
                    })}
                </tbody>
            </S.Table>
        </>

    );
}

export default Tabela;
