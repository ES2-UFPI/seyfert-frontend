/*Essa tela deve ser uma continuação do fluxo da tela de Listar as consultas(médico), de forma que tenha uma forma de um médico ser
redirecionado a essa página para cancelar uma consulta, desde que elá não tenha passado do prazo.*/

export default function medicoCancelaConsulta(){
    

    return(
    <>
    <table>
        <tbody>
        <tr>
            <td>Dia da consulta</td>
            <td>Horário</td>
            <td>Valor</td>


        </tr>
        <tr>
            <td>dia</td>
            <td>hora</td>
            <td>valor em reais</td>


        </tr>
        <tr>
            <td><input type = "text" value = "Motivo do cancelamento:"  /></td>
            <td><input type = "submit"/></td>
        </tr>

        </tbody>
    </table>
    </>
    )



}