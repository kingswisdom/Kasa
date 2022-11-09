/* ############## - Imports - ############# */

import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Error from "./routes/Error";
import About from './routes/About';
import Lodging from './routes/Lodging'


/* ############## - Router Logic - ############# */

function Router() {
    return(
        <Routes>
			<Route path="*" element={<Error />}></Route>
			<Route path="/" element={<Home />}></Route>
			<Route path="/about" element={<About />}></Route>			
			<Route path="/lodging/:id" element={<Lodging />}></Route>
		</Routes>
    )
}


/* ############## - Exports - ############# */

export default Router;