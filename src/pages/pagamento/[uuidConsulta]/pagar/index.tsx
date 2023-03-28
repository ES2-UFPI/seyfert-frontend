import ButtonComponent from "@/components/button";
import PagamentoDebito from "@/components/pagamento-debito";
import PagamentoPix from "@/components/pagamento-pix";
import PagamentoBoleto from "@/components/pagamento-boleto";
import Layout from "@/layout/Layout";
import { GetServerSideProps } from "next";
import { useState } from "react";
import styles from './styles.module.css'

type PagamentoConsultaProps = {
    uuidConsulta: string
}

const PagamentoConsulta = ({ uuidConsulta } : PagamentoConsultaProps) => {
    const opcoesPagamento = ['DEBITO', 'PIX', 'BOLETO'];
    const [opcaoPagamentoEscolhido, setOpcaoPagamento] = useState(opcoesPagamento[0]);

    function compare(value1: string, value2: string): boolean {
        return value1 == value2;
    }

    function alterarValor(valor: string): void {
        setOpcaoPagamento(valor);
    }

    function renderizadorComponent(tipoPagamento: string) {
        if(tipoPagamento == opcoesPagamento[0]){
            return <PagamentoDebito />
        }
        if(tipoPagamento == opcoesPagamento[1]){
            return <PagamentoPix />
        }
        if(tipoPagamento == opcoesPagamento[2]){
            return <PagamentoBoleto />;
        }
    }

    return (
        <Layout title="Pagamento da consulta" titleHeader="Pagamento da consulta">
            <div className={styles.container}>
                <p>{uuidConsulta}</p>
                <div >
                    <div className={styles.area_pagamento}>
                        <div className={styles.area_pagamento_top}>
                            {opcoesPagamento.map((elemento, index) => {
                            return (
                                <ButtonComponent 
                                    key={index}
                                    onClick={(e: any) => alterarValor(elemento)} 
                                    color={compare(elemento, opcaoPagamentoEscolhido) ? "rgb(29, 66, 230)" : "rgb(177, 177, 177)"} 
                                    childrenColor="rgb(56, 56, 56)">
                                    {elemento}
                                </ButtonComponent>
                            )})}
                        </div>
                        <div className={styles.area_pagamento_body}>
                            {
                                !!opcaoPagamentoEscolhido && (renderizadorComponent(opcaoPagamentoEscolhido))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const id = ctx.query?.uuidConsulta
    return {
        props: {
            uuidConsulta: id
        }
    }
}

export default PagamentoConsulta;