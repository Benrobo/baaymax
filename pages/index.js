import { Layout, Intro, Container, Projects, Contact, Footer, Quote, DomHead } from "../components";
import { useEffect } from "react";
import Aos from "aos"
import { DataContextProvider } from "../context/DataContext";

export default function HomePage() {

    useEffect(() => {
        Aos.init({ duration: "1000" })
    }, [])

    return (
        <DataContextProvider>
            <DomHead />
            <Layout>
                <Container>
                    <Intro />
                    <Projects />
                </Container>
                <Quote />
                <Contact />
                <Footer />
            </Layout>
        </DataContextProvider>
    )
}

