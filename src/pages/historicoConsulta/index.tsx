import HistoricoConsultaTemplate from "@/templates/historicoConsulta";
import "bootstrap/dist/css/bootstrap.min.css";

const historicoConsulta = () => {
  return <HistoricoConsultaTemplate />;
};

historicoConsulta.getLayout = function getLayout(page: JSX.Element) {
  return page;
};

export default historicoConsulta;
