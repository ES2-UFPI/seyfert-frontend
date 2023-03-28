import Layout from "@/layout/Layout"
import styles from "../../styles/visualizacaoDeSolicitacao.module.css"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { SeyfertSolicitacaoRequestService } from "@/services/SeyfertSolicitacaoRequestService"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ToastyFake from "@/components/toast-fake"
import { SolicitacaoResponse } from "@/types/solicitacao/SolicitacaoResponse"
import { PageResponse } from "@/types/PageResponse"


const VisualizarSolicitacoes = () => {
    const route = useRouter();
    const tipoUsuario = "MEDICO";
    const [registrosSolicitacoes, updateRegistrosPropostas] = useState<SolicitacaoResponse[]>([]);

    function mudarPagina(UUIDSolicitacao: string){
        route.push("../../solicitacao/detalhe-solicitacao/"+UUIDSolicitacao);

    }

    useEffect(() => {

        SeyfertSolicitacaoRequestService.listarSolicitacoesMedico({
            uuidMedico: 'd9da86d7-ab59-4513-8885-b54dba47f565',
            dataParaAtendimento: '2023-02-02',
            nomeEspecialidade: "Ortopedia",
            page: 0,
            size: 10
        })
      .then((res) => {
        updateRegistrosPropostas(res.data.content);
      })
      .catch((erro) => {
        alert("Falha na requisição de busca de solicitações")
      });
    }, [tipoUsuario])
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
                    {registrosSolicitacoes.map((linhaTabela, index) => {
                        return (
                            <tr>
                                <td className={styles.elementoTabela}>{linhaTabela.nomePaciente}</td>
                                <td  className={styles.elementoTabela}>{linhaTabela.dataParaAtendimento}</td>
                                <td className={styles.elementoTabela}>{linhaTabela.horaInicial}</td>
                                <td className={styles.elementoTabela}>{linhaTabela.horaFinal}</td>
                                <td className={styles.elementoTabela}>{linhaTabela.descricaoSolicitacao}</td>
                                <td className={styles.elementoTabela}><button onClick={() => alert("clicou em excluir")} name="button">Excluir</button></td>
                                <td className={styles.elementoTabela}><button onClick={() => mudarPagina(linhaTabela.uuid)} name="button">Visualizar</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
  </Layout>

    )
}

export default VisualizarSolicitacoes;