import Link from 'next/link';
import styles from './styles.module.css';

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <p>Header de Home</p>
            </div>
            <div className={styles.container_content}>
                <p className={styles.name_seyfert}>Bem -Vindo(as) ao Seyfert</p>
                <div className={styles.container_links}>
                    <div className={styles.links}>
                        <span><Link className={styles.link} href="/">Login</Link></span>
                    </div>
                    <div className={styles.links}>
                        <span><Link className={styles.link} href="/">Cadastre-se</Link></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;