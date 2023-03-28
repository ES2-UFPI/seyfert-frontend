'use client'
import styles from "./styles.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = () => {
  const route = useRouter();
  function voltar() {
    route.push("/tela-inicial");
  }
  return (
    <div className={styles.container}>
      <div className={styles.container_content}>
        <div className={styles.seyfert}>.</div>
        <span className={styles.nome_seyfert}>Plataforma Seyfert</span>
        <div></div>
      </div>
      <div className={styles.container_login}>
        <div className={styles.container_banner}>
          <span className={styles.banner}>Bem-vindo(a) a Seyfert</span>
          <span className={styles.sub_banner}>
            A sua plataforma de vendas de consultas online
          </span>
        </div>
        <label htmlFor="">E-mail</label>
        <input type="text" placeholder="Digite seu email" />
        <label htmlFor="">Senha</label>
        <input type="password" placeholder="Digite sua senha" />

        <button onClick={(e) => voltar()}>
          Logar
        </button>
        <div className={styles.links}>
          <span>
            <Link className={styles.link} href="/">
              Esqueci a senha
            </Link>
          </span>
          <span>
            <Link className={styles.link} href="/cadastro">
              Cadastrar-me
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Page;
