/* ############## - Imports - ############# */

import Footer from "./components/Footer";
import Header from "./components/Header";
import Router from "./router";

/* ############## - App - ############# */

function App() {
    return(
    <>
        <Header/>
        <Router></Router>
        <Footer/>
    </>
    )
}

/* ############## - Exports - ############# */

export default App;