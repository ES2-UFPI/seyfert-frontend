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
    
    const solicitacao = {
        uuid: 'f7da86d7-ab59-4513-8885-b54dba47f142',
        dataParaAtendimento: '2023-03-01',
        horaInicial: '10:00',
        horaFinal: '10:30',
        descricaoSolicitacao:"Dor nas costas",
        nomePaciente: "Matheus Webber",
        nomeEspecialidade: "Ortopedia",
        sexoPreferivelDoAtendimento: "MASCULINO",
        situacaoSolicitacao: "SOLICITADA"
    }
    const solicitacao1 = {
        uuid: 'c8da86d7-ab59-4513-8885-b54dba47f365',
        dataParaAtendimento: '2023-03-01',
        horaInicial: '10:00',
        horaFinal: '10:30',
        descricaoSolicitacao:"Dor nas costas",
        nomePaciente: "Felipe Mororo",
        nomeEspecialidade: "Ortopedia",
        sexoPreferivelDoAtendimento: "MASCULINO",
        situacaoSolicitacao: "SOLICITADA"
    }
    const solicitacao2 = {
        uuid: 'c1da86d7-ab59-4513-8885-b54dba47f245',
        dataParaAtendimento: '2023-03-01',
        horaInicial: '10:00',
        horaFinal: '10:30',
        descricaoSolicitacao:"Dor nas costas",
        nomePaciente: "Pedro Nery",
        nomeEspecialidade: "Ortopedia",
        sexoPreferivelDoAtendimento: "MASCULINO",
        situacaoSolicitacao: "SOLICITADA"
    }
    const solicitacao4 = {
        uuid: 'd9da86d7-ab59-4513-8885-b54dba47f221',
        dataParaAtendimento: '2023-03-01',
        horaInicial: '10:00',
        horaFinal: '10:30',
        descricaoSolicitacao:"Dor nas costas",
        nomePaciente: "Járdesson Ribeiro dos Santos",
        nomeEspecialidade: "Ortopedia",
        sexoPreferivelDoAtendimento: "MASCULINO",
        situacaoSolicitacao: "SOLICITADA"
    }
    
    
    function mudarPagina(UUIDSolicitacao: string){
        route.push("../../solicitacao/detalhe-solicitacao/"+UUIDSolicitacao);
        
    }
    
    const [registrosSolicitacoes, updateRegistrosPropostas] = useState<any[]>([solicitacao, solicitacao1, solicitacao2, solicitacao4]);
    // updateRegistrosPropostas(...registrosSolicitacoes, );
    // useEffect(() => {
        //     SeyfertSolicitacaoRequestService.listarSolicitacoesMedico({
            //         uuidMedico: 'd9da86d7-ab59-4513-8885-b54dba47f565',
            //         dataParaAtendimento: '2023-02-02',
            //         nomeEspecialidade: "Ortopedia",
            //         page: 0,
            //         size: 10
            //     })
    //   .then((res) => {
    //     updateRegistrosPropostas(res.data.content);
    //   })
    //   .catch((erro) => {
    //     alert("Falha na requisição de busca de solicitações")
    //   });
    // }, [tipoUsuario])
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