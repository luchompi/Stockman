import {createBrowserRouter} from "react-router-dom";
import App from "../pages/App.jsx";
import Home from "../pages/Principal/Home.jsx";
import AuthRoutes from "./auth.routes.js";

const Root = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                path: "/",
                Component: Home
            },
            ...Array.from(AuthRoutes),
        ]
    }
])

export default Root;