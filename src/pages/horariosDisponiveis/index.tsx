import HorariosDisponiveisTemplate from "@/templates/horariosDisponiveis";

const HorariosDisponiveis = () => {
  return <HorariosDisponiveisTemplate />;
};

HorariosDisponiveis.getLayout = function getLayout(page: JSX.Element) {
  return page;
};

export default HorariosDisponiveis;
