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

export class SeyfertSolicitacaoRequestService {

    static async cadastrarSolicitacao(dados: any): Promise<AxiosResponse<any>> {
        return apiSeyfert.post(`${baseUrlSolicitacaoService}`, dados)
    }
}