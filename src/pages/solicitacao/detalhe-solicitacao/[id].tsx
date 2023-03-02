import DetalhesConsultaTemplate from "@/templates/solicitacao/detalhesConsultaTemplate";
import { GetServerSideProps } from "next";

type props = {
    id: string
}

const detalhesSolicitacao = ({ id }: props) => {
    return <DetalhesConsultaTemplate id= {id} />
}

detalhesSolicitacao.getLayout = function getLayout(page: JSX.Element){
    return page;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const id = ctx.query?.id
    return {
        props: {
            id
        }
    }
}

export default detalhesSolicitacao;