import { VisualizarConsultaResponse } from '@/types/consulta/VisualizarConsultaResponse';
import { AxiosResponse } from 'axios';
import apiSeyfert from './api/SeyfertRequestBaseManager';

const baseUrlConsultaService =  "/consulta";
export class SeyfertConsultaRequestService {

    static async visualizarConsulta(consultaUuid: string): Promise<AxiosResponse<VisualizarConsultaResponse>> {
        return apiSeyfert.get(`${baseUrlConsultaService}/${consultaUuid}`);
    }
}