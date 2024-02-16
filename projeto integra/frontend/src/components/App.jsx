import { S } from "./style.js";
import Tabela from "../components/tabela/Tabela.jsx";
import DeletarModal from "./modals/delete/DeletarModal.jsx";
import EditarModal from "./modals/edit/EditarModal.jsx";
import { useState } from "react";

const App = () => {
  const [modalConfirmaEdicao, setModalConfirmaEdicao] = useState(false);
  const [modalConfirmaExclusao, setModalConfirmaExclusao] = useState(false);
  const [id, setId] = useState(null);
  const [nome, setNome] = useState(null);
  const [email, setEmail] = useState(null);
  const [genero, setGenero] = useState(null);
  const [pais, setPais] = useState(null);
  const [observacoes, setObservacoes] = useState(null);

  const handleChildData = (opt, id) => {
    setId(id);
    setModalConfirmaExclusao(opt);
  };

  const handleChildDataEdit = (
    opt,
    id,
    nome,
    email,
    genero,
    pais,
    observacoes
  ) => {
    setId(id);
    setNome(nome);
    setEmail(email);
    setGenero(genero);
    setPais(pais);
    setObservacoes(observacoes);
    setModalConfirmaEdicao(opt);
    console.log(id);
  };

  return (
    <S.div>
      <h1>Sistema de usuários</h1>
      <Tabela
        handleChildData={handleChildData}
        handleChildDataEdit={handleChildDataEdit}
      />
      {modalConfirmaExclusao && (
        <DeletarModal id={id} sendDataToParent={handleChildData} />
      )}
      {modalConfirmaEdicao && (
        <EditarModal
          id={id}
          nome={nome}
          email={email}
          genero={genero}
          pais={pais}
          observacoes={observacoes}
          sendDataToParent={handleChildDataEdit}
        />
      )}
    </S.div>
  );
};

export default App;
