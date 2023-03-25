import Layout from "@/layout/Layout";
import styles from "./styles.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import ButtonComponent from "@/components/button";



const HorariosDisponiveis = () => {
  const route = useRouter();

  function openAgendarConsulta(uuidHorario: string){
    route.push(`/agendar-consulta/${uuidHorario}`)
  }

  return (
    <Layout titleHeader="Horarios Disponiveis">
    <div className={styles.container}>
      <div className={styles.container_search}>
        <div className={styles.inputs_search}   style={{ width: "100%", marginTop: "0px" }}>
          <input style={{ width: "17%", marginTop: "0px" }}type="text" placeholder="Busque por um(a) médico(a)"/>
          <input style={{ width: "17%", marginTop: "0px" }} className={styles.input} id="diasdasemana" list="dias"  /* onChange={(e) => alert(e.target.value)} *//> 
          <datalist style={{ width: "17%", marginTop: "0px" }} id="dias">
            <option value="SEGUNDA" />
            <option value="TERCA" />
            <option value="QUARTA" />
            <option value="QUINTA" />
            <option value="SEXTA" />
            <option value="SABADO" />
            <option value="DOMINGO" />
          </datalist>
          <input style={{ width: "17%", marginTop: "0px" }}
            className={styles.input}
            id="especi"
            list="especialidade"
            // onChange={(e) => alert(e.target.value)}
            required
          />
          <datalist style={{ width: "17%", marginTop: "0px" }} id="especialidade">
            <option value="Clínico Geral" />
            <option value="Cardiologista" />
            <option value="Oftalmologista" />
            <option value="Ortopedista" />
            <option value="Neurologista" />
          </datalist>
          <input style={{ width: "17%", marginTop: "0px" }} type="time" placeholder="Horário inicial ex: 10:00"/>
          <input style={{ width: "17%", marginTop: "0px" }} type="time" placeholder="Horário final ex: 11:00"/>
          <button className={styles.botao} style={{ backgroundColor: 'blue', color: 'white', padding: '5px 10px', border: 'none', borderRadius: '5px',marginLeft: "10px" }} >Confirmar123</button>
        </div>
        {/* <div className={styles.area_button}>
            <button className={styles.botao}>Confirmar123</button>
        </div> */}
      </div>
      <div className={styles.container_list}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
  <thead>
    <tr>
      <th style={{ textAlign: 'left', backgroundColor: 'gray', color: 'white', padding: '10px' }}>Médico</th>
      <th style={{ textAlign: 'left', backgroundColor: 'gray', color: 'white', padding: '10px' }}>Especialidade</th>
      <th style={{ textAlign: 'left', backgroundColor: 'gray', color: 'white', padding: '10px' }}>Dia da semana</th>
      <th style={{ textAlign: 'left', backgroundColor: 'gray', color: 'white', padding: '10px' }}>Horários</th>
      <th style={{ textAlign: 'left', backgroundColor: 'gray', color: 'white', padding: '10px' }}>Valor</th>
      <th style={{ textAlign: 'left', backgroundColor: 'gray', color: 'white', padding: '10px' }}>Ações</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{ padding: '10px', borderBottom: '1px solid gray' }}>João da Silva Silveira</td>
      <td style={{ padding: '10px', borderBottom: '1px solid gray' }}>Oftalmologista</td>
      <td style={{ padding: '10px', borderBottom: '1px solid gray' }}>SEGUNDA</td>
      <td style={{ padding: '10px', borderBottom: '1px solid gray' }}>11:20 até 12:00</td>
      <td style={{ padding: '10px', borderBottom: '1px solid gray' }}>R$ 200,00</td>
      <td style={{ padding: '10px', borderBottom: '1px solid gray' }}>
        <button onClick={e => openAgendarConsulta("b057b0a6-9f29-442f-bd0b-e51277d9fa60")} className={styles.botao}  style={{ backgroundColor: 'blue', color: 'white', padding: '5px 10px', border: 'none', borderRadius: '5px' }}>Marcar Consulta</button>
      </td>
    </tr>
    <tr>
      <td style={{ padding: '10px', borderBottom: '1px solid gray' }}>João da Silva Silveira</td>
      <td style={{ padding: '10px', borderBottom: '1px solid gray' }}>Oftalmologista</td>
      <td style={{ padding: '10px', borderBottom: '1px solid gray' }}>SEGUNDA</td>
      <td style={{ padding: '10px', borderBottom: '1px solid gray' }}>11:20 até 12:00</td>
      <td style={{ padding: '10px', borderBottom: '1px solid gray' }}>R$ 200,00</td>
      <td style={{ padding: '10px', borderBottom: '1px solid gray' }}>
        <button onClick={e => openAgendarConsulta("b057b0a6-9f29-442f-bd0b-e51277d9fa60")} className={styles.botao} style={{ backgroundColor: 'blue', color: 'white', padding: '5px 10px', border: 'none', borderRadius: '5px' }}>Marcar Consulta</button>
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

export default HorariosDisponiveis;
