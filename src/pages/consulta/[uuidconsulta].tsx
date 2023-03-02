import VisualizarConsultaTemplate from "@/templates/visualizar-consulta-template";
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