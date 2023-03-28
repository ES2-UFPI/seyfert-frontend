import Label from "../label-title-top";
import styles from './styles.module.css';

type BoardComLabelsPorps = {
    title: string
    children?: React.ReactNode
}

const BoardComLabels = ({ title, children } : BoardComLabelsPorps) => {
    return (
        <div className={styles.board}>
            <div>
                <span className={styles.title_board}>{title}</span>
            </div>
            <div className={styles.content_board}>
                {children}
            </div>
        </div>
    );
}

export default BoardComLabels;