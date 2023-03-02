import { VisualizarConsultaResponse } from '@/types/consulta/VisualizarConsultaResponse';
import { AxiosResponse } from 'axios';
import apiSeyfert from './api/SeyfertRequestBaseManager';

const baseUrlSolicitacaoService =  "/solicitacao";

export default interface DadosPost {
    especiliade: string   
    horarInicial: string
    horaFinal: string
    descricao: string
}

type  Pageable = { 
    totalElements: number
    totalPages: number
    content: DadosGetLista[]
}

type DadosGetLista = {
    uuid: string
    dataParaAtendimento: string
    horaInicial: string
    horaFinal: string
    descricaoSolicitacao: string
    nomePaciente: string
    nomeEspecialidade: string
    sexoPreferivelDoAtendimento: string
    situacaoSolicitacao: string
}

export class SeyfertSolicitacaoRequestService {

    static async cadastrarSolicitacao(dados: any): Promise<AxiosResponse<any>> {
        return apiSeyfert.post(`${baseUrlSolicitacaoService}`, dados)
    }

    static async listarSolicitacoes({uuidMedico, dataParaAtendimento, nomeEspecialidade}: any): Promise<AxiosResponse<Pageable>> {
        return apiSeyfert.get(`${baseUrlSolicitacaoService}/medico/${uuidMedico}`, {
            params: {
                dataParaAtendimento,
                nomeEspecialidade
            }
        })
    }
}