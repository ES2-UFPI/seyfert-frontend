import ButtonAction from "@/components/button-action";
import Label from "@/components/label";
import TextArea from "@/components/textarea-action";
import Layout from "@/templates/layout/Layout";
import VisualizarConsultaTemplate from "@/templates/visualizar-consulta-template";
import { VisualizarConsultaResponse } from "@/types/consulta/VisualizarConsultaResponse";
import { GetServerSideProps } from "next";
import { useState } from "react";
import styles from './styles.module.css';

type VizualizarConsultaProps = {
    consultaUuid: string
}

const VisualizarConsulta = ({ consultaUuid }: VizualizarConsultaProps) => {

    const [consultaResponse, setConsultaResponse] = useState<VisualizarConsultaResponse>();
    const [textAreaValor, setTextAreaValor] = useState<string>("");

    // useEffect(() => {
    //     if(!consultaUuid) return;

    //     SeyfertConsultaRequestService.visualizarConsulta(consultaUuid).then(({ data }: AxiosResponse<VisualizarConsultaResponse>) => {
    //         console.log(data)
    //         setConsultaResponse(data);
    //     }).catch(( {response} ) => {
    //         alert("Deu problema")
    //     })
    // }, [consultaUuid]);

    function valorTextArea(e: any){
        let valor = e.target.value;

        setTextAreaValor(valor);
    }

    function verValorText(){
        alert("Booooa")
        alert(textAreaValor);
    }


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
                        <Label title='Data atendimento'>{consultaResponse?.dataAtendimento}</Label>
                        <Label title='Horário Inicial'>{consultaResponse?.horario}</Label>
                        <Label title='Horário Previsto Final'>{consultaResponse?.horario}</Label>
                        <Label title='Situação'>{consultaResponse?.situacaoConsulta}</Label>
                        <Label title='Especialidade consulta'>Ortopedia</Label>
                        <Label title='Descrição adicionada'>{consultaResponse?.descricaoMedica}</Label>
                    </div>
                </div>
                <div className={styles.board}>
                    <div>
                        <span className={styles.title_board}>Dados do(a) paciente</span>
                    </div>
                    <div className={styles.content_board}>
                        <Label title='Nome Paciente'>{consultaResponse?.nomeCompletoPaciente}</Label>
                        <Label title='Idade'>22 anos</Label>
                        <Label title='Sexo'>Masculino</Label>
                    </div>
                </div>

                <div className={styles.board}>
                    <div>
                        <span className={styles.title_board}>Dados do Médico</span>
                    </div>
                    <div className={styles.content_board}>
                        <Label title='Nome médico(a)'>{consultaResponse?.nomeCompletoMedico}</Label>
                        <Label title='Especialidades médicas'>Ortopedia</Label>
                        <Label title='Sexo'>Masculino</Label>
                        <Label title='CRM'>CRM39844-PI</Label>
                    </div>
                </div>

                <div className={styles.board}>
                    <div>
                        <span className={styles.title_board}>Comentário Médico</span>
                    </div>
                    <div className={styles.content_board}>
                        <TextArea onChange={(e) => setTextAreaValor(e.target.value)} value={textAreaValor} context="MEDICO" onClickIconRight={verValorText}></TextArea>
                        <button onClick={() => verValorText}>Click</button>
                    </div>
                </div>
            </div>
        </Layout>
        
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const id = ctx.query?.uuidconsulta
    return {
        props: {
            consultaUuid: id
        }
    }
}

export default VisualizarConsulta;