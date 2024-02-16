import { useRef, useState, useEffect } from "react";
import { S } from "./style";
import API from "../../../api/usuarioAPI";

const EditarModal = (props) => {
  const inputPais = useRef(null);
  const inputNome = useRef(null);
  const inputEmail = useRef(null);
  const inputObservacoes = useRef(null);
  const [generoNovo, setGeneroNovo] = useState("");
  const [maioridadeNovo, setMaioridadeNovo] = useState(null);

  return (
    <S.Shadow>
      <S.Box>
        <h1>Editar Usuário</h1>
        <S.Form
          onSubmit={(e) => {
            console.log(maioridadeNovo);
            try {
              API.update(
                props.id,
                inputNome.current.value,
                inputEmail.current.value,
                generoNovo.replace(/"/g, ""),
                inputPais.current.value.replace(/"/g, ""),
                inputObservacoes.current.value,
                maioridadeNovo
              );
            } catch (err) {
              console.log(err);
            }
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <label style={{ marginLeft: "5px" }}>Nome</label>
            <S.InputText
              type="text"
              placeholder={props.nome}
              ref={inputNome}
              required
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <label style={{ marginLeft: "5px" }}>E-mail</label>
            <S.InputText
              type="text"
              placeholder={props.email}
              ref={inputEmail}
              required
            />
          </div>
          <S.InputRadioArea>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <S.InputRadio
                type="radio"
                value={"MASCULINO"}
                name="radio"
                onClick={() => {
                  setGeneroNovo('"MASCULINO"');
                }}
              />
              <label>Masculino</label>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <S.InputRadio
                type="radio"
                value={"FEMININO"}
                name="radio"
                onClick={() => {
                  setGeneroNovo('"FEMININO"');
                }}
              />
              <label>Feminino</label>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <S.InputRadio
                type="radio"
                value={"NAO_BINARIO"}
                name="radio"
                onClick={() => {
                  setGeneroNovo('"NAO_BINARIO"');
                }}
              />
              <label>Não binário</label>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <S.InputRadio
                type="radio"
                value={"NAO_INFORMAR"}
                name="radio"
                onClick={() => {
                  setGeneroNovo('"NÃO_INFORMADO"');
                }}
              />
              <label>Não informar</label>
            </div>
          </S.InputRadioArea>
          <S.Flex>
            <div style={{ width: "70%", height: "100%" }}>
              <label>Observações</label>
              <S.TextArea
                required
                placeholder={props.observacoes}
                ref={inputObservacoes}
              ></S.TextArea>
            </div>
            <S.DivRight>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  justifyContent: "end",
                }}
              >
                <label>PAÍS: </label>
                <S.Select ref={inputPais}>
                  <S.Option value={'"BRASIL"'}>BRASIL</S.Option>

                  <S.Option value={"ARGENTINA"}>ARGENTINA</S.Option>

                  <S.Option value={"URUGUAI"}>URUGUAI</S.Option>

                  <S.Option value={"PARAGUAI"}>PARAGUAI</S.Option>

                  <S.Option value={"CHILE"}>CHILE</S.Option>

                  <S.Option value={"BOLIVIA"}>BOLIVIA</S.Option>

                  <S.Option value={"EQUADOR"}>EQUADOR</S.Option>

                  <S.Option value={"COLOMBIA"}>COLOMBIA</S.Option>

                  <S.Option value={"VENEZUELA"}>VENEZUELA</S.Option>

                  <S.Option value={"PERU"}>PERU</S.Option>

                  <S.Option value={"GUIANA"}>GUIANA</S.Option>

                  <S.Option value={"SURINAME"}>SURINAME</S.Option>

                  <S.Option value={"GUIANA_FRANCESA"}>GUIANA_FRANCESA</S.Option>
                </S.Select>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <label>Maior de idade </label>
                <S.InputCheck
                  type="checkbox"
                  checked={maioridadeNovo}
                  onChange={(e) => {
                    setMaioridadeNovo(e.target.checked);
                  }}
                />
              </div>
            </S.DivRight>
          </S.Flex>
          <div
            style={{
              display: "flex",
              gap: "10px",
              width: "100%",
              justifyContent: "end",
            }}
          >
            <S.Button type="submit">ENVIAR</S.Button>
            <S.Button
              onClick={() => {
                window.location.reload();
              }}
            >
              CANCELAR
            </S.Button>
          </div>
        </S.Form>
      </S.Box>
    </S.Shadow>
  );
};

export default EditarModal;
