import { S } from "./style.js";
import Tabela from "../components/tabela/Tabela.jsx";
import DeletarModal from "./modals/delete/DeletarModal.jsx";
import EditarModal from "./modals/edit/EditarModal.jsx";
import { useState } from "react";

const App = () => {
  const [modalConfirmaEdicao, setModalConfirmaEdicao] = useState(false);
  const [modalConfirmaExclusao, setModalConfirmaExclusao] = useState(false);
  const [modalConfirmaInsercao, setModalConfirmaInsercao] = useState(false);
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
      <S.CreateButton title="INSERIR USUÁRIO">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-person-plus"
          viewBox="0 0 16 16"
        >
          <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
          <path
            fill-rule="evenodd"
            d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5"
          />
        </svg>
      </S.CreateButton>
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
          observacoes={observacoes}
          sendDataToParent={handleChildDataEdit}
        />
      )}
    </S.div>
  );
};

export default App;
