import Layout from "@/layout/Layout";
import { SeyfertSolicitacaoRequestService } from "@/services/SeyfertSolicitacaoRequestService";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const CadastrarSolicitacao = () => {
  const [especialidade, setEspecialidade] = useState<string>("especialidade");
  const [dataDesejada, setdataDesejada] = useState<string>("2023-01-01");
  const [horaInicial, sethoraInicial] = useState<string>("00:00");
  const [horaFinal, setHoraFinal] = useState<string>("00:00");
  const [descricao, setDescricao] = useState<string>("Uma descrição");

  function submitDados(e: any) {
    e.preventDefault();
    const dados = {
      especialidade,
      dataParaAtendimento: dataDesejada,
      horaInicial,
      horaFinal,
      descricaoSolicitacao: descricao,
    };

    SeyfertSolicitacaoRequestService.cadastrarSolicitacao(dados)
      .then((res) => {
        alert("Solicitação cadastrada");
      })
      .catch((erro) => {
        alert("Erro ao cadastrar solicitação");
      });
  }

  return (
    <Layout titleHeader="Cadastro de Solicitacao">
      <div>
        <p className={styles.p}>Cadastrar Solicitação</p>
      </div>
      <form className={styles.form} method="POST">
        <table className={styles.table}>
          <tbody>
            <tr>
              <td>
                <label className={styles.label}>Especialidade Médica </label>
              </td>
              <td>
                <input
                  className={styles.input}
                  id="especi"
                  list="especialidade"
                  onChange={(e) => setEspecialidade(e.target.value)}
                  required
                />
                <datalist id="especialidade">
                  <option value="Clínico Geral" />
                  <option value="Cardiologista" />
                  <option value="Oftalmologista" />
                  <option value="Ortopedista" />
                  <option value="Neurologista" />
                </datalist>
              </td>
            </tr>
            <tr>
              <td>
                <label className={styles.label}>Dia desejado </label>
              </td>
              <td>
                <input
                  className={styles.input}
                  type="date"
                  min={"2023-02-01"}
                  id="dia"
                  required
                  value={dataDesejada}
                  onChange={(e) => {
                    setdataDesejada(e.target.value);
                  }}
                />
              </td>
              <td>
                <label className={styles.label}>Horário Inicial </label>
              </td>
              <td>
                <input
                  className={styles.input}
                  type="time"
                  required
                  id="horario"
                  value={horaInicial}
                  onChange={(e) => sethoraInicial(e.target.value)}
                />
              </td>
              <td>
                <label className={styles.label}>Horário Final </label>
              </td>
              <td>
                <input
                  className={styles.input}
                  type="time"
                  required
                  id="horario"
                  value={horaFinal}
                  onChange={(e) => setHoraFinal(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label className={styles.label}>Informações Adicionais </label>
              </td>
              <td>
                <textarea
                  placeholder="Digite aqui o motivo de sua consulta ou algum sintoma que esteja sentindo."
                  className={styles.textarea}
                  id="infoAdicionais"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td colSpan={4}>
                <center>
                  <button
                    className={styles.button}
                    type="submit"
                    id="btnCadastrar"
                    onClick={(e) => submitDados(e)}
                  >
                    Cadastrar
                  </button>
                </center>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </Layout>
  );
}

export default CadastrarSolicitacao;