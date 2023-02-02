import Layout from "@/components/layout/Layout";
import styles from "./styles.module.css";
import { teste } from "./javascript";
const CadastrarSolicitacaoTemplate = () => {
  return (
    <Layout titleHeader="Cadastro de Solicitacao">
      <p className={styles.p}>Cadastrar Solicitação</p>
      <form className={styles.form} method="POST">
        <table className={styles.table}>
          <tr>
            <td>
              <label className={styles.label}>Especialidade Médica </label>
            </td>
            <td>
              <input className={styles.input} id="especi" list="especialidade" required />
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
              />
            </td>
            <td>
              <label className={styles.label}>Horário desejado </label>
            </td>
            <td>
              <input
                className={styles.input}
                type="time"
                required
                id="horario"
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
              />
            </td>
          </tr>
          <tr>
            <td colSpan={4}>
              <center>
                <button className={styles.button} type="submit" id="btnCadastrar">
                  Cadastrar
                </button>
              </center>
            </td>
          </tr>
        </table>
      </form>
    </Layout>
  );
};

export default CadastrarSolicitacaoTemplate;
