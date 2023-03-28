import { VisualizarConsultaResponse } from '@/types/consulta/VisualizarConsultaResponse';
import { PageResponse } from '@/types/PageResponse';
import { SolicitacaoResponse } from '@/types/solicitacao/SolicitacaoResponse';
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
                nomeEspecialidade,
                
            }
        })
    }

    static async listarSolicitacoesPaciente({ uuiPaciente, dataAtendimento, nomeEspecialidade, size, page } : any): Promise<AxiosResponse<PageResponse<SolicitacaoResponse[]>>> {
        return apiSeyfert.get(`${baseUrlSolicitacaoService}/paciente/${uuiPaciente}`, {
            params: {
                dataParaAtendimento: dataAtendimento,
                nomeEspecialidade,
                page,
                size
            }
        })
    }

    static async listarSolicitacoesMedico({uuidMedico, dataParaAtendimento, nomeEspecialidade, page, size}: any): Promise<AxiosResponse<PageResponse<SolicitacaoResponse[]>>> {
        return apiSeyfert.get(`${baseUrlSolicitacaoService}/medico/${uuidMedico}`, {
            params: {
                dataParaAtendimento,
                nomeEspecialidade,
                page,
                size
            }
        })
    }

    static async buscarDetalhesSolicitacao(uuidSolicitacao: string): Promise<AxiosResponse<SolicitacaoResponse>> {
        return apiSeyfert.get(`${baseUrlSolicitacaoService}/${uuidSolicitacao}`)
    }

}