import ListarPropostasTemplate from "@/templates/listarPropostas";

const listarPropostas = () => {
  return <ListarPropostasTemplate />;
};

listarPropostas.getLayout = function getLayout(page: JSX.Element) {
  return page;
};

export default listarPropostas;
