
import AgendarConsultaTemplate from "@/templates/agendar-consulta-template";
import { GetServerSideProps } from "next";

type  AgendarConsultaProps = {
    idHorario: string
}

const AgendarConsulta = ( { idHorario } : AgendarConsultaProps) => {
  return <AgendarConsultaTemplate idHorario={idHorario} />;
};

AgendarConsulta.getLayout = function getLayout(page: JSX.Element) {
  return page;
};


export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const idHorario = ctx.query?.uuidHorario
    return {
        props: {
            idHorario
        }
    }
}

export default AgendarConsulta;
