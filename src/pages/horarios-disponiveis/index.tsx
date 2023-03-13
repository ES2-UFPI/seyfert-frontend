import HorariosDisponiveisTemplate from "@/templates/horarios-disponiveis";

const HorariosDisponiveis = () => {
  return <HorariosDisponiveisTemplate />;
};

HorariosDisponiveis.getLayout = function getLayout(page: JSX.Element) {
  return page;
};

export default HorariosDisponiveis;
