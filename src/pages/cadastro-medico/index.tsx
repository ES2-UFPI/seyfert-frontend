import BoardComLabels from "@/components/board";
import ButtonComponent from "@/components/button";
import LabelTitleLeft from "@/components/label-title-left";
import LabelTitleTop from "@/components/label-title-top";
import Layout from "@/layout/Layout";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import styles from "./styles.module.css";

const CadastroMedico = () => {
  const route = useRouter();

  function telaInicial() {
    route.push("/tela-inicial");
  }

  function voltar() {
    route.push("/");
  }

  return (
    <Layout titleHeader="Cadastro de Médicos" title="Cadastro de Médicos">
      <div className={styles.container}>
        <span>
          <h1>Cadastro de Médico</h1>
        </span>
        <div>
          <p>Informações do Médico</p>
          <label>Nome</label>
          <input placeholder="Seu primeiro nome"></input>
          <br></br>
          <label>Sobrenome</label>
          <input placeholder="Seu sobrenome"></input>
          <br></br>
          <label>Data de Nascimento</label>
          <input type="date"></input>
          <br></br>
          <label>CPF</label>
          <input type="text" placeholder="Seu CPF"></input>
          <br></br>
          <label>Sexo</label>
          <input
            type="radio"
            id="masculino"
            name="sexo"
            value="masculino"
          ></input>{" "}
          Masculino
          <input
            type="radio"
            id="feminino"
            name="sexo"
            value="feminino"
          ></input>{" "}
          Feminino
          <br></br>
          <label>Telefone</label>
          <input type="text" placeholder="Seu Telefone"></input>
          <br></br>
          <label>CEP</label>
          <input type="text" placeholder="Seu CEP"></input>
          <br></br>
          <label>Estado</label>
          <input type="text" placeholder="Seu Estado"></input>
          <br></br>
          <label>Cidade</label>
          <input type="text" placeholder="Sua Cidade"></input>
          <br></br>
          <label>Bairro</label>
          <input type="text" placeholder="Seu Bairro"></input>
          <br></br>
          <label>Complemento</label>
          <input type="text" placeholder="Complemento do Endereço"></input>
          <br></br>
          <label>Número da Casa</label>
          <input type="text" placeholder="O Número da sua Casa"></input>
          <br></br>
          <label>CRM</label>
          <input type="text" placeholder="Seu CRM"></input>
          <br></br>
          <label>Email</label>
          <input type="email" placeholder="Seu Email"></input>
          <br></br>
          <label>Senha</label>
          <input type="password" placeholder="Sua Senha"></input>
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

export default CadastroMedico;
