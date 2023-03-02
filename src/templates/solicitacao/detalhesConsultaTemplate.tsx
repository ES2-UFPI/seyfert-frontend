import Layout from "@/templates/layout/Layout"

import styles from "../../styles/visualizacaoDeSolicitacao.module.css"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { SeyfertConsultaRequestService } from "@/services/SeyfertConsultaRequestServicec"
import { VisualizarConsultaResponse } from "@/types/consulta/VisualizarConsultaResponse"
import { AxiosResponse } from "axios"

type props = {
    id: string
}
const DetalhesConsultaTemplate = ({id}:props) => {
    const [consultaResponse, setConsultaResponse] = useState<VisualizarConsultaResponse>();
    const [isVisibleInputs, setIsVisibleInputs] = useState<boolean>(false);
    const [propostas, updatePropostas] = useState<any[]>([]);

    const [data, setData] = useState<string>("");
    const [horario, setHorario] = useState<string>("");
    const [valor, setValor] = useState<string>("");

    function mudarVisibilidadeDeInputs(){
        setIsVisibleInputs(!isVisibleInputs);
    }

    function adicionarPropostas() {
        const proposta = {
            data,
            horario,
            valor
        }

        updatePropostas([proposta, ...propostas]);
        setData("");
        setHorario("");
        setValor("");
        mudarVisibilidadeDeInputs();
    }
    // useEffect(() => {
    //     if(!id) return;

    //     SeyfertConsultaRequestService.visualizarConsulta(id).then(({ data }: AxiosResponse<VisualizarConsultaResponse>) => {
    //         console.log(data)
    //         setConsultaResponse(data);
    //     }).catch(( {response} ) => {
    //         alert("Deu problema")
    //     })
    // }, [id]);
    return(
        <Layout titleHeader="Detalhamento da solicitação de consulta">
        <div>
            <h1>Consulta</h1>
            <ul>
                <li>Nome do paciente: Járdesson Ribeiro</li>
                <li>Data da consulta:  10/10/2010</li>
                <li>Horário do início:  10:00</li>
                <li>Horário do fim: 11:00</li>
                <li>Descrição da consulta: <p>Desde o dia 13/05 desse ano vim sentindo fortes dores nas costas, e a situação vem piorando desde que...</p></li>
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
                                <input onChange={e => setHorario(e.target.value)} type="time" placeholder="Horário" />
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
                            <th className=''>Horario</th>
                            <th className=''>Valor</th>
                        </tr>
                        </thead>
                    )}
                    {!!propostas.length && (
                        <tbody>
                        {propostas.map((linhaTabela, index) => {
                            return (
                                <tr>
                                    <td className=''>{linhaTabela.data}</td>
                                    <td  className=''>{linhaTabela.horario}</td>
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
                    <button>Cadastrar {propostas.length} Propostas</button>
                </div>
            </div>
        </div>
        </Layout>

    )
}


export default DetalhesConsultaTemplate