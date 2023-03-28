import Layout from "@/layout/Layout"
import styles from "../../styles/visualizacaoDeSolicitacao.module.css"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { SeyfertConsultaRequestService } from "@/services/SeyfertConsultaRequestServicec"
import { VisualizarConsultaResponse } from "@/types/consulta/VisualizarConsultaResponse"
import { AxiosResponse } from "axios"
import { GetServerSideProps } from "next";
import DadosPostProposta, { SeyfertPropostaRequestService } from "@/services/SeyfertPropostaRequestService"
import { SolicitacaoResponse } from "@/types/solicitacao/SolicitacaoResponse"
import { SeyfertSolicitacaoRequestService } from "@/services/SeyfertSolicitacaoRequestService"


type props = {
    id: string
}

const detalhesSolicitacao = ({ id }: props) => {
    const [isVisibleInputs, setIsVisibleInputs] = useState<boolean>(false);
    const [propostas, updatePropostas] = useState<DadosPostProposta[]>([]);
    
    const [data, setData] = useState<string>("");
    const [horarioInicial, setHorarioInicial] = useState<string>("");
    const [horarioFinal, setHorarioFinal] = useState<string>("");
    const [valor, setValor] = useState<string>("");
    
    function mudarVisibilidadeDeInputs(){
        setIsVisibleInputs(!isVisibleInputs);
    }
    
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
    
    const [detalhesSolicitacao, setDetalhesSolicitacao] = useState<any>(solicitacao);
    function cadastrarPropostas(){
        SeyfertPropostaRequestService.cadastrarSolicitacao(propostas, id, '4d6032eb-1941-4474-b7a4-4260bb3405fc',)
      .then((res) => {
        alert("Propostas Cadastradas")
      })
      .catch((erro) => {
        alert("Falha na requisição de cadastro de propostas")
      });
    }

    function adicionarPropostas() {
        const proposta:DadosPostProposta = {
            dataAtendimento: data,
            horaInicial: horarioInicial,
            horaFinal: horarioFinal,
            valor
        }

        updatePropostas([proposta, ...propostas]);
        setData("");
        setHorarioInicial("");
        setHorarioFinal("");
        setValor("0");
        mudarVisibilidadeDeInputs();
    }
    // useEffect(() => {
    //     if(!id) return;

    //     SeyfertSolicitacaoRequestService.buscarDetalhesSolicitacao(id).then(response => {
    //         console.log(response.data)
    //         setDetalhesSolicitacao(response.data);
    //     }).catch(( {response} ) => {
    //         alert("Falha na requisição")
    //     })
    // }, [id]);

    return(
        <Layout titleHeader="Detalhamento da solicitação de consulta">
        <div>
            <h1>Consulta</h1>
            <ul>
                <li>Nome do paciente: {detalhesSolicitacao?.nomePaciente}</li>
                <li>Data para atendimento:  {detalhesSolicitacao?.dataParaAtendimento}</li>
                <li>Horário do início:  {detalhesSolicitacao?.horaInicial}</li>
                <li>Horário do fim: {detalhesSolicitacao?.horaFinal}</li>
                <li>Descrição da solicitação: <p>{detalhesSolicitacao?.descricaoSolicitacao}</p></li>
            </ul>
            <button  name="button">Criar proposta de consulta</button>
            <div>
                <div>
                    <button onClick={mudarVisibilidadeDeInputs}>Inserir Proposta {propostas.length}</button>
                </div>
                <div>
                    {isVisibleInputs && (
                        <div className=''>
                            <div className=''>
                                <input onChange={e => setData(e.target.value)} type="date" placeholder="Digite a data de atendimento" />
                                <input onChange={e => setHorarioInicial(e.target.value)} type="time" placeholder="Horário Inicial" />
                                <input onChange={e => setHorarioFinal(e.target.value)} type="time" placeholder="Horário Final" />
                                <input onChange={e => setValor(e.target.value)} type="text" placeholder="R$ 0, 00" />
                            </div>
                            <div>
                                <button onClick={adicionarPropostas}>Confirmar</button>
                            </div>
                        </div>
                    )}
                </div>
                <div >
                    <table>
                    {!!propostas.length && (
                        <thead>
                        <tr>
                            <th className=''>Data</th>
                            <th className=''>Horario Inicial</th>
                            <th className=''>Horario Final</th>
                            <th className=''>Valor</th>
                        </tr>
                        </thead>
                    )}
                    {!!propostas.length && (
                        <tbody>
                        {propostas.map((linhaTabela, index) => {
                            return (
                                <tr>
                                    <td className=''>{linhaTabela.dataAtendimento}</td>
                                    <td  className=''>{linhaTabela.horaInicial}</td>
                                    <td  className=''>{linhaTabela.horaFinal}</td>
                                    <td className=''>{linhaTabela.valor}</td>
                                    <td className=''><button onClick={() => alert("clicou em excluir")} name="button">Excluir</button></td>
                                </tr>
                            )
                        })}
                        </tbody>
                    )}
                    </table>    
                </div>
                <div>
                    <button onClick={cadastrarPropostas}>Cadastrar {propostas.length} Propostas</button>
                </div>
            </div>
        </div>
        </Layout>

    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const id = ctx.query?.id
    return {
        props: {
            id
        }
    }
}

export default detalhesSolicitacao;