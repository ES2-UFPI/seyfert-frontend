import Layout from "@/templates/layout/Layout";
import styles from "../../styles/listarConsultas.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { useRouter } from "next/router";

const ListarConsultasTemplate = () => {
  const route = useRouter();

  return (
    <Layout titleHeader="Listagem de Consulta">
      <div>
        <table border={1} className={styles.tabela}>
          <tr className={styles.linhaTabela}>
            <td>
              <table>
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
              </table>
            </td>
          </tr>
          <tr className={styles.linhaTabela}>
            <td>
              <table>
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
              </table>
            </td>
          </tr>
          <tr className={styles.linhaTabela}>
            <td>
              <table>
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
              </table>
            </td>
          </tr>
        </table>
      </div>
    </Layout>
  );
};

export default ListarConsultasTemplate;