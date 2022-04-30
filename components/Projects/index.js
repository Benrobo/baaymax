

import styles from "./projects.module.css"

function Projects() {
  return (
    <div className={styles.projectsCont}>
        <div className={styles.top}>
            <span className={styles.line}></span>
            <p className={styles.title}>Latest Works</p>
            <span className={styles.line}></span>
        </div>

        <div className={styles.projects}>
            {
                [2,3,4,45].slice(0,3).map((list)=>{
                    return (
                        <div className={styles.box} key={list}>
                            <div className="imgCont"></div>
                            <style jsx>{`
                                .imgCont{
                                    width: 100%;
                                    height: 150px;
                                    background-image: url("https://www.wallpapertip.com/wmimgs/136-1369543_laptop-coding.jpg");
                                    background-size: cover;
                                    background-repeat: no-repeat;
                                    background-position: center;
                                    // box-shadow: 0px 0px 3px #000;
                                    border-radius: 5px;
                                }
                            `}</style>
                            <div className={styles.body}>
                                <p className={styles.title}>E-Workflow System</p>
                                <br />
                                <div className={styles.tagsCont}>
                                    <span className={styles.tag}>Html</span>
                                    <span className={styles.tag}>Css</span>
                                    <span className={styles.tag}>Js</span>
                                </div>
                                <span className={styles.linkCont}>
                                    <a href="" className={styles.link}>
                                        View
                                    </a>
                                    <ion-icon name="arrow-forward-outline" className={styles.icon}></ion-icon>
                                </span>
                                
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Projects