import styles from './styles.module.css';

const PagamentoPix = () => {
    return (
        <div className={styles.container}>
            Pagamento da consulta via PIX
            <div>
                <img className={styles.qrcode} src="/qrcode.png" alt="" />
            </div>
        </div>
    );
}


export default PagamentoPix;