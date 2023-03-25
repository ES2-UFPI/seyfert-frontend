import BoardComLabels from "@/components/board";
import ButtonComponent from "@/components/button";
import LabelTitleLeft from "@/components/label-title-left";
import LabelTitleTop from "@/components/label-title-top";
import Layout from "@/layout/Layout";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import styles from "./styles.module.css";

const CadastroPaciente = () => {
  const route = useRouter();

  function telaInicial() {
    route.push("/tela-inicial");
  }

  function voltar() {
    route.push("/");
  }

  return (
    <Layout titleHeader="Cadastro de Pacientes" title="Cadastro de Pacientes">
      <div className={styles.container}>
        <span>
          <h1>Tela em Construção</h1>
        </span>
        <div>
          <p>Informações do Paciente</p>
          <input></input>
        </div>
        <button onClick={(e) => voltar()} className={styles.botao}>
          Voltar
        </button>
        <button onClick={(e) => telaInicial()} className={styles.botao}>
          Confirmar Cadastro
        </button>
      </div>
    </Layout>
  );
};

export default CadastroPaciente;
