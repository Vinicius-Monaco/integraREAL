import { useState } from "react";
import { S } from "./style";

const EditarModal = (props) => {
  const [generoAntigo, setGeneroAntigo] = useState(props.genero);
  const [paisAntigo, setPaisAntigo] = useState(props.pais);
  const [nomeNovo, setNomeNovo] = useState(null);
  const [emailNovo, setEmailNovo] = useState(null);
  const [generoNovo, setGeneroNovo] = useState(null);
  const [paisNovo, setPaisNovo] = useState(null);

  console.log(paisAntigo);

  return (
    <S.Shadow>
      <S.Box>
        <h1>Editar Usuário</h1>
        <S.Form>
          <S.InputText type="text" placeholder={props.nome} />
          <S.InputText type="text" placeholder={props.email} />
          <S.InputRadioArea>
            <div>
              <S.InputRadio
                type="radio"
                value={"MASCULINO"}
                checked={
                  generoAntigo === '"MASCULINO"' || generoNovo === '"MASCULINO"'
                }
                onClick={() => {
                  setGeneroNovo('"MASCULINO"');
                  setGeneroAntigo(null);
                }}
              />
              <label>Masculino</label>
            </div>
            <div>
              <S.InputRadio
                type="radio"
                value={"FEMININO"}
                checked={
                  props.genero === '"FEMININO"' || generoNovo === '"FEMININO"'
                }
                onClick={() => {
                  setGeneroNovo('"FEMININO"');
                  setGeneroAntigo(null);
                }}
              />
              <label>Feminino</label>
            </div>
            <div>
              <S.InputRadio
                type="radio"
                value={"NAO_BINARIO"}
                checked={
                  props.genero === '"NAO_BINARIO"' ||
                  generoNovo === '"NAO_BINARIO"'
                }
                onClick={() => {
                  setGeneroNovo('"NAO_BINARIO"');
                  setGeneroAntigo(null);
                }}
              />
              <label>Não binário</label>
            </div>
          </S.InputRadioArea>
          <S.Flex>
            <S.TextArea placeholder={props.observacoes}></S.TextArea>
            <div>
              <label>PAÍS: </label>
              <S.Select>
                <S.Option value={paisAntigo}>{paisAntigo}</S.Option>
                {paisAntigo !== '"BRASIL"' && (
                  <S.Option value={'"BRASIL"'}>BRASIL</S.Option>
                )}
                ){paisAntigo !== '"ARGENTINA"'} && (
                <S.Option value={"ARGENTINA"}>ARGENTINA</S.Option>
                {paisAntigo !== '"URUGUAI"' && (
                  <S.Option value={"URUGUAI"}>URUGUAI</S.Option>
                )}
                {paisAntigo !== '"PARAGUAI"' && (
                  <S.Option value={"PARAGUAI"}>PARAGUAI</S.Option>
                )}
                {paisAntigo !== '"CHILE"' && (
                  <S.Option value={"CHILE"}>CHILE</S.Option>
                )}
                {paisAntigo !== '"BOLIVIA"' && (
                  <S.Option value={"BOLIVIA"}>BOLIVIA</S.Option>
                )}
                {paisAntigo !== '"EQUADOR"' && (
                  <S.Option value={"EQUADOR"}>EQUADOR</S.Option>
                )}
                {paisAntigo !== '"COLOMBIA"' && (
                  <S.Option value={"COLOMBIA"}>COLOMBIA</S.Option>
                )}
                {paisAntigo !== '"VENEZUELA"' && (
                  <S.Option value={"VENEZUELA"}>VENEZUELA</S.Option>
                )}
                {paisAntigo !== '"PERU"' && (
                  <S.Option value={"PERU"}>PERU</S.Option>
                )}
                {paisAntigo !== '"GUIANA"' && (
                  <S.Option value={"GUIANA"}>GUIANA</S.Option>
                )}
                {paisAntigo !== '"SURINAME"' && (
                  <S.Option value={"SURINAME"}>SURINAME</S.Option>
                )}
                {paisAntigo !== '"GUIANA_FRANCESA"' && (
                  <S.Option value={"GUIANA_FRANCESA"}>GUIANA_FRANCESA</S.Option>
                )}
                {paisAntigo !== '"PERU"' && (
                  <S.Option value={"PERU"}>PERU</S.Option>
                )}
              </S.Select>
            </div>
          </S.Flex>
        </S.Form>
      </S.Box>
    </S.Shadow>
  );
};

export default EditarModal;
