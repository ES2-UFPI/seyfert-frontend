import HistoricoConsultaTemplate from "@/templates/historico-consulta";

const historicoConsulta = () => {
  return <HistoricoConsultaTemplate />;
};

historicoConsulta.getLayout = function getLayout(page: JSX.Element) {
  return page;
};

export default historicoConsulta;
