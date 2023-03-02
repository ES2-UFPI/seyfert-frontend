import Layout from "@/templates/layout/Layout"
import styles from "../../styles/visualizacaoDeSolicitacao.module.css"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"

const VisualizacaoDeSolicitacaoTemplate = () => {
    const registroFake1 = {
        nome: "Felipe Santiago",
        data: "03/03/2023",
        horarioInicial: "10:00",
        horarioFinal: "13:00",
        descricao: "Covid",
        uuidSolicitacao: "8907d113-9496-4bf2-800a-dce95d489143"
    };
    const registroFake2 = {
        nome: "Járdesson Ribeiro",
        data: "03/03/2023",
        horarioInicial: "11:00",
        horarioFinal: "12:00",
        descricao: "Dor nas costas",
        uuidSolicitacao: "2207d113-9496-4bf2-800a-dce95d489144"
    };

    const tipoUsuario = "MEDICO";

    const registros = [registroFake1, registroFake2, registroFake1]

    const [registrosPropostas, updateRegistrosPropostas] = useState<any[]>(registros);

    const route = useRouter()

     function mudarPagina(UUIDSolicitacao: string){
        route.push("../../solicitacao/detalhe-solicitacao/"+UUIDSolicitacao);

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
                    {registrosPropostas.map((linhaTabela, index) => {
                        return (
                            <tr>
                                <td className={styles.elementoTabela}>{linhaTabela.nome}</td>
                                <td  className={styles.elementoTabela}>{linhaTabela.data}</td>
                                <td className={styles.elementoTabela}>{linhaTabela.horarioInicial}</td>
                                <td className={styles.elementoTabela}>{linhaTabela.horarioFinal}</td>
                                <td className={styles.elementoTabela}>{linhaTabela.descricao}</td>
                                <td className={styles.elementoTabela}><button onClick={() => alert("clicou em excluir")} name="button">Excluir</button></td>
                                <td className={styles.elementoTabela}><button onClick={() => mudarPagina(linhaTabela.uuidSolicitacao)} name="button">Visualizar</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
  </Layout>

    )
}


export default VisualizacaoDeSolicitacaoTemplate