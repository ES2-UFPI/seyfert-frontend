export interface SolicitacaoResponse {
    uuid: string
    dataParaAtendimento:string
    horaInicial:string
    horaFinal:string
    descricaoSolicitacao:string
    nomePaciente:string
    nomeEspecialidade:string
    sexoPreferivelDoAtendimento: "MASCULINO" | "FEMININO" | "OUTROS"
    situacaoSolicitacao: "SOLICITADA" | "COM_PROPOSTA" | "CANCELADA" | "CONFIRMADA"
}