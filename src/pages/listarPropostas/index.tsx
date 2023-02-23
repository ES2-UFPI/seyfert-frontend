import ListarPropostasTemplate from "@/templates/listarPropostas";
import "bootstrap/dist/css/bootstrap.min.css";

const ListarPropostas = () => {
  return <ListarPropostasTemplate />;
};

ListarPropostas.getLayout = function getLayout(page: JSX.Element) {
  return page;
};

export default ListarPropostas;
