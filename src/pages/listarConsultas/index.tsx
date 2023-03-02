import ListarConsultasTemplate from "@/templates/listarConsultas";
import "bootstrap/dist/css/bootstrap.min.css";

const listarConsultas = () => {
  return <ListarConsultasTemplate />;
};

listarConsultas.getLayout = function getLayout(page: JSX.Element) {
  return page;
};

export default listarConsultas;
