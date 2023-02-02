import CadastrarSolicitacaoTemplate from "@/templates/CadastroSolicitacao";

const CadastrarSolicitacao = () => {
    return <CadastrarSolicitacaoTemplate />;
}

CadastrarSolicitacao.getLayout = function getLayout(page: JSX.Element) {
  return page;
};

export default CadastrarSolicitacao;