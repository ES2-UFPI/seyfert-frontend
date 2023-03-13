import ListarConsultasTemplate from "@/templates/listar-consultas";

const listarConsultas = () => {
  return <ListarConsultasTemplate />;
};

listarConsultas.getLayout = function getLayout(page: JSX.Element) {
  return page;
};

export default listarConsultas;
