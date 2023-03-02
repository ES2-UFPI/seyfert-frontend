import HistoricoConsultaTemplate from "@/templates/historicoConsulta";

const historicoConsulta = () => {
  return <HistoricoConsultaTemplate />;
};

historicoConsulta.getLayout = function getLayout(page: JSX.Element) {
  return page;
};

export default historicoConsulta;
