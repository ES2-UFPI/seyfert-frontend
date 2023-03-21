import styles from './styles.module.css';

interface ButtonProps {
    onClick?: (e: any) => void;
    children?: React.ReactNode;
    color: string;
    childrenColor: string
}

const ButtonComponent = ({ onClick, color, childrenColor, children }: ButtonProps) => {
    return (
        <button 
            className={styles.button}
            style={{
                backgroundColor: color,
                color: childrenColor
            }}
            onClick={onClick}
        >
            {children}
        </button>
    );
}


export default ButtonComponent ;