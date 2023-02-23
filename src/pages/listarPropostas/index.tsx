import ListarPropostasTemplate from "@/templates/listarPropostas";
import "bootstrap/dist/css/bootstrap.min.css";

const listarPropostas = () => {
  return <ListarPropostasTemplate />;
};

listarPropostas.getLayout = function getLayout(page: JSX.Element) {
  return page;
};

export default listarPropostas;
