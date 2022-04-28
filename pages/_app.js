import {Layout} from "../components"

import "../styles/global.css"


export default function App({Component, pageProps}){

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

