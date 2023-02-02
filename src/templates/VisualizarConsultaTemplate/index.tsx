import ButtonAction from '@/components/button-action';
import Label from '@/components/label';
import Layout from '@/components/layout/Layout';
import TextArea from '@/components/textarea-action';
import { SeyfertConsultaRequestService } from '@/services/SeyfertConsultaRequestServicec';
import { VisualizarConsultaResponse } from '@/types/consulta/VisualizarConsultaResponse';
import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import styles from './styles.module.css';


type VizualizarConsultaProps = {
    consultaUuid: string
}

const VisualizarConsultaTemplate = ({ consultaUuid }: VizualizarConsultaProps) => {

    const [consultaResponse, setConsultaResponse] = useState<VisualizarConsultaResponse>();

    useEffect(() => {
        if(!consultaUuid) return;

        SeyfertConsultaRequestService.visualizarConsulta(consultaUuid).then(({ data }: AxiosResponse<VisualizarConsultaResponse>) => {
            console.log(data)
            setConsultaResponse(data);
        }).catch(( {response} ) => {
            alert("Deu problema")
        })
    }, [consultaUuid]);


    return (
        <Layout titleHeader="Visualizar Consulta" title='Visualizar Consulta'>
            <div className={styles.container}>
                <div className={styles.top}>
                    <strong>Consulta - 22</strong>
                    <ButtonAction type='FINALIZAR'>Confirmar Consulta</ButtonAction>
                </div>
                <div className={styles.board}>
                    <div>
                        <span className={styles.title_board}>Dados da consulta</span>
                    </div>
                    <div className={styles.content_board}>
                        <Label type='CLEAN' title='Data atendimento'>{consultaResponse?.dataAtendimento}</Label>
                        <Label type='CLEAN' title='Horário Inicial'>{consultaResponse?.horario}</Label>
                        <Label type='CLEAN' title='Horário Previsto Final'>{consultaResponse?.horario}</Label>
                        <Label type='CLEAN' title='Situação'>{consultaResponse?.situacaoConsulta}</Label>
                        <Label type='CLEAN'  title='Especialidade consulta'>Ortopedia</Label>
                        <Label type='CLEAN'  title='Descrição adicionada'>{consultaResponse?.descricaoMedica}</Label>
                    </div>
                </div>
                <div className={styles.board}>
                    <div>
                        <span className={styles.title_board}>Dados do(a) paciente</span>
                    </div>
                    <div className={styles.content_board}>
                        <Label type='CLEAN'  title='Nome Paciente'>{consultaResponse?.nomeCompletoPaciente}</Label>
                        <Label type='CLEAN'  title='Idade'>22 anos</Label>
                        <Label type='CLEAN'  title='Sexo'>Masculino</Label>
                    </div>
                </div>

                <div className={styles.board}>
                    <div>
                        <span className={styles.title_board}>Dados do Médico</span>
                    </div>
                    <div className={styles.content_board}>
                        <Label type='CLEAN'  title='Nome médico(a)'>{consultaResponse?.nomeCompletoMedico}</Label>
                        <Label type='CLEAN'  title='Especialidades médicas'>Ortopedia</Label>
                        <Label type='CLEAN'  title='Sexo'>Masculino</Label>
                        <Label type='CLEAN'  title='CRM'>CRM39844-PI</Label>
                    </div>
                </div>

                <div className={styles.board}>
                    <div>
                        <span className={styles.title_board}>Comentário Médico</span>
                    </div>
                    <div className={styles.content_board}>
                        <TextArea context="MEDICO" ></TextArea>
                    </div>
                </div>
            </div>
        </Layout>
        
    );
}

export default VisualizarConsultaTemplate;