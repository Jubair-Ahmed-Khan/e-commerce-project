import Head from "next/head";
import NavBar from "./Navbar";
import Footer from "./Footer";
const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css" />
                <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"></link>
                <link rel="stylesheet" href="/style.css" />

            </Head>

            <NavBar />

            {children}
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

            <Footer />
        </>
    )
}

export default Layout;