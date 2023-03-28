import styles from './styles.module.css';
import Button from "../button";

const PagamentoPix = () => {
    return (
      <div className={styles.container}>
        Pagamento da consulta via PIX
        <div>
          <Button color="rgb(6, 165, 138)" childrenColor="rgb(255,255,255)">
            Emitir Boleto
          </Button>
        </div>
      </div>
    );
}


export default PagamentoPix;