/*Uma proposta consite em:  Valor da consulta, Data da consulta, hora inicial, hora final , medico, solicitação, situação proposta */
import Link from "next/link"
export default function listagemPropostaMedico(){

    return(
        <>
        <h1>Listagem de propostas</h1>

        <table>
        <thead>
          <tr>
            <th>Valor da consulta</th>
            <th>Data da consulta</th>
            <th>Horário Inicial</th>
            <th>Horário Final</th>
            <th>Médico</th>
            <th>Visualizar solicitação</th>
            <th>Situação</th>
          </tr>
        </thead>
            <tbody>
            <tr>
            <td>500 R$</td>
            <td>21/12/2021</td>
            <td>10:00</td>
            <td>12:00</td>
            <td>José Almeida Santos</td>
            {/* Link para o detalhe da solicitação que é base para a proposta */}
            <td><Link href = "/">Visualizar solicitação</Link></td> 
            <td>Confirmada</td>
          </tr>

            </tbody>
        </table>
        </>
    )
}