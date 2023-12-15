import App from "../pages/App.jsx";
import {createBrowserRouter} from "react-router-dom";
import {Home} from "../pages/Principal/Home.jsx";

const Root = createBrowserRouter([
    {
        path: "/",
        Component:App,
        children:[
            {
                path:"/",
                Component: Home,
                exact:true
            }
        ]
    }
])

export  default Root;