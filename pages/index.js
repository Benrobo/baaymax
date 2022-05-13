import { Layout, Intro, Container, Projects, Contact, Footer, Quote } from "../components";
import { useEffect } from "react";
import Aos from "aos"

export default function HomePage() {

    useEffect(() => {
        Aos.init({ duration: "1500" })
    }, [])

    return (
        <div>
            <Layout>
                <Container>
                    <Intro />
                    <Projects />
                </Container>
                <Quote />
                <Contact />
                <Footer />
            </Layout>
        </div>
    )
}

