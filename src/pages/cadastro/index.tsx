import BoardComLabels from "@/components/board";
import ButtonComponent from "@/components/button";
import LabelTitleLeft from "@/components/label-title-left";
import LabelTitleTop from "@/components/label-title-top";
import Layout from "@/layout/Layout";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import styles from "./styles.module.css";

const Cadastro = () => {
  const route = useRouter();

  function telaCadastroMedico() {
    route.push("/cadastro-medico");
  }

  function telaCadastroPaciente() {
    route.push("/cadastro-paciente");
  }

  function voltar() {
    route.push("/");
  }

  return (
    <Layout titleHeader="Cadastro" title="Cadastro">
      <div className={styles.container}>
        <div className={styles.titulo}>
          <p>Cadastre-se no Seyfert</p>
        </div>
        <div className={styles.conteudo}>
          <div className={styles.paciente}>
            <center>
              <p>
                Se você é um médico que deseja facilidade de encontrar pacientes
                no horário que preferir
              </p>
              <button
                onClick={(e) => telaCadastroMedico()}
                className={styles.botao}
              >
                Cadastrar Como Médico
              </button>
            </center>
          </div>
          <div className={styles.medico}>
            <center>
              <p>
                Se você é um paciente que deseja marcar consultas com médicos de
                várias especialidades diferentes no horário que precisar de
                forma simples e rápida
              </p>
              <button
                onClick={(e) => telaCadastroPaciente()}
                className={styles.botao}
              >
                Cadastrar Como Paciente
              </button>
            </center>
          </div>
        </div>
        <center>
          <button onClick={(e) => voltar()} className={styles.botao}>
            Voltar
          </button>
        </center>
      </div>
    </Layout>
  );
};

export default Cadastro;
