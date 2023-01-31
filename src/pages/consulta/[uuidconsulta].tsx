import { NextPageWithLayout } from "@/app/_app";
import VisualizarConsultaTemplate from "@/templates/VisualizarConsultaTemplate";
import { GetServerSideProps } from "next";

type props = {
    id: string
}

const VisualizarConsulta = ({ id }: props) => {
    return <VisualizarConsultaTemplate consultaUuid={id} />
}

VisualizarConsulta.getLayout = function getLayout(page: JSX.Element){
    return page;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const id = ctx.query?.uuidconsulta
    return {
        props: {
            id
        }
    }
}

export default VisualizarConsulta;