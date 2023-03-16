import { useState } from "react";
import styles from './styles.module.css'
import Layout from "../layout/Layout"
import Button from "@/components/button";
import PagamentoPix from "@/components/pagamento-pix";
import PagamentoDebito from "@/components/pagamento-debito";

type PagamentoConsultaProps = {
    id: string
}

const PagamentoConsultaTemplate = ({ id } : PagamentoConsultaProps) => {
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
            return (<><p>Tipo de pagamento {tipoPagamento}</p></>);
        }
    }

    return (
        <Layout title="Pagamento da consulta" titleHeader="Pagamento da consulta">
            <div className={styles.container}>
                <div >
                    <div className={styles.area_pagamento}>
                        <div className={styles.area_pagamento_top}>
                            {opcoesPagamento.map((elemento, index) => {
                            return (
                                <div>
                                    <Button 
                                        onClick={e => alterarValor(elemento)} 
                                        color={compare(elemento, opcaoPagamentoEscolhido) ? "rgb(29, 66, 230)" : "rgb(177, 177, 177)"} 
                                        childrenColor="rgb(56, 56, 56)">
                                        {elemento}
                                    </Button>
                                </div>
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

export default PagamentoConsultaTemplate;