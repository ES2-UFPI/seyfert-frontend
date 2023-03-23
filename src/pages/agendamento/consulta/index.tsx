import BoardComLabels from "@/components/board";
import ButtonComponent from "@/components/button";
import LabelTitleLeft from "@/components/label-title-left";
import LabelTitleTop from "@/components/label-title-top";
import Layout from "@/layout/Layout";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import styles from "./styles.module.css";

type AgendarConsultaTemplateProps = {
  idHorario: string;
};

const AgendarConsulta = ({ idHorario }: AgendarConsultaTemplateProps) => {
  const route = useRouter();

  function cancelarAgendamento() {
    alert("cancelando");
    route.push("/horarios-disponiveis");
  }

  function confirmarAgendamento() {
    alert("confirmando");
    route.push("/pagamento/9b7f7f6e-86de-4f2b-b701-34a05c5ba89e/pagar");
  }

  return (
    <Layout titleHeader="Agendar Consulta" title="Agendamento de consulta">
      <div className={styles.container}>
        <div className={styles.container_medico}>
          <div className={styles.informacoes}>
            <div>
              <img
                src="https://avatars.githubusercontent.com/u/88343716?v=4"
                alt="foto"
              />
            </div>
            <div className={styles.informacoes_medico}>
              <span>
                <a href="#">Felipe Webber Fernandes Nery</a>
              </span>
              <span>Cardiologista</span>
              <span>Medico - 30 anos</span>
            </div>
          </div>
          <div className={styles.informacoes_medico_plataforma}>
            <span>
              <a href="#">Avaliações</a>
            </span>
            <span>55 atendimentos feitos</span>
            <span>1 atendimentos cancelados</span>
            <div className={styles.informacoes_medico_avaliacaoes}>
              <span>
                <img src="/like.svg" alt="Like" color="green" />
                40
              </span>
              <span>
                <img src="/deslike.svg" alt="Like" />1
              </span>
              <span>41 votos</span>
            </div>
          </div>
        </div>
        <div className={styles.container_endereco}>
          <BoardComLabels title="Dados do endereço de atendimento">
            <LabelTitleTop title="Rua">Curralinhos</LabelTitleTop>
            <LabelTitleTop title="N°">345</LabelTitleTop>
            <LabelTitleTop title="Bairro">Centro</LabelTitleTop>
            <LabelTitleTop title="Cidade">Altos</LabelTitleTop>
            <LabelTitleTop title="CEP">642900000</LabelTitleTop>
            <LabelTitleTop title="Estado">Piauí</LabelTitleTop>
            <LabelTitleTop title="Complemento">
              Proximo a clinica tals
            </LabelTitleTop>
          </BoardComLabels>
          <BoardComLabels title="Confirmação do agendamento">
            <div className={styles.container_confirm_mensagem}>
              <div className={styles.horario_disponiveis}>
                <LabelTitleLeft title="Data:">20/03/2023</LabelTitleLeft>
                <LabelTitleLeft title="Dia:">Segunda-Feira</LabelTitleLeft>
                <LabelTitleLeft title="Entre:">
                  10:00 <strong>e</strong> 12:00{" "}
                  <span className={styles.informativo}>
                    (Médico pode inserir mais detalhes do horário)
                  </span>
                </LabelTitleLeft>
                <LabelTitleLeft title="Valor Consulta">
                  R$ 200,00
                </LabelTitleLeft>
              </div>
              <div className={styles.acoes_disponiveis}>
                <ButtonComponent
                  key="sdsds"
                  childrenColor="rgb(255, 255, 255)"
                  color="rgb(29, 66, 230)"
                  onClick={confirmarAgendamento}
                >
                  Confirmar
                </ButtonComponent>
                <ButtonComponent
                  key="sdsds"
                  childrenColor="rgb(255, 255, 255)"
                  color="rgb(230, 29, 29)"
                  onClick={cancelarAgendamento}
                >
                  Cancelar
                </ButtonComponent>
              </div>
            </div>
          </BoardComLabels>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.query?.uuidconsulta;
  return {
    props: {
      idHorario: id,
    },
  };
};

export default AgendarConsulta;
