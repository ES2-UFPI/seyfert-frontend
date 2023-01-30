import { NextPageWithLayout } from "@/app/_app";
import Layout from "@/components/layout/Layout";
import VisualizarConsultaTemplate from "@/templates/VisualizarConsultaTemplate";

const VisualizarConsulta: NextPageWithLayout = () => {
    return <VisualizarConsultaTemplate />
}

VisualizarConsulta.getLayout = function getLayout(page: JSX.Element){
    return page;
}

export default VisualizarConsulta;