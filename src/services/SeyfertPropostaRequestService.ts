import { AxiosResponse } from 'axios';
import apiSeyfert from './api/SeyfertRequestBaseManager';

const baseUrlPropostaService =  "/proposta";

export default interface DadosPostProposta {
    dataAtendimento: string   
    horaInicial: string
    horaFinal: string
    valor: string
}


export class SeyfertPropostaRequestService {

    static async cadastrarSolicitacao(dados: DadosPostProposta[], solicitacao: string, medico: string): Promise<AxiosResponse<any>> {
        return apiSeyfert.post(`${baseUrlPropostaService}`, dados, {
            params: {
                solicitacao,
                medico
            }
        })
    }
}