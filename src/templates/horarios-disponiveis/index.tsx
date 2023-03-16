import Layout from "@/templates/layout/Layout";
import styles from "./horariosDisponiveis.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "@/components/button";

const HorariosDisponiveisTemplate = () => {
  const route = useRouter();

  function openAgendarConsulta(uuidHorario: string){
    route.push(`/agendar-consulta/${uuidHorario}`)
  }

  return (
    <Layout titleHeader="Horarios Disponiveis">
    <div className={styles.container}>
      <div className={styles.container_search}>
        <div className={styles.inputs_search}>
          <input type="text" placeholder="Busque por um(a) médico(a)"/>
          <input
            className={styles.input}
            id="diasdasemana"
            list="dias"
            // onChange={(e) => alert(e.target.value)}
          />
          <datalist id="dias">
            <option value="SEGUNDA" />
            <option value="TERCA" />
            <option value="QUARTA" />
            <option value="QUINTA" />
            <option value="SEXTA" />
            <option value="SABADO" />
            <option value="DOMINGO" />
          </datalist>
          <input
            className={styles.input}
            id="especi"
            list="especialidade"
            // onChange={(e) => alert(e.target.value)}
            required
          />
          <datalist id="especialidade">
            <option value="Clínico Geral" />
            <option value="Cardiologista" />
            <option value="Oftalmologista" />
            <option value="Ortopedista" />
            <option value="Neurologista" />
          </datalist>
          <input type="time" placeholder="Horário inicial ex: 10:00"/>
          <input type="time" placeholder="Horário final ex: 11:00"/>
        </div>
        <div className={styles.area_button}>
            <Button color="rgb(29, 66, 230)" childrenColor="rgb(255, 255, 255)">Confirmar</Button>
        </div>
      </div>
      <div className={styles.container_list}>
      <table className={styles.tabela}>
          <thead className={styles.table_top}>
            <tr>
              <th className={styles.theader}>
                <h4>Médico</h4>
              </th>
              <th className={styles.theader}>
                <h4>Especialidade</h4>
              </th>
              <th className={styles.theader}>
                <h4>Dia da semana</h4>
              </th>
              <th className={styles.theader}>
                <h4>Horários</h4>
              </th>
              <th className={styles.theader}>
                <h4>Valor</h4>
              </th>
              <th className={styles.theader}>
                <h4>Ações</h4>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.tbody_line}>
              <td className={styles.tdcontent}>João da Silva Silveira</td>
              <td className={styles.tdcontent}>Oftalmologista</td>
              <td className={styles.tdcontent}>SEGUNDA</td>
              <td className={styles.tdcontent}>11:20 até 12:00</td>
              <td className={styles.tdcontent}>R$ 200,00</td>
              <td className={styles.tdcontent_button}>
                <button onClick={e => openAgendarConsulta("b057b0a6-9f29-442f-bd0b-e51277d9fa60")} className={styles.botao}>Marcar Consulta</button>
              </td>
            </tr>
            <tr className={styles.tbody_line}>
              <td className={styles.tdcontent}>João da Silva Silveira</td>
              <td className={styles.tdcontent}>Oftalmologista</td>
              <td className={styles.tdcontent}>SEGUNDA</td>
              <td className={styles.tdcontent}>11:20 até 12:00</td>
              <td className={styles.tdcontent}>R$ 200,00</td>
              <td className={styles.tdcontent_button}>
                <button onClick={e => openAgendarConsulta("b057b0a6-9f29-442f-bd0b-e51277d9fa60")} className={styles.botao}>Marcar Consulta</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className={styles.container_pagination}>
            <div className={styles.pagination}>
              <span className={styles.pagination_element}>1</span>
              <span className={styles.pagination_element}>2</span>
              <span className={styles.pagination_element}>3</span>
              <span className={styles.pagination_element}>4</span>
              <span className={styles.pagination_element}>5</span>
            </div>
            <div className={styles.mounts}>
              <span>2 de 10</span>
            </div>

        </div>
      </div>
    </div>
    </Layout>
  );
};

export default HorariosDisponiveisTemplate;
