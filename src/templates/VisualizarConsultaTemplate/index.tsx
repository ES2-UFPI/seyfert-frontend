import ButtonAction from '@/components/button-action';
import Label from '@/components/label';
import Layout from '@/components/layout/Layout';
import TextArea from '@/components/textarea-action';
import styles from './styles.module.css';

const VisualizarConsultaTemplate = () => {
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
                        <Label type='CLEAN' title='Data atendimento'>01/02/2023</Label>
                        <Label type='CLEAN' title='Horário Inicial'>10:00 AM</Label>
                        <Label type='CLEAN' title='Horário Previsto Final'>10:30 AM</Label>
                        <Label type='CLEAN' title='Situação'>Paga</Label>
                        <Label type='CLEAN'  title='Especialidade consulta'>Ortopedia</Label>
                        <Label type='CLEAN'  title='Descrição adicionada'>Passei a sentir dor no joelho após um acidente de moto e até então parece que está fora do lugar.</Label>
                    </div>
                </div>
                <div className={styles.board}>
                    <div>
                        <span className={styles.title_board}>Dados do(a) paciente</span>
                    </div>
                    <div className={styles.content_board}>
                        <Label type='CLEAN'  title='Nome Paciente'>João Miguel Nascimento</Label>
                        <Label type='CLEAN'  title='Idade'>22 anos</Label>
                        <Label type='CLEAN'  title='Sexo'>Masculino</Label>
                    </div>
                </div>

                <div className={styles.board}>
                    <div>
                        <span className={styles.title_board}>Dados do Médico</span>
                    </div>
                    <div className={styles.content_board}>
                        <Label type='CLEAN'  title='Nome médico(a)'>Pedro Machado Silva</Label>
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