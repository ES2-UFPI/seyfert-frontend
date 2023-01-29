import Link from "next/link";
import app from "./../app/style.css";
import Script from "next/script";
import Navbar from "./../../components/Navbar";
import Footer from "./../../components/Footer";
export default function Consulta() {
  return (
    <>
      <Navbar />
      <div>
        <table>
          <tr>
            <td colSpan={4}>
              <p className="titulo">Consulta - 10</p>
            </td>
          </tr>
          <tr>
            <td>
              <p className="textoCampo">Paciente</p>
            </td>
            <td>
              <Link href={"/perfil"} className="textoValor">
                Juzias
              </Link>
            </td>
            <td>
              <p className="textoCampo">Horário</p>
            </td>
            <td>
              <p className="textoValor">13:40</p>
            </td>
          </tr>
          <tr>
            <td>
              <p className="textoCampo">Valor</p>
            </td>
            <td>
              <p className="textoValor">R$400</p>
            </td>
            <td>
              <p className="textoCampo">Local</p>
            </td>
            <td>
              <p className="textoValor">Bairro do João</p>
            </td>
          </tr>
          <tr>
            <td>
              <p className="textoCampo">Código da Consulta</p>
            </td>
            <td colSpan={3}>
              <input
                type={"text"}
                id="codigoConsulta"
                value={"3243242"}
                disabled
              />
            </td>
          </tr>
          <tr>
            <td rowSpan={3}>
              <p className="textoCampo">Informações Adicionais</p>
            </td>
            <td>
              <p className="textoCampo">Sintomas</p>
            </td>
            <td colSpan={2}>
              <textarea
                rows={3}
                cols={50}
                value={"Eu vejo gente morta."}
                id="sintomas"
                disabled
              ></textarea>
            </td>
          </tr>
          <tr>
            <td>
              <p className="textoCampo">Diagnóstico</p>
            </td>
            <td colSpan={2}>
              <textarea
                rows={3}
                cols={50}
                value={"Paciente apresenta sérios problemas mentais"}
                id="diagnostico"
                disabled
              ></textarea>
            </td>
          </tr>
          <tr>
            <td>
              <p className="textoCampo">Receita</p>
            </td>
            <td>
              <input type={"file"} id="receita" disabled />
            </td>
          </tr>
          <tr>
            <td colSpan={4}>
              <button id="btnAlterarInformacoes">Alterar Informações</button>
            </td>
          </tr>
        </table>
      </div>
      <Footer />
      <Script id="show-banner">
        {`
        const botao = document.getElementById("btnAlterarInformacoes");
        botao.addEventListener("click", alteraInformacoes);

        function alteraInformacoes() {
          document.getElementById("codigoConsulta").removeAttribute("disabled");
          document.getElementById("sintomas").removeAttribute("disabled");
          document.getElementById("diagnostico").removeAttribute("disabled");
          document.getElementById("receita").removeAttribute("disabled");
          botao.innerHTML = "Salvar Alteracoes";
          botao.removeEventListener("click", alteraInformacoes);
          botao.addEventListener("click", salvaInformacoes);
        }
        function salvaInformacoes() {
          var input1 = document.querySelector("#codigoConsulta");
          input1.disabled = true;
          var input2 = document.querySelector("#sintomas");
          input2.disabled = true;
          var input3 = document.querySelector("#diagnostico");
          input3.disabled = true;
          var input4 = document.querySelector("#receita");
          input4.disabled = true;
          botao.innerHTML = "Alterar Informações";
          botao.removeEventListener("click", salvaInformacoes);
          botao.addEventListener("click", alteraInformacoes);
        }
        `}
      </Script>
    </>
  );
}
