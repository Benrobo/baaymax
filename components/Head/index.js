import Head from 'next/head'
import userInfo from "../../data/usersInfo.json"

export default function DomHead({ pageName = "Home Page" }) {

    return (
        <Head>
            <title>Baaymax - {pageName} </title>
            {/* meta tags begins */}
            {/* Primary Meta Tags */}
            <meta name="title" content="BaayMax — Generate a unique developer portfolio with just one click" />
            <meta name="description" content="Generating of portfolio just got easier. Using BaayMax and a single command, you're on set." />
            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://github.com/benrobo/baaymax-cli/" />
            <meta property="og:title" content="BaayMax — Generate a unique developer portfolio with just one click" />
            <meta property="og:description" content="Generating of portfolio just got easier. Using BaayMax and a single command, you're on set." />
            <meta property="og:image" content="https://github.com/Benrobo/baaymax-cli/raw/master/readmeImg/cli.png?raw=true" />

            {/* <!-- Twitter --> */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content="https://metatags.io/" />
            <meta property="twitter:title" content="BaayMax — Generate a unique developer portfolio with just one click" />
            <meta property="twitter:description" content="Generating of portfolio just got easier. Using BaayMax and a single command, you're on set." />
            <meta property="twitter:image" content="https://github.com/Benrobo/baaymax-cli/raw/master/readmeImg/cli.png?raw=true" />

            {/* meta tags end */}
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
            <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
            <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        </Head>
    )
}

