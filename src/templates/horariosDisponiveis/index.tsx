import Layout from "@/templates/layout/Layout";
import styles from "../../styles/horariosDisponiveis.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const HorariosDisponiveisTemplate = () => {
  const route = useRouter();

  return (
    <Layout titleHeader="Horarios Disponiveis">
      <div>
        <table className={styles.tabela} border={1}>
          <tbody>
            <tr>
              <td>
                <table width={"100%"}>
                  <tbody>
                    <tr>
                      <td colSpan={4} className={styles.titulo}>
                        Cadastrar Novo Horário
                      </td>
                    </tr>
                    <tr>
                      <td width={"20%"}>
                        <h4>Dia da Semana</h4>
                      </td>
                      <td width={"25%"}>
                        <h4>Horário Início</h4>
                      </td>
                      <td width={"25%"}>
                        <h4>Horário Fim</h4>
                      </td>
                      <td width={"30%"}>
                        <h4>Valor</h4>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <select>
                          <option value="1">Domingo</option>
                          <option value="2">Segunda</option>
                          <option value="3">Terça</option>
                          <option value="4">Quarta</option>
                          <option value="5">Quinta</option>
                          <option value="6">Sexta</option>
                          <option value="7">Sábado</option>
                        </select>
                      </td>
                      <td>
                        <input type="time" />
                      </td>
                      <td>
                        <input type="time" />
                      </td>
                      <td>
                        <input type="text" />
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={4}>
                        <center>
                          <button className={styles.botao}>Cadastrar</button>
                        </center>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <table width={"100%"}>
                  <tbody>
                    <tr>
                      <td colSpan={7} className={styles.titulo}>
                        Horário Cadastrados
                      </td>
                    </tr>
                    <tr>
                      <td className={styles.coluna}>
                        <p className={styles.diaSemana}>Domingo</p>
                      </td>
                      <td className={styles.coluna}>
                        <p className={styles.diaSemana}>Segunda</p>
                      </td>
                      <td className={styles.coluna}>
                        <p className={styles.diaSemana}>Terça</p>
                      </td>
                      <td className={styles.coluna}>
                        <p className={styles.diaSemana}>Quarta</p>
                      </td>
                      <td className={styles.coluna}>
                        <p className={styles.diaSemana}>Quinta</p>
                      </td>
                      <td className={styles.coluna}>
                        <p className={styles.diaSemana}>Sexta</p>
                      </td>
                      <td className={styles.coluna}>
                        <p className={styles.diaSemana}>Sábado</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <button className={styles.botao}>
                          14:00 - 16:00 por R$ 250
                        </button>
                      </td>
                      <td>
                        <button className={styles.botao}>
                          8:00 - 12:00 por R$ 150
                        </button>
                      </td>
                      <td>
                        <button className={styles.botao}>
                          8:00 - 12:00 por R$ 150
                        </button>
                      </td>
                      <td>
                        <button className={styles.botao}>
                          8:00 - 12:00 por R$ 150
                        </button>
                      </td>
                      <td>
                        <button className={styles.botao}>
                          8:00 - 12:00 por R$ 150
                        </button>
                      </td>
                      <td>
                        <button className={styles.botao}>
                          8:00 - 12:00 por R$ 150
                        </button>
                      </td>
                      <td>
                        <button className={styles.botao}>
                          14:00 - 16:00 por R$ 250
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>
                        <button className={styles.botao}>
                          14:00 - 16:00 por R$ 150
                        </button>
                      </td>
                      <td></td>
                      <td>
                        <button className={styles.botao}>
                          14:00 - 16:00 por R$ 150
                        </button>
                      </td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                      <td>
                        <button className={styles.botao}>
                          18:00 - 20:00 por R$ 200
                        </button>
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default HorariosDisponiveisTemplate;
