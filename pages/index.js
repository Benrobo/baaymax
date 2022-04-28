import { Layout } from "../components";


export default function HomePage(){

    return (
        <div>
            <Layout>
                <h1>{process.env.NAME}</h1>
            </Layout>
        </div>
    )
}

