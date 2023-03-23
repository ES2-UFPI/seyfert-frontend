import Button from "../button";
import LabelTitleTop from "../label-title-top";
import styles from "./styles.module.css";

const PagamentoBoleto = () => {
  return (
    <div className={styles.container}>
      <center>
        <LabelTitleTop title="Boleto">
        </LabelTitleTop>

        <Button color="rgb(6, 165, 138)" childrenColor="rgb(255,255,255)">
          Emitir Boleto
        </Button>
      </center>
    </div>
  );
};

export default PagamentoBoleto;
