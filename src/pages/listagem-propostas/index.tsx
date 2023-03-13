import ListarPropostasTemplate from "@/templates/listar-propostas";

const listarPropostas = () => {
  return <ListarPropostasTemplate />;
};

listarPropostas.getLayout = function getLayout(page: JSX.Element) {
  return page;
};

export default listarPropostas;
