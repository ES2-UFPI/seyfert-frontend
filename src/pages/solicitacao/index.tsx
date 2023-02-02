import VisualizacaoDeSolicitacaoTemplate from "@/templates/solicitacao";
import 'bootstrap/dist/css/bootstrap.min.css'


const VisualizarSolicitacoes = () => {
    return <VisualizacaoDeSolicitacaoTemplate />
}

VisualizarSolicitacoes.getLayout = function getLayout(page: JSX.Element){
    return page;
}



export default VisualizarSolicitacoes;