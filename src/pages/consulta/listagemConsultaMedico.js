import Head from "next/head"
import Link from "next/link"

export default function listagemConsultaMedico(){

    return(

        <>
        <Head>
        <title>Listagem de Solicitações</title>
        </Head>
       

        <div class = "tabela de consulta">
    <p >Listagem de Solicitação de consulta</p>
    <table>
        <thead>
          <tr>
            <th>Paciente</th>
            <th>Data</th>
            <th>Horário Inicial</th>
            <th>Horário Final</th>
            <th>Descrição da necessidade</th>
            <th>Excluir</th>
            <th>Visualizar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Felipe</td>
            <td>12/08/2002</td>
            <td>10:00</td>
            <td>12:00</td>
            <td>Covid</td>
            <td><button name="button">Excluir</button></td>
            <td><button name="button">Visualizar</button></td>
          </tr>
        </tbody>
      </table>

  </div>
        
        
        
        </>

    )
}