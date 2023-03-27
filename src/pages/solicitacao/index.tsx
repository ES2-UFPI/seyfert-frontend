import Layout from "@/layout/Layout"
import styles from "../../styles/visualizacaoDeSolicitacao.module.css"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { SeyfertSolicitacaoRequestService } from "@/services/SeyfertSolicitacaoRequestService"
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ToastyFake from "@/components/toast-fake"


const VisualizarSolicitacoes = () => {
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

    const [registrosSolicitacoes, updateRegistrosPropostas] = useState<any[]>([]);
    const [isApagado, setIsApagado] = useState<boolean>(true);

    const route = useRouter()

    function mudarPagina(UUIDSolicitacao: string){
        route.push("../../solicitacao/detalhe-solicitacao/"+UUIDSolicitacao);

    }

    const testeToast = () => {
       setIsApagado(isApagado);
    }

    // useEffect(() => {
        
    //     SeyfertSolicitacaoRequestService.listarSolicitacoes({
    //         uuidMedico: '4d6032eb-1941-4474-b7a4-4260bb3405fc',
    //         dataParaAtendimento: '2023-02-02',
    //         nomeEspecialidade: "Ortopedia Teste"
    //     })
    //   .then((res) => {
    //     updateRegistrosPropostas(res.data.content);
    //   })
    //   .catch((erro) => {
    //     alert("Erro ao cadastrar solicitação"+erro);
    //   });
    // }, [tipoUsuario])
    return(
        <Layout titleHeader="Listagem de Solicitações de consulta">
        <div >
            <ToastyFake isApagado={isApagado}/>
            <button onClick={testeToast}>Click</button>
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