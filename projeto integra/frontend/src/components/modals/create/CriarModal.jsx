import { useRef, useState } from "react";
import { S } from "./style";
import API from "../../../api/usuarioAPI";

const CriarModal = () => {
  const inputNome = useRef(null);
  const inputEmail = useRef(null);
  const inputObservacoes = useRef(null);
  const inputPais = useRef(null);
  const [maioridade, setMaioridade] = useState(null);
  const [genero, setGenero] = useState("NÃO INFORMADO");
  return (
    <S.Shadow>
      <S.Box>
        <h1>Inserir Usuário</h1>
        <S.Form
          onSubmit={(e) => {
            try {
              API.create(
                inputNome.current.value,
                inputEmail.current.value,
                genero.replace(/"/g, ""),
                inputPais.current.value.replace(/"/g, ""),
                inputObservacoes.current.value,
                maioridade
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
              placeholder={"Nome"}
              ref={inputNome}
              required
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <label style={{ marginLeft: "5px" }}>E-mail</label>
            <S.InputText
              type="text"
              placeholder={"E-mail"}
              ref={inputEmail}
              required
            />
          </div>
          <S.InputRadioArea>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <S.InputRadio
                type="radio"
                name="radio"
                onClick={() => {
                  setGenero('"MASCULINO"');
                }}
              />
              <label>Masculino</label>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <S.InputRadio
                type="radio"
                name="radio"
                onClick={() => {
                  setGenero('"FEMININO"');
                }}
              />
              <label>Feminino</label>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <S.InputRadio
                type="radio"
                name="radio"
                onClick={() => {
                  setGenero('"NÃO BINÁRIO"');
                }}
              />
              <label>Não binário</label>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <S.InputRadio
                type="radio"
                name="radio"
                defaultChecked
                onClick={() => {
                  setGenero('"NÃO INFORMADO"');
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
                placeholder={"Observações"}
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
                  checked={maioridade}
                  onChange={(e) => {
                    setMaioridade(e.target.checked);
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

export default CriarModal;
