import BoardComLabels from "@/components/board";
import ButtonComponent from "@/components/button";
import LabelTitleLeft from "@/components/label-title-left";
import LabelTitleTop from "@/components/label-title-top";
import Layout from "@/layout/Layout";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import styles from "./styles.module.css";

const TelaInicial = () => {
  const route = useRouter();

  function telaInicial() {
    route.push("/horarios-disponiveis");
  }

  function sair() {
    route.push("/");
  }

  function agendamento() {
    route.push("/agendamento/b057b0a6-9f29-442f-bd0b-e51277d9fa60/consulta");
  }

  function historicoConsulta() {
    route.push("/historico-consulta");
  }

  function listagemConsultas() {
    route.push("/listagem-consultas");
  }

  function listagemPropostas() {
    route.push("/listagem-propostas");
  }

  function listagemPropostasMedico() {
    route.push("/proposta/listagemPropostaMedico");
  }

  function solicitacoes() {
    route.push("/solicitacoes");
  }

  return (
    <Layout titleHeader="Tela Inicial" title="Tela Inicial">
      <div className={styles.container}>
        <button onClick={(e) => sair()} className={styles.botao}>
          Voltar
        </button>
        <br></br>
        <button onClick={(e) => telaInicial()} className={styles.botao}>
          Horarios Disponiveis
        </button>
        <br></br>
        <button onClick={(e) => agendamento()} className={styles.botao}>
          Agendamento de Horários
        </button>
        <br></br>
        <button onClick={(e) => historicoConsulta()} className={styles.botao}>
          Histórico de Consulta
        </button>
        <br></br>
        <button onClick={(e) => listagemConsultas()} className={styles.botao}>
          Listagem de Consultas
        </button>
        <br></br>
        <button onClick={(e) => listagemPropostas()} className={styles.botao}>
          Listagem de Propostas
        </button>
        <br></br>
        <button
          onClick={(e) => listagemPropostasMedico()}
          className={styles.botao}
        >
          Listagem de Propostas Pelo Médico
        </button>
        <br></br>
        <button onClick={(e) => solicitacoes()} className={styles.botao}>
          Solicitações
        </button>
      </div>
    </Layout>
  );
};

export default TelaInicial;
