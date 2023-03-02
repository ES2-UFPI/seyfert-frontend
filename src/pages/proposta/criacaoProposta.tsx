import { NextPageWithLayout } from "@/app/_app";
import criarPropostaTemplate from "@/templates/CadastroProposta/criarPropostaTemplate";
import { GetServerSideProps } from "next";

type props = {
    id: string
}

const criarProposta = ({ id }: props) => {
    return <criarPropostaTemplate id= {id} />
}

criarProposta.getLayout = function getLayout(page: JSX.Element){
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

export default criarProposta;