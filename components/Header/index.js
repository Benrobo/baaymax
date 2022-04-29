
import { Container } from ".."
import styles from "./header.module.css"

export default function Header({ children }) {

    return (
        <header className={styles.header}>
            <Container>
                {children}
            </Container>
        </header>
    )
}


