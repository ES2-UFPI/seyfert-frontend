import Layout from "@/layout/Layout";
import styles from "./listarConsultas.module.css";
import Link from "next/link";
import { useRouter } from "next/router";


const listarConsultas = () => {
  const route = useRouter();

  return (
    <Layout titleHeader="Listagem de Consulta">
      <div>
        <table border={1} className={styles.tabela}>
          <tbody>
            <tr className={styles.linhaTabela}>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td colSpan={3} width={"100%"}>
                        Psicologo(a) Júlia dos Santos
                      </td>
                    </tr>
                    <tr>
                      <td width={"30%"}>Horário: 13:50</td>
                      <td width={"30%"}>Data: 24/02/23</td>
                      <td width={"30%"}>
                        <button
                          onClick={() => alert("clicou em ver detalhes")}
                          name="button"
                        >
                          Ver detalhes
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td width={"50%"}>Valor: R$ 200</td>
                      <td width={"50%"}>Situação: Pago</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr className={styles.linhaTabela}>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td colSpan={3} width={"100%"}>
                        Oftalmologista João Silva
                      </td>
                    </tr>
                    <tr>
                      <td width={"30%"}>Horário: 17:50</td>
                      <td width={"30%"}>Data: 28/02/23</td>
                      <td width={"30%"}>
                        <button
                          onClick={() => alert("clicou em ver detalhes")}
                          name="button"
                        >
                          Ver detalhes
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td width={"50%"}>Valor: R$ 150</td>
                      <td width={"50%"}>Situação: Pagamento Pendente</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr className={styles.linhaTabela}>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td colSpan={3} width={"100%"}>
                        Cardiologista Joaquim Freitas
                      </td>
                    </tr>
                    <tr>
                      <td width={"30%"}>Horário: 8:20</td>
                      <td width={"30%"}>Data: 02/03/23</td>
                      <td width={"30%"}>
                        <button
                          onClick={() => alert("clicou em ver detalhes")}
                          name="button"
                        >
                          Ver detalhes
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td width={"50%"}>Valor: R$ 220</td>
                      <td width={"50%"}>Situação: Finalizada</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

listarConsultas.getLayout = function getLayout(page: JSX.Element) {
  return page;
};

export default listarConsultas;
