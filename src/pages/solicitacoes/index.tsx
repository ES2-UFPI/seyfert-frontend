import { NextPageWithLayout } from "@/app/_app";
import CadastrarSolicitacaoTemplate from "@/templates/CadastroSolicitacao";
import VisualizarConsultaTemplate from "@/templates/VisualizarConsultaTemplate";
import { GetServerSideProps } from "next";

const CadastrarSolicitacao = () => {
    return <CadastrarSolicitacaoTemplate />;
}

CadastrarSolicitacao.getLayout = function getLayout(page: JSX.Element) {
  return page;
};

export default CadastrarSolicitacao;