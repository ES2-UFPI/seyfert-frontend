import Button from '../button';
import LabelTitleTop from '../label-title-top';
import styles from './styles.module.css';

const PagamentoDebito = () => {
    return (
        <div className={styles.container}>
            <LabelTitleTop title='Numero Cartão'>
                <input type="text" placeholder='0000100011'/>
            </LabelTitleTop>
            <LabelTitleTop title='Nome no cartão'>
                <input type="text" placeholder='Ex: Meu Nome do Cartão'/>
            </LabelTitleTop>
            <LabelTitleTop title='Validade'>
                <input type="text" placeholder='04/2025'/>
            </LabelTitleTop>
            <LabelTitleTop title='CVV'>
                <input type="text" placeholder='000'/>
            </LabelTitleTop>

            <Button color='rgb(6, 165, 138)' childrenColor='rgb(255,255,255)'>Efetuar Pagamento</Button>
        </div>
    );
}

export default PagamentoDebito;