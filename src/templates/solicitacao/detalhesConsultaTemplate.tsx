import Layout from "@/templates/layout/Layout"
import styles from "../../styles/visualizacaoDeSolicitacao.module.css"
import 'bootstrap/dist/css/bootstrap.min.css'
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

    useEffect(() => {
        if(!id) return;

        SeyfertConsultaRequestService.visualizarConsulta(id).then(({ data }: AxiosResponse<VisualizarConsultaResponse>) => {
            console.log(data)
            setConsultaResponse(data);
        }).catch(( {response} ) => {
            alert("Deu problema")
        })
    }, [id]);
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
                <li>Valor da consulta:  500 Reais</li>


            </ul>
            {/* onClick={mudarPagina} */}
            <button  name="button">Criar proposta de consulta</button>
        </div>
        </Layout>

    )
}


export default DetalhesConsultaTemplate