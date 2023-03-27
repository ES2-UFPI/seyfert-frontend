import { useEffect, useState } from "react"
import styles from "./styles.module.css";

type props = {
    isApagado: boolean
    onClick?: () => void
}

const ToastyFake = ( { isApagado, onClick }: props ) => {
    const [isVisible, setIsVisble] = useState<boolean>(isApagado);

    if(!isVisible){
        setTimeout(() => {
            setIsVisble(!isVisible);
        }, 4000);

    }


    return (
        <div className={styles.container} style={{
            display: isVisible ? "none" : "unset"
        }}>
            <p>Deu bom</p>
        </div>
    );
}

export default ToastyFake;