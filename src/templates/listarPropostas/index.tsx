import Layout from "@/components/layout/Layout";
import styles from "../../styles/listarPropostas.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { useRouter } from "next/router";

const ListarPropostasTemplate = () => {
  const route = useRouter();

  return (
    <Layout titleHeader="Listagem de Propostas em Solicitações de Consulta">
      <div>
        <table>
          <thead>
            <tr>
              <th className={styles.elementoTabela}>Solicitação</th>
              <th className={styles.elementoTabela}>Médico</th>
              <th className={styles.elementoTabela}>Avaliação</th>
              <th className={styles.elementoTabela}>Horários</th>
              <th className={styles.elementoTabela}>Datas</th>
              <th className={styles.elementoTabela}>Valores</th>
              <th className={styles.elementoTabela}>Visualizar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.elementoTabela} rowSpan={4}>
                Oftalmologista entre os dias 16/02/2022 até 27/02/2022 e entre
                os valores R$ 100 e R$ 500
              </td>
              <td className={styles.elementoTabela} rowSpan={3}>
                João
              </td>
              <td className={styles.elementoTabela} rowSpan={3}>
                8.5/10
              </td>
              <td className={styles.elementoTabela}>18:30 até 20:00</td>
              <td className={styles.elementoTabela}>
                18/02/2022 até 23/02/2022
              </td>
              <td className={styles.elementoTabela}>R$200</td>
              <td className={styles.botaoVisualizar}>
                <button
                  onClick={() => alert("clicou em visualizar")}
                  name="button"
                >
                  Visualizar Proposta
                </button>
              </td>
            </tr>
            <tr>
              <td className={styles.elementoTabela}>19:40 até 20:00</td>
              <td className={styles.elementoTabela}>
                19/02/2022 até 23/02/2022
              </td>
              <td className={styles.elementoTabela}>R$200</td>
              <td className={styles.botaoVisualizar}>
                <button
                  onClick={() => alert("clicou em visualizar")}
                  name="button"
                >
                  Visualizar Proposta
                </button>
              </td>
            </tr>
            <tr>
              <td className={styles.elementoTabela}>20:00 até 20:30</td>
              <td className={styles.elementoTabela}>
                23/02/2022 até 23/02/2022
              </td>
              <td className={styles.elementoTabela}>R$250</td>
              <td className={styles.botaoVisualizar}>
                <button
                  onClick={() => alert("clicou em visualizar")}
                  name="button"
                >
                  Visualizar Proposta
                </button>
              </td>
            </tr>
            <tr>
              <td className={styles.elementoTabela}>Paulo</td>
              <td className={styles.elementoTabela}>7.0/10</td>
              <td className={styles.elementoTabela}>17:30 até 18:30</td>
              <td className={styles.elementoTabela}>
                25/02/2022 até 25/02/2022
              </td>
              <td className={styles.elementoTabela}>R$180</td>
              <td className={styles.botaoVisualizar}>
                <button
                  onClick={() => alert("clicou em visualizar")}
                  name="button"
                >
                  Visualizar Proposta
                </button>
              </td>
            </tr>
            <tr>
              <td className={styles.elementoTabela}>
                Psicólogo das 23:00 até 23:59, entre os dias 16/02/2022 até
                16/02/2022 e entre os valores R$ 100 e R$ 150
              </td>
              <td colSpan={6}>
                <center>Sem propostas recebidas</center>
              </td>
            </tr>
            <tr>
              <td className={styles.elementoTabela} rowSpan={2}>
                Pediatra das 0:00 até 23:59, entre os dias 17/02/2022 até
                17/02/2022 e entre os valores R$ 100 e R$ 200
              </td>
              <td className={styles.elementoTabela}>Maria</td>
              <td className={styles.elementoTabela}>9.0/10</td>
              <td className={styles.elementoTabela}>15:30 até 18:00</td>
              <td className={styles.elementoTabela}>
                17/02/2022 até 17/02/2022
              </td>
              <td className={styles.elementoTabela}>R$180</td>
              <td className={styles.botaoVisualizar}>
                <button
                  onClick={() => alert("clicou em visualizar")}
                  name="button"
                >
                  Visualizar Proposta
                </button>
              </td>
            </tr>
            <tr>
              <td className={styles.elementoTabela}>Joaquim</td>
              <td className={styles.elementoTabela}>9.0/10</td>
              <td className={styles.elementoTabela}>17:30 até 19:00</td>
              <td className={styles.elementoTabela}>
                17/02/2022 até 17/02/2022
              </td>
              <td className={styles.elementoTabela}>R$190</td>
              <td className={styles.botaoVisualizar}>
                <button
                  onClick={() => alert("clicou em visualizar")}
                  name="button"
                >
                  Visualizar Proposta
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default ListarPropostasTemplate;
