export interface VisualizarConsultaResponse {
    dataAtendimento: string
    horario: string
    valorConsulta: number
    descricaoMedica: string
    nomeCompletoMedico: string
    nomeCompletoPaciente: string
    situacaoConsulta: 'AGUARDANDO_ATENDIMENTO' | 'FINALIZADA' | 'CANCELADA' | 'VENCIDA' | 'ESTORNADA'
    situacaoPagamento: 'AGUARDANDO_PAGAMENTO' | 'PAGO'

}