import React, { useEffect, useState } from "react";
import Linha from "./linha/Linha.jsx";
import { S } from "./style.js";
import API from "../../api/usuarioAPI";

const Tabela = (props) => {
  const [usuarios, setUsuarios] = useState(null);

  useEffect(() => {
    const getUsuarios = async () => {
      try {
        const RespostaUsuarios = await API.getAll();
        setUsuarios(RespostaUsuarios);
      } catch (error) {
        console.error("Erro ao buscar usuários:" + error);
      }
    };
    getUsuarios();
  }, []);

  const handleChildData = (opt, id) => {
    props.handleChildData(opt, id);
  };

  const handleChildDataEdit = (
    opt,
    id,
    nome,
    email,
    genero,
    pais,
    observacoes,
    maioridade
  ) => {
    props.handleChildDataEdit(
      opt,
      id,
      nome,
      email,
      genero,
      pais,
      observacoes,
      maioridade
    );
  };

  return (
    <>
      <S.Table border="1">
        <S.Thead>
          <S.Th>Nome</S.Th>
          <S.Th>E-mail</S.Th>
          <S.Th>Gênero</S.Th>
          <S.Th>País</S.Th>
          <S.Th>Maioridade</S.Th>
          <S.Th>Observações</S.Th>
          <S.Th>Ações</S.Th>
        </S.Thead>
        <tbody>
          {usuarios &&
            usuarios.map((usuario, index) => {
              const cor = index % 2 === 0 ? "#aaaaaa" : "#efefef";
              return (
                <Linha
                  id={usuario.id}
                  nome={JSON.stringify(usuario.nome)
                    .replace(/"/g, "")
                    .toUpperCase()}
                  email={JSON.stringify(usuario.email).replace(/"/g, "")}
                  genero={JSON.stringify(usuario.genero).replace(/"/g, "")}
                  pais={JSON.stringify(usuario.pais).replace(/"/g, "")}
                  observacoes={JSON.stringify(usuario.observacoes)
                    .replace(/"/g, "")
                    .toUpperCase()}
                  maioridade={usuario.maioridade}
                  bgcolor={cor}
                  sendDataToParent={handleChildData}
                  sendDataToParentEdit={handleChildDataEdit}
                />
              );
            })}
        </tbody>
      </S.Table>
    </>
  );
};

export default Tabela;
