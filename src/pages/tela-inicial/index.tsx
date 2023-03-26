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

  return (
    <Layout titleHeader="Tela Inicial" title="Tela Inicial">
      <div className={styles.container}>
        <span>
          <h1>Tela em Construção</h1>
        </span>
        <button onClick={(e) => sair()} className={styles.botao}>
          Voltar
        </button>
        <button onClick={(e) => telaInicial()} className={styles.botao}>
          Confirmar Cadastro
        </button>
      </div>
    </Layout>
  );
};

export default TelaInicial;
