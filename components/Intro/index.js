

import styles from "./intro.module.css"


export default function Intro() {

    return (
        <div className={styles.intro}>
            <div className={styles.introCont}>
                <div className={styles.left}>
                    <div className={styles.box}>
                        <div className={styles.top}>
                            <p className={styles.title}>
                                Design
                            </p>
                            <span className={styles.info}>
                                Create digital products with unique ideas
                            </span>
                        </div>
                        <div className={styles.bottom}>
                            <a href="" className={styles.link}>
                                20 Projects
                            </a>
                        </div>
                        <ion-icon name="color-wand" class={styles.icon}></ion-icon>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.top}>
                            <p className={styles.title}>
                                Frontend Development
                            </p>
                            <span className={styles.info}>
                                Development of beautiful and unique user interfaces.
                            </span>
                        </div>
                        <div className={styles.bottom}>
                            <a href="" className={styles.link}>
                                120 Projects
                            </a>
                        </div>
                        <ion-icon name="code-slash" class={styles.icon}></ion-icon>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.top}>
                            <p className={styles.title}>
                                Backend Development
                            </p>
                            <span className={styles.info}>
                                Development of complex and scalable backend architecture.
                            </span>
                        </div>
                        <div className={styles.bottom}>
                            <a href="" className={styles.link}>
                                100 Projects
                            </a>
                        </div>
                        <ion-icon name="server" class={styles.icon}></ion-icon>
                    </div>
                </div>
                <div className={styles.right}>
                    <p className={styles.title}>Introduce</p>
                    <div className={styles.main}>
                        <h1 className={styles.intro}>
                            Hello! I'm Benaiah Alumona.
                        </h1>
                        <br />
                        <br />
                        <p className={styles.subtitle}>
                            Mission driven software engineer, with a passion for thoughtful UI design, collaboration, and teaching.
                        </p>
                        <br />
                        <p className={styles.briefIntro}>
                            As a software developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things, and my mission-driven work ethic to literally change the world. That's why I’m excited to make a big impact at  a high growth company.
                        </p>
                    </div>
                </div>
            </div>
            {/* <div className={styles.companies}>
                <img src="https://avatars.githubusercontent.com/u/104397777?s=200&v=4" className={styles.compImage} alt="" />
                <img src="" className={styles.compImage} alt="" />
            </div>
            <br /> */}
        </div>
    )
}
