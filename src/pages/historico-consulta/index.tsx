import Layout from "@/layout/Layout";
import styles from "./historicoConsulta.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const historicoConsulta = () => {
  const route = useRouter();

  return (
    <Layout titleHeader="Histórico de Consultas">
      <div>
        <table className={styles.tabela}>
          <tbody>
            <tr>
              <td colSpan={6}>
                <center>
                  <p className={styles.data}>08/02/2023</p>
                </center>
              </td>
            </tr>
            <tr>
              <td width={"25%"} className={styles.coluna}>
                <h4>Médico</h4>
              </td>
              <td width={"13%"} className={styles.coluna}>
                <h4>Especialidade</h4>
              </td>
              <td width={"13%"} className={styles.coluna}>
                <h4>Horário</h4>
              </td>
              <td width={"13%"} className={styles.coluna}>
                <h4>Valor</h4>
              </td>
              <td width={"26%"} className={styles.coluna}>
                <h4>Diagnóstico</h4>
              </td>
            </tr>
            <tr>
              <td className={styles.coluna}>João da Silva Silveira</td>
              <td className={styles.coluna}>Oftalmologista</td>
              <td className={styles.coluna}>11:20</td>
              <td className={styles.coluna}>Retorno</td>
              <td className={styles.coluna}>
                O paciente está continua com um cisco no olho
              </td>
              <td className={styles.coluna}>
                <button className={styles.botao}>Visualizar Consulta</button>
              </td>
            </tr>
            <tr>
              <td className={styles.coluna}>Mariana Santana dos Santos</td>
              <td className={styles.coluna}>Psicóloga</td>
              <td className={styles.coluna}>09:00</td>
              <td className={styles.coluna}>R$200,00</td>
              <td className={styles.coluna}>O paciente parece ser paranóico</td>
              <td className={styles.coluna}>
                <button className={styles.botao}>Visualizar Consulta</button>
              </td>
            </tr>
            <tr>
              <td className={styles.coluna}>Joaquim de Aquino</td>
              <td className={styles.coluna}>Cardiologista</td>
              <td className={styles.coluna}>18:00</td>
              <td className={styles.coluna}>R$120,00</td>
              <td className={styles.coluna}>
                O paciente está com o coração em bom estado
              </td>
              <td className={styles.coluna}>
                <button className={styles.botao}>Visualizar Consulta</button>
              </td>
            </tr>
            <tr>
              <td colSpan={6}>
                <center>
                  <p className={styles.data}>01/02/2023</p>
                </center>
              </td>
            </tr>
            <tr>
              <td width={"25%"} className={styles.coluna}>
                <h4>Médico</h4>
              </td>
              <td width={"13%"} className={styles.coluna}>
                <h4>Especialidade</h4>
              </td>
              <td width={"13%"} className={styles.coluna}>
                <h4>Horário</h4>
              </td>
              <td width={"13%"} className={styles.coluna}>
                <h4>Valor</h4>
              </td>
              <td width={"26%"} className={styles.coluna}>
                <h4>Diagnóstico</h4>
              </td>
            </tr>
            <tr>
              <td className={styles.coluna}>João da Silva Silveira</td>
              <td className={styles.coluna}>Oftalmologista</td>
              <td className={styles.coluna}>16:40</td>
              <td className={styles.coluna}>R$150,00</td>
              <td className={styles.coluna}>
                O paciente está com um cisco no olho
              </td>
              <td className={styles.coluna}>
                <button className={styles.botao}>Visualizar Consulta</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
};


export default historicoConsulta;
