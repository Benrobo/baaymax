import { Layout, Intro, Container, Projects, Testimonials, Contact, Footer } from "../components";


export default function HomePage() {

    return (
        <div>
            <Layout>
                <Container>
                    <Intro />
                    <Projects />
                </Container>
                <Testimonials />
                <Contact />
                <Footer />
            </Layout>
        </div>
    )
}

