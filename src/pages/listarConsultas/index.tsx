import ListarConsultasTemplate from "@/templates/listarConsultas";

const listarConsultas = () => {
  return <ListarConsultasTemplate />;
};

listarConsultas.getLayout = function getLayout(page: JSX.Element) {
  return page;
};

export default listarConsultas;
