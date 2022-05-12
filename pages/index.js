import { Layout, Intro, Container, Projects, Testimonials } from "../components";


export default function HomePage() {

    return (
        <div>
            <Layout>
                <Container>
                    <Intro />
                    <Projects />
                </Container>
                <Testimonials />
            </Layout>
        </div>
    )
}

