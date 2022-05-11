import { Layout, Intro, Container, Projects } from "../components";


export default function HomePage() {

    return (
        <div>
            <Layout>
                <Container>
                    <Intro />
                    <Projects />
                </Container>
            </Layout>
        </div>
    )
}

