import PagamentoConsultaTemplate from "@/templates/pagamento-consulta";

import { GetServerSideProps } from "next";

type props = {
    id: string
}

const PagamentoConsulta = ({ id }: props) => {
    return <PagamentoConsultaTemplate id={id} />
}

PagamentoConsulta.getLayout = function getLayout(page: JSX.Element){
    return page;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const id = ctx.query?.uuidConsulta
    return {
        props: {
            id
        }
    }
}

export default PagamentoConsulta;