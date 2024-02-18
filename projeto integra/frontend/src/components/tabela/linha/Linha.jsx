import { S } from "./style.js";

const Linha = (props) => {
  const sendDataToParent = (opt, id) => {
    props.sendDataToParent(opt, id);
  };

  const sendDataToParentEdit = (opt) => {
    props.sendDataToParentEdit(
      opt,
      props.id,
      props.nome,
      props.email,
      props.genero,
      props.pais,
      props.observacoes,
      props.maioridade
    );
  };

  return (
    <>
      <S.Tr bgcolor={props.bgcolor}>
        <S.Td>{props.nome}</S.Td>
        <S.Td>{props.email}</S.Td>
        <S.Td>{props.genero}</S.Td>
        <S.Td>{props.pais}</S.Td>
        <S.Td>{props.maioridade ? "SIM" : "NÃO"}</S.Td>
        <S.Td>
          {props.observacoes == "" ? "SEM OBSERVAÇÕES" : props.observacoes}
        </S.Td>
        <S.Td align="center">
          <S.ButtonContainer>
            <S.Button
              bgcolor="rgba(255, 229, 31, 0.8)"
              title="EDITAR USUÁRIO"
              onClick={() => sendDataToParentEdit(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
              </svg>
            </S.Button>
            <S.Button
              bgcolor="rgba(255, 57, 43, 0.8)"
              title="EXCLUIR USUÁRIO"
              onClick={() => sendDataToParent(true, props.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
              </svg>
            </S.Button>
          </S.ButtonContainer>
        </S.Td>
      </S.Tr>
    </>
  );
};

export default Linha;
