
import { Container } from ".."
import styles from "./header.module.css"

import avatar from "../../public/images/avatar/avatar.png"

export default function Header({ children }) {

    return (
        <header className={styles.header}>
            <Container>
                {children}

                <div className={styles.main}>

                    <div className={styles.left}>
                        <div className={styles.top}>
                            <span className={styles.badge}>
                                Software Engineer
                            </span>
                            <br />
                            <br />
                            <h1 className={styles.heading}>
                                Making The Impossible Possible. Using 1's and 0's.
                            </h1>
                            <br />
                            <span className={styles.info}>
                                Problem solving is what makes me unique.
                            </span>
                            <br />
                        </div>
                        <div className={styles.bottom}>
                            <div className={styles.bx}>
                                <h1 className={styles.h1}>
                                    12
                                </h1>
                                <span className={styles.span}>
                                    Years of Experience
                                </span>
                            </div>
                            <div className={styles.bx}>
                                <h1 className={styles.h1}>
                                    120
                                </h1>
                                <span className={styles.span}>
                                    Project Completed
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.mainArea}>
                            <img src={avatar.src} className={styles.avatar} />
                        </div>
                        <div className={styles.circleA}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className={styles.langImgA} />
                        </div>
                        <div className={styles.circleB}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className={styles.langImgB} />
                        </div>
                        <div className={styles.circleC}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" className={styles.langImgC} />
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    )
}


