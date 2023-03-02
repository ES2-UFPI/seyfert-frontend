import VisualizacaoDeSolicitacaoTemplate from "@/templates/solicitacao";

const VisualizarSolicitacoes = () => {
    return <VisualizacaoDeSolicitacaoTemplate />
}

VisualizarSolicitacoes.getLayout = function getLayout(page: JSX.Element){
    return page;
}



export default VisualizarSolicitacoes;