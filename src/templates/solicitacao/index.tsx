import Layout from "@/templates/layout/Layout"
import styles from "../../styles/visualizacaoDeSolicitacao.module.css"
import Link from "next/link"
import { useRouter } from "next/router"

const VisualizacaoDeSolicitacaoTemplate = () => {
    const route = useRouter()

     function mudarPagina(){
        route.push("../../solicitacao/detalhesSolicitacao/idConsulta");

     }
    return(
        <Layout titleHeader="Listagem de Solicitações de consulta">
        <div >
            <table>
                <thead>
                <tr>
                    <th className={styles.elementoTabela}>Paciente</th>
                    <th className={styles.elementoTabela}>Data</th>
                    <th className={styles.elementoTabela}>Horário Inicial</th>
                    <th className={styles.elementoTabela}>Horário Final</th>
                    <th  className={styles.elementoTabela}>Descrição da necessidade</th>
                    <th  className={styles.elementoTabela}>Excluir</th>
                    <th  className={styles.elementoTabela}>Visualizar</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className={styles.elementoTabela}>Felipe Santiago Gama</td>
                    <td  className={styles.elementoTabela}>12/08/2002</td>
                    <td className={styles.elementoTabela}>10:00</td>
                    <td className={styles.elementoTabela}>12:00</td>
                    <td className={styles.elementoTabela}>Covid</td>
                    <td className={styles.elementoTabela}><button onClick={()=>alert("clicou em excluir")} name="button">Excluir</button></td>
                    <td className={styles.elementoTabela}><button onClick={mudarPagina} name="button">Visualizar</button></td>
                </tr>
                </tbody>
            </table>

  </div>
  </Layout>

    )
}


export default VisualizacaoDeSolicitacaoTemplate